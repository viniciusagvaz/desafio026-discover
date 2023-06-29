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

   updatePortions() {
      document
         .querySelector('.portionsQuantity span')
         .innerHTML = number < 10 ? `0${number}` : number
   },

   formatIngredients(ingredientQuantity) {
      let result = number * ingredientQuantity
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
            <li>${number} colher (café) de sal</li>
            <li>${Quantity.formatIngredients(250)} de farinha de milho flocada amarela</li>
          `
   },

}

Quantity.updatePortions()
Quantity.updateIngredients()


