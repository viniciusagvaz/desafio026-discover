let quantity = 1;

Quantity = {
	less() {
		quantity > 1 ? quantity-- : quantity;
		Quantity.updateQuantities();
	},

	more() {
		quantity < 99 ? quantity++ : quantity;
		Quantity.updateQuantities();
	},

	formatIngredients(ingredientQuantity) {
		const result = quantity * ingredientQuantity;

		return result >= 1000 ? `${result / 1000}kg` : `${result}g`;
	},

	updateRecipes() {
		document.querySelector(".recipesQuantity span").innerHTML =
			quantity < 10 ? `0${quantity}` : quantity;
	},

	updateIngredients(i1, i2, i3) {
		const spoon = quantity > 1 ? `colheres` : `colher`;

		document.querySelector("ul").innerHTML = `
            <li>${Quantity.formatIngredients(
							i2
						)} de amendoim sem pele torrado</li>
            <li>${Quantity.formatIngredients(i1)} de açúcar</li>
            <li>${Quantity.formatIngredients(
							i3
						)} de farinha de milho flocada</li>
            <li>${quantity} ${spoon} (café) de sal</li>
          `;
	},

	updateQuantities() {
		Quantity.updateRecipes();
		Quantity.updateIngredients(500, 500, 250);
	},
};
