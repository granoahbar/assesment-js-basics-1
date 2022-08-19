

let password = 'billybobj oe24'

let lengthcheck = (`${password.length}`)

if (lengthcheck >= 10 && /\d/.test(password) && /[a-zA-Z]/.test(password) && password.indexOf(' ') <= 0)
{
    console.log ("PASSWORD WAS A SUCCESS")
}
else
{
console.log ("PASSWORD WAS A FAIL")
}

// ADDITIONAL CHECKS
// 1. checking to see if password contains any spaces
// 2. 