import f0 from "./assets/forca0.png";
import f1 from "./assets/forca1.png";
import f2 from "./assets/forca2.png";
import f3 from "./assets/forca3.png";
import f4 from "./assets/forca4.png";
import f5 from "./assets/forca5.png";
import f6 from "./assets/forca6.png";

export default function Jogo(){
    return(
        <div className="jogo">
            <div className="imagem">
                <img src={f0} alt="forca0"/>
            </div>
            <div className="direita">
                <div className="botao">
                    <button>
                        Escolher palavra
                    </button>
                </div>
                <div className="palavra">
                _ua _e _ _e _a
                </div>
            </div>
        </div>
    )
}