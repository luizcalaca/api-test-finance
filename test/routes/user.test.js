const request = require('supertest')

const app = require('../../src/app')

test('Deve listar todos os usuários', async () => {
    await request(app).get('/users').then( (res) => {
        expect(res.status).toBe(200)
        expect(res.body.length).toBeGreaterThan(0)
    })
})

test('Deve inserir o usuário com sucesso',  async () => { 
    const mail = `${Date.now()}@mail.com`    
    await request(app).post('/users')
        .send({name: 'Luiz', mail: mail, passwd: '123456'})
        .then((res) => {
            expect(res.status).toBe(201)
            expect(res.body.name).toBe('Luiz')
    })
})

// use return to leave Jest controlling
test('Não deve inserir o usuário sem nome', () => {    
    return request(app).post('/users')
        .send({mail: 'mail@mail.com', passwd: '123456'})
        .then((res) => {
            expect(res.status).toBe(400)
            expect(res.body.error).toBe('Nome é um atributo obrigatório')
    })
})

//use async await to handle as a promise
test('Não deve inserir o usuário sem email',  async () => { 
    const mail = `${Date.now()}@mail.com`    
    await request(app).post('/users')
        .send({name: 'Luiz', passwd: '123456'})
        .then((res) => {
            expect(res.status).toBe(400)
            expect(res.body.error).toBe('Email é um atributo obrigatório')
    })
})

//request using done to finish de case test
test('Não deve inserir o usuário sem senha',  (done) => {   
    request(app).post('/users')
        .send({name: 'Luiz', mail: 'mail@mail.com'})
        .then((res) => {
            expect(res.status).toBe(400)
            expect(res.body.error).toBe('Senha é um atributo obrigatório')
            done()
    }).catch(err => {done.fail(err)})
})
