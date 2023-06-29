let quantity = 1

Quantity = {
   less() {
      quantity > 1 ? quantity-- : quantity
      Quantity.updatePortions()
      Quantity.updateIngredients(500, 500, 250)
   },

   more() {
      quantity < 99 ? quantity++ : quantity
      Quantity.updatePortions()
      Quantity.updateIngredients(500, 500, 250)
   },

   updatePortions() {
      document
         .querySelector('.portionsQuantity span')
         .innerHTML = quantity < 10 ? `0${quantity}` : quantity
   },

   formatIngredients(ingredientQuantity) {
      let result = quantity * ingredientQuantity

      if (result >= 1000) {
         return `${result / 1000}kg`
      }

      return `${result}g`
   },

   updateIngredients(i1, i2, i3) {
      let spoon = quantity > 1 ? `colheres` : `colher`

      document
         .querySelector('ul')
         .innerHTML = `
            <li>${Quantity.formatIngredients(i1)} de açúcar</li>
            <li>${Quantity.formatIngredients(i2)} de amendoim sem pele torrado</li>
            <li>${Quantity.formatIngredients(i3)} de farinha de milho flocada</li>
            <li>${quantity} ${spoon} (café) de sal</li>
          `
   },
}