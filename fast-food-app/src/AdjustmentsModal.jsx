import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function AdjustmentsModal({
  show, //boolean, is named showModal in Menu.jsx
  onClose, // function to close the modal
  onSave, // function to save the selectedObjects, called "handleSavingAdjustments" in Menu.jsx
  ingredients = [],  // This is the array with pizza ingredients passed from the Menu component
  initialSelected = [], // initial selected ingredients, default is an empty array. This array in never passed from the App component
}) {
  const [selectedIds, setSelectedIds] = useState(initialSelected);

  useEffect(() => {
    // Reset selectedIds when modal is closed (optional behavior)
    if (!show) setSelectedIds([]);
  }, [show]);

  const toggle = (id) =>
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const selectedObjects = ingredients.filter((i) => selectedIds.includes(i.id));
  const extraTotal = selectedObjects.reduce((sum, i) => sum + i.price, 0);

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Choose Extra Toppings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {ingredients.map((ing) => (
          <Form.Check
            key={ing.id}
            type="checkbox"
            id={`ing-${ing.id}`}
            className="mb-2"
            label={`${ing.ingredient} (+${ing.price} SEK)`}
            checked={selectedIds.includes(ing.id)}
            onChange={() => toggle(ing.id)}
          />
        ))}
        <div className="mt-3 fw-semibold">Extra: {extraTotal} SEK</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => onSave(selectedObjects)}> {/* handleSavingAdjustments(adjustments) results in calling
         addItemToOrder({...activeItem, adjustments });, which creates an item with the adjustments and put the item in the Order component to display*/}
          Add To Order
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
