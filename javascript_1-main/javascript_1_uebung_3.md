# Build an Invoice Generator according to the following template from Figma:
**Design Template for the exercise**
[Invoice Generator Figma Template](https://www.figma.com/file/roUn8DT7zHTI9tcL2JXNZG/Invoice-Generator?type=design&node-id=0-14&mode=design&t=cQEoUsHAZtwvAaqN-0) (You can login to figma (or create an account) to you see more details about fonts and colors)

- The Invoice Generator should look like the design provided in Figma (colors, fonts, ...) - choose either the light or dark design (you don't need to implement both).
- Use HTML, CSS and JavaScript to create the Invoice Creator
- Clicking on a button (Wash Car, Mow Lawn, Pull Weeds) should add the corresponding product to the invoice, for example, onclick="addProduct(1)".
- When adding a product to the invoice, recalculate the total invoice amount.
- The "Remove" button should remove a product from the invoice.

Invoice Calculator requirements:
- Use an array to hold the selected products.
- Use buttons to add a product to array
- Charge only once for each task
- Update total amount each time a task gets added or removed
- Button "send invoice" should reset the calculator

Hints:
- Make it easy to add and remove products. Store all products in an object.
- Provide only one function for adding addProduct(productId) and removing removeProduct(productId), not a separate function for each product.
- Dynamically create the product list on the invoice, rather than just toggling the visibility of products.

