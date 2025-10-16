
import type { JSX } from 'react'
import './App.css'
import CarShop from './components/CarShop/CarShop'
import Counter from './components/Counter/Counter'
import Sandwich from './components/Sandwich/Sandwich'
import Alcohol from './components/Alcohol/Alcohol'

export default function App() : JSX.Element {

  return (
   <div> 
      <CarShop />
      <Counter />
       <Sandwich />
         <Alcohol />
    
   </div>
  )
}


