#Todo's:
##TODO 1:
Add button for adding toppings to items named "Adjustments To Order"
1. Button should call a modal.
2. In modal-window toppings can be added to or deducted from the order.
3. After pressing a button, "Add To Order", in the modal-window, the toppings that are added or deducted from item will be added to the item price 

###Practical arrangements:
Create an array of objects with various toppings and the respective price to select from
Loop through this array to create UI with text and buttons to add or deduct ingredient from the list
After the button "Adjustments To Order" in Menu.jsx is pressed, an array is created to add objects to, for instance.:
    const adjustments = [{ingredient: extra cheese, price: 5}, {ingredient: pineapple, price: 10}] 
item, , if button "Adjustments To Order" is pressed.
Adding or deducting to this array with - and + buttons should show as UI in the popup-window with name and price and total price of the dish
After pressing "Add To Order", the array adjustments is added to item, i.e. item.adjustments

Adjust addItemToOrder() to filter for items with same item.adjustments




