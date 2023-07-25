const {app, server } = require('../server.js')
const request = require('supertest')

test ('validation of tthe payload', async function(){
    const testPayload ={
        name : "test name",
        email: "test.email@example.com",
        interest : "testing"
    }

    const response = await request(app)
    .post('/update-profile')
    .send(testPayload)
    console.log (response.body)
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("info")
    expect(response.body.info).toBe("successful")
    
    
    server.close()
})

test('invalid payload', async function(){
    const testPayload = {}

    const response = await request(app)
    .post('/update-profile')
    .send(testPayload)

    console.log(response.body)
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("error")
    expect(response.body.error).toBe("not succesfully saved to database")

    server.close
})