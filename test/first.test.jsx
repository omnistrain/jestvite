import { exempleFunction } from "../src/App"

describe('Les fonctions dans App', () => {
    test('Ceci est mon premier test', () => {
        const attendu = 'hello'
        expect(exempleFunction('hello')).toEqual(attendu);

    })
})