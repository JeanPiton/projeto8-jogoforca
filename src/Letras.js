import {LETRA} from "./css/style";
export default function Letras(props){
    return(
        <LETRA.letra onClick={()=>props.func(props.letra)} className="letra" disabled={props.active}>
            {props.letra.toUpperCase()}
        </LETRA.letra>
    )
}