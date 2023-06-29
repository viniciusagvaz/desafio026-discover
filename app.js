let number = 1

// const getQuantity = () => {
//    let value = document.querySelector('input').value
//    number = Number(value)
// }

// getQuantity()

Quantity = {
   print() {
      document
         .querySelector('.portionsQuantity')
         .innerHTML = number < 10 ? `0${number}` : number
   },

   less() {
      // document
      //    .querySelector('.portionsQuantity')
      //    .innerHTML = number
      number--

   },

   more() {
      // document
      //    .querySelector('.portionsQuantity')
      //    .innerHTML = number

      number++
   },

}

Quantity.print()