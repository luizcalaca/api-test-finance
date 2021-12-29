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