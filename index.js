// Iteration 1: Names and Input



const hacker1 = "Nuria"
const hacker2 = "Carlos"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is  ${hacker2}`)


// Iteration 2: Conditionals


function compareNamesLong(user1, user2) {

    if (user1.length > user2.length) {
        console.log (`The driver has the longest name, it has ${user1.length} characters.`)

    } else if (user2.length > user1.length) {
        console.log (`It seems that the navigator has the longest name, it has ${user2.length} characters.`)
    
    } else {
        console.log(`Wow, you both have equally long names, ${user1} characters!.`)
    }
}

compareNamesLong(hacker1, hacker2)

// Iteration 3: Loops 

function processNames(driver, navigator) {
    const driverUpperCase = ''

    for (let i = 0; i < driver.length; i++) {

        driverUpperCase += drive[i].toUpperCase()
        
        if (i < driverName.length - 1) {
            driverUpperCase += ' '
        }
    }
}

console.log(driverUpperCase);