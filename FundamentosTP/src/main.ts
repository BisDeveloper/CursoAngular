import './style.css'
import'./Biblioteca.ts'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <h1>Fundamentos TypeScript</h1>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
