import { useState } from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const initialList = {"a":false, "b":true, "c":true, "d":true, "e":true, "f":true, "g":true, "h":true, "i":true, "j":true, "k":true, "l":true, "m":true, "n":true, "o":true, "p":true, "q":true, "r":true, "s":true, "t":true, "u":true, "v":true, "w":true, "x":true, "y":true, "z":true}

export default function App() {
  const [list,setDisable] = useState({...initialList});
  function disable(p){
    const lista = {...list};
    lista[p] = true;
    setDisable({...lista});
    console.log({p});
  }
  return (
    <div className="App">
      <Jogo />
      <div className="areaL">
        <div className="letras">
          {alfabeto.map(letter => <Letras letra={letter} key={letter} func={disable} active={list[letter]}/>)}
        </div>
      </div>
    </div>
  );
}