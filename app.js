let number = 1

Quantity = {
   less() {
      number > 1 ? number-- : number

      Quantity.updatePortions(number)
      Quantity.updateIngredients()
   },

   more() {
      number < 99 ? number++ : number
      Quantity.updatePortions(number)
      Quantity.updateIngredients()
   },

   updateIngredients() {
      document
         .querySelector('ul')
         .innerHTML = `
            <li>${500 * number}g de açúcar</li>
            <li>${500 * number}g de amendoim sem pele torrado</li>
            <li>${1 * number} colher (café) de sal</li>
            <li>${500 * number}g de farinha de milho flocada amarela</li>
          `
   },

   updatePortions() {
      document
         .querySelector('.portionsQuantity')
         .innerHTML = number < 10 ? `0${number}` : number
   }
}

Quantity.updatePortions()
Quantity.updateIngredients()


