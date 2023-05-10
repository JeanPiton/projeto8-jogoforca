import { styled } from "styled-components";

const {Sans,Roboto} = `@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Roboto:wght@700&display=swap');`

const APP = {
    areaL : styled.div`
        width:100%;
        display:flex;
        justify-content: center;
    `,

    letras : styled.div`
        width: 680px;
        display:flex;
        justify-content: center;
        flex-wrap: wrap;
    `
};

const JOGO = {
jogo : styled.div`display:flex;`,

direita : styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`,

imagem : styled.div`
    width: 50%;
`,

img : styled.img`
    width: 400px;
    height: 466.67px;
`,

divbotao : styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,

botao : styled.button`
    width: 200px;
    height: 60px;
    font-family: ${Roboto};
    font-weight: 700;
    font-size: 20px;
    background-color: #27AE60;
    border-radius: 8px;
    border-style: none;
`,

palavra : styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Noto Sans';
    font-weight: 700;
    font-size: 50px;
    color:${props => {if(props.win=="false"){return "red"}
    else if(props.win=="true"){return "green"}
    else{return "black"}}};
`
};

const LETRA = {
    letra : styled.button`
        width: 40px;
        height: 40px;
        border: 1px;
        box-sizing: border-box;
        border: 1px solid #7AA7C7;
        border-radius: 3px;
        margin: 0 12px 11px 0;
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 16px;
        color: #798A9F;
        &:enabled {
            background: #E1ECF4;
        }
        &:disabled {
            background: #9FAAB5;
        }
    `
};

export {APP, JOGO, LETRA};