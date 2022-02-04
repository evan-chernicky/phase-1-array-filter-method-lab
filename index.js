// Code your solution here

//Problem 1
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching (names, string){

    const foundString = names.filter(el => el.toLowerCase() === string.toLowerCase())

    return foundString

}

findMatching(drivers, 'Bobby')


//Problem 2

function fuzzyMatch (names, searchLetters) {

    const howManyLetters = searchLetters.length;

    const foundString = names.filter(el => el.substring(0, howManyLetters) === searchLetters)

    return foundString

}

fuzzyMatch(drivers, 'Sa')


//Problem 3

const driversObject = [
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
  ];

function matchName (drivers, string) {

    const foundDrivers = drivers.filter(el => el.name === string);


    return foundDrivers

}

matchName(driversObject, 'Bobby' )