const {isInvalidEmail, correctLength} = require("../validator")

test('valid email', function(){
    const testPayload ={
        name: "test name",
        email: "test.email@example.com",
        interest: "testing"
    }

    const result = isInvalidEmail(testPayload)
    expect(result).toBe(false)
})


test('invalid', function(){
    const testPayload ={
        name : "test name",
        email: "testemailgmail.com",
        interest:"testing"
    }

    const result = isInvalidEmail(testPayload)
    expect(result).toBe(true)
})

test ('wrong length', function(){
    const testPayload ={}
    const show = correctLength(testPayload)
    expect(show).toBe(true)
})
test ('right length', function(){
    const testPayload ={
        name:"test name",
        email:"test.email@example.com",
        interest: "testing"
    }
    const show = correctLength(testPayload)
    expect(show).toBe(false)
   
})
