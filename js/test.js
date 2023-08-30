


const getNumbers = (arr=[]) => {
    let positiveCount = 0
    let negativeCounter  = 0
    for (let elm in arr){
        if (arr[elm] >= 0){
            positiveCount += 1
        }else if (arr[elm] < 0){
            negativeCounter++
        }
    }
    console.log(`\n[+] there is ${positiveCount} positive numbers , and ${negativeCounter} negative numbers`)
}

const generateRandomList = () =>{
    let array = [1,2,3,4,5,6,7,8,9,10,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]

    let randomNumbers = []

    array.forEach((elm)=>{
        let tempNumber = Math.floor(Math.random() * array.length)
        randomNumbers.push(array[tempNumber])
    })

    return randomNumbers
}

// getNumbers(generateRandomList())


// const getStringProp = (obj={}) =>{
//     let tempVal = []
//     for (let prop in obj) {
//         if (typeof obj[prop] === 'string'){
//             tempVal.push(obj[prop])
//         }
//     }
//     console.log(`\n[+] ${prop} is a string, value > ${obj[prop]}`)
// }

// getStringProp({name:'tamer', age:13, tall:133, country:'palestine','relagency':'musliman','color':'black'})


// let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const player = {
//     name:'tamer',
//     dop:1999,
//     getAge:function(){
//         this.age = 2023-this.dop;
//     }
//     ,
//     color:'white',
// }

// player['sayHelo'] = function (name='tamer'){
//     for (let i =0 ; i < 10; i++) {
//         console.log('hello world '.toUpperCase()+name.toUpperCase())
//     }
// }

// // player.sayHelo('osama')


// let {sayHelo} = player;

// sayHelo()

// call the function
const counter = class{

    nicknam = 'osama othman'

    printer(){
        let test = []
        if (test.length < 1){
            console.log(`array ${test} is empty`)
        }
    }

    countLetter(word=''){
        let letterCounter = []
        let letterObj = {}
        let temp = 0
        let isloped = false
        for (let letter in word){
    
            if (word[letter] == ' ') continue
            for (let obj in letterCounter){
                if (letterCounter[obj].hasOwnProperty(word[letter])){
                    isloped=true
                    break
                }
            }
    
            if (isloped){
                isloped = false
                continue
            }
    
            for (let tempVal in word){
                if (word[letter] === word[tempVal]){
                    temp++
                }
            }
    
            letterObj[word[letter]] = temp
            letterCounter.push(letterObj)
            temp=0
            letterObj = {}
        }
    
        letterCounter.forEach((obj)=>{
            Object.keys(obj).forEach((elm)=>{
                console.log(`\n[+] ${elm} Count >> ${obj[elm]}`)
            })
        })
    }
}

let calculator = new counter()

// calculator.countLetter('my name is osama naser hassan othman')

// calculator.printer()

const attacker = {
    name:'ahmed',
    age:24,
    color:'white',
    tall:177,
    numOfGaols:200,
    isSick:false,
    salary:3000,
    getInfo:function(){
        return `${this.name} is ${this.age} years old and his color is , ${this.color}`
    },
    sickChecker:function(){
        if (this.isSick){
            console.log(`\n[+] ${this.name} is sick`)
        }else{
            console.log(`\n[+] ${this.name} is not sick`)
        }
    },
}

const team = {
    name:'leverpol',
    teamMember:[attacker],
    getTeamMember:function(){
        return this.teamMember
    },
}

let member = team.getTeamMember()

const printer = () =>{
    for (let i = 0; i < 10; i++) {
        console.log('i hate people')
    }
}

const person = {
    name:'tmaer',
    age:13,
    tall:144,
    color:'white'
}


// Object.entries(person).forEach(([key, value])=>{
//     console.log(key, value)
// })

let names = ['tamer sultan', 'osama', 'hassan']

function arrPrinter(arr=['test']){
    arr.forEach((elm)=>{
        elms = elm.toUpperCase().split(' ')
        if (elms.length === 2){
            console.log(`fuck you ${elms[0]} and fuck you ${elms[1]}`)
        }
        else{
            console.log(`fuck you ${elms[0]}`)
        }
    });
}


export function join(num1, num2){
    return num1+num2
}