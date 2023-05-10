export default function Letras(props){
    return(
        <button onClick={()=>props.func(props.letra)} className="letra" disabled={props.active}>
            {props.letra.toUpperCase()}
        </button>
    )
}