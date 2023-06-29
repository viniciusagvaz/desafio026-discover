let quantity = 1

Quantity = {
   less() {
      quantity > 1 ? quantity-- : quantity
      Quantity.updatePortions()
      Quantity.updateIngredients()
   },

   more() {
      quantity < 99 ? quantity++ : quantity
      Quantity.updatePortions()
      Quantity.updateIngredients()
   },

   updatePortions() {
      document
         .querySelector('.portionsQuantity span')
         .innerHTML = quantity < 10 ? `0${quantity}` : quantity
   },

   formatIngredients(ingredientQuantity) {
      let result = quantity * ingredientQuantity

      if (result >= 1000) {
         return `${result / 1000} kg`
      }

      return `${result}g`
   },

   updateIngredients() {
      document
         .querySelector('ul')
         .innerHTML = `
            <li>${Quantity.formatIngredients(500)} de açúcar</li>
            <li>${Quantity.formatIngredients(500)} de amendoim sem pele torrado</li>
            <li>${quantity} colher (café) de sal</li>
            <li>${Quantity.formatIngredients(250)} de farinha de milho flocada amarela</li>
          `
   },
}

Quantity.updatePortions()
Quantity.updateIngredients()