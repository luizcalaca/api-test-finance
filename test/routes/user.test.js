const request = require('supertest')

const app = require('../../src/app')

test('Deve listar todos os usuários', async () => {
    await request(app).get('/users').then( (res) => {
        expect(res.status).toBe(200)
        expect(res.body).toHaveLength(0)
    })
})

test.only('Deve inserir o usuário com sucesso',  async () => {
    await request(app).post('/users').send({name: 'Luiz', mail: 'luizcalaca@gmail.com'})
    .then((res) => {
        expect(res.status).toBe(201)
        expect(res.body.name).toBe('Luiz')
    })
})