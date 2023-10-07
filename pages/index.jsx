import { Description } from "../src/components/Description/Description.jsx";
import { Field } from "../src/components/Field";
import { Game } from "../src/components/game/Game.js";
import {Header} from "../src/components/Header"
import {Opponents} from '../src/components/Opponents'

export default function HomePage() {
  return <>
    <Header />
    <main className="main">
      <Description />
      <Opponents />
      <Field margin='field__margin'/>
    </main>
    
  </>
  
}
