var moment = require('moment')

//String
// var word = '            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.              '

//console.log(word.length) // <-- property ( a variable essentially)
//console.log(word.toUpperCase()) // <-- method (a function essentially)
//console.log(word.toLowerCase()) // <-- method
// word = word.toUpperCase()
// word = word.trim()
// word = word.toLowerCase()

// word = word.toUpperCase().trim().toLowerCase()

var word = 'City of Indianapolis.'
// word = word.repeat(2)

// word = 'Pizza Is Amazing'.slice(9) //count the letters in string it starts from 0 and if we wat amazing we will start from 9
// word = 'Pissa Is Amazing'.substr(9,1)
// word = 'Pissa Is Amazing'.substr(-7,7) // you can use - to start backwards to get Amazing, and 7 significes that you will go 7 more words forward
// word = 'Pizza Is Amazing'.slice(9,16) //the 9 is the start point and 16 is end point
// word= word.split(' ') // the space is saying u want to split words at spaces. if you have comma in your string u can use , in the split to split up the string at the ,

// var word = 'City of Indianapolis.'
var indianaIndexStart = word.indexOf('Indiana') // can use to figure out where the word indiana starts which is 8
var whatIsTheLetter = word.charAt(8) // allows you to check what letter starts at index 8 which is I
// var isItIndianapolis = word .includes('Indianapolis') // you can check is indianapolis is in the var word. if yes it will say true
var isItIndianapolis = word .includes('Seattle') // will show false since our var doesnt have this word in it
word = word.replace('Indianapolis', 'Seattle') //replaces indianapolis with seattle in the var when ran in the terminal
// console.log(word)

var phoneNumber = 'Phone Number 123-123-1234 312-312-2343'
// var hasPhoneNumber = phoneNumber.match(/\d\d\d-\d\d\d-\d\d\d\d/) //tells js the phone number with number and hyphen it will then tell you what it found matching that and at what index and what string.
var hasPhoneNumber = phoneNumber.replace(/\d\d\d-\d\d\d-\d\d\d\d/gi, '[Redacted]')// using g will find everymatch and replace it with Redacted i is case insensitive means it will find it no matter upper or lower case
// console.log(hasPhoneNumber) // using the [0] will only show the match with number and not the index or string it found it in.


//Number

var number = Number('1')
number = number + (number *50)
number ++ // it not only increments the number but it modifies the number  same thing as number = number + 1
// console.log(number)

//Math

var price = 12.70
// var priceRounded = Math.round(price)
// var priceRounded = Math.ceil(price) // using ceil always bumps it up to the next number so you can have 12.49 and it will output 13
var priceRounded = Math.floor(price) // it does the opposite of ceil and will always go from 12.81 to 12.
// console.log(Math.PI)// used to get the pie of price

// var randomNumber = Math.random() // using this will give you a random number everytime but is a decimal number between 0-1
var randomNumber = Math.round(Math.random()*10) // will output a number between 0-10 whole number without decimal using round.
// console.log(randomNumber)

var price = 12.045
var cents = String(price).split('.')[1].substr(0,2)
var dollars = String(price).split('.')[0]
price = dollars + '.' + cents
// console.log(price)

//Date

var today = new Date()
// console.log(today) // will output 2016-10-12T15:22:21.844Z it will always show bigger value first so year then month then day then T for time
// console.log(today)

var yesterday = moment().subtract(2400, 'seconds')
// console.log(yesterday.format('MM/DD/YYYY HH:mm:ss'))

//Object

var pizza = Object()
// var pie = {} // same thing as writing Object() using {} is the shorthand of it
var pie = {
    ingredients: 'stuff', //end each line with comma
    meat: 'pepperoni',
    cheese: 'mozzarella',
    price: 14.99,
    priceRounded: Math.round(14.99),
}
console.log(pie)

//Array
//are a list of things seperated with comma's. you can put anythng in there string,number,boolean,object,date,function
// var ingredients = ['meat','cheese','sauce','spices','crust']
var ingredients = [
    'meat',
    'cheese',
    'sauce',
    'spices',
    'crust',
    12,
    true,
    moment().format('MM/DD/YYYY'),
    {
        sausage: 'mystery'
    }
]
// console.log(ingredients)

// var name = String('Manny') //its the same thing as writing it without the String
// var name2 = 'Manny'
//
// console.log(name === name2)
//
// var number = Number(1) //same thing as  === 1
// var boolean = Boolean(true) //same thing as === true
