//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(array, string){
    return (array.filter(driver => driver.toLowerCase()=== string.toLowerCase()))
}

function fuzzyMatch(array, string){
    return (array.filter(driver => driver.charAt(0,2) ===string.charAt(0,2)))
}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ]

function matchName(array, string){
    return array.filter((element) => element.name === string)

}
console.log(matchName(drivers, "Bobby"))




// console.log(findMatching(drivers, "Bobby"))




// const addTwoNumbers = (a, b) => {
//     return a + b
// }

// console.log(addTwoNumbers(3, 2));
