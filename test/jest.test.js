test('Devo conhecer as principais', () => {
    let number = null
    expect(number).toBeNull()
    number = 10
    expect(number).not.toBeNull()
})

test('Devo saber trabalhar com objetos', () => {
    const obj = {name: 'John', mail: 'luizcalaca@gmail.com'}
    expect(obj).toHaveProperty('name', 'John')
    expect(obj).toHaveProperty('mail')
})