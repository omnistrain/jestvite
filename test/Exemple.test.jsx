import { fireEvent, render, screen } from "@testing-library/react"
import { Exemple } from "../src/components/Exemple"

describe('Test de composants', () => {
    test('Rendu de exemple', async () => {
        
        render(<Exemple></Exemple>)
        
    }),
    test('Rendu de exemple : button ko', async () => {
        
        render(<Exemple></Exemple>)
        const butt = screen.getByRole('button')
        expect(butt.textContent).toBe('ko')
    }),
    test('Rendu de exemple : button ok', async () => {
        
        render(<Exemple></Exemple>)
        const butt = screen.getByRole('button')
        expect(butt.textContent).toBe('ko')
        fireEvent.click(butt)
        expect(butt.textContent).toBe('ok')

    })

})