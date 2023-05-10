import { useState } from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const initialList = {"a":true, "b":true, "c":true, "d":true, "e":true, "f":true, "g":true, "h":true, "i":true, "j":true, "k":true, "l":true, "m":true, "n":true, "o":true, "p":true, "q":true, "r":true, "s":true, "t":true, "u":true, "v":true, "w":true, "x":true, "y":true, "z":true}

export default function App() {
  const [list,setDisable] = useState({...initialList});
  const [errors,setErrors] = useState(0);
  const [word,setWord] = useState("");
  const [answer,setAnswer] = useState("");
  const [win,setWin] = useState();
  
  function userInput(l=null, w=[...word], r=false){
    const newAnswer = [];
    let erro = errors;
    let c=0;
    w.forEach((e,i) => {
      console.log(e,l);
      if(e==l){
        newAnswer.push(l);
      }else if(answer && r==false){
        if(!w.includes(l)){
          c++;
        }
        newAnswer.push(answer[i]);
      }else{
        newAnswer.push(" _");
      }
    })
    if(c>0){
      erro++;
      setErrors(erro);  
    }
    setAnswer(newAnswer);
    console.log(erro);
    if(newAnswer.toString() == [...word].toString()){
      const lista = {...list};
      for (const key in lista) {
        lista[key] = true;
      }
      setDisable({...lista}); 
      setWin("true");
    }else if(erro == 6 && r==false){
      const lista = {...list};
      for (const key in lista) {
        lista[key] = true;
      }
      setAnswer(word);
      setDisable({...lista});
      setWin("false");
    }
  }
  function disable(p){
    const lista = {...list};
    lista[p] = true;
    setDisable({...lista});
    userInput(p);
  }
  function newWord(){
    const newPalavra = palavras[Math.floor(Math.random() * (palavras.length))];
    const newAnswer = "";
    const lista = {...list};
    for (const key in lista) {
      lista[key] = false;
    }
    setDisable({...lista});
    setWord(newPalavra);
    setAnswer(newAnswer);
    userInput(null,[...newPalavra],true);
    setErrors(0);
    setWin();
  }
  return (
    <div className="App">
      <Jogo botao={newWord} errors={errors} word={word} answer={answer} win={win}/>
      <div className="areaL">
        <div className="letras">
          {alfabeto.map(letter => <Letras letra={letter} key={letter} func={disable} active={list[letter]}/>)}
        </div>
      </div>
    </div>
  );
}