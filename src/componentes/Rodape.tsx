import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "state/hook/useListaDeParticipantes"

export default function Rodape() {
    const participantes = useListaDeParticipantes();
    const navegarPara = useNavigate();

    function iniciar() {
        navegarPara('/sorteio')
    }

    return(
        <footer>
            <button disabled={participantes.length < 3} onClick={iniciar}> Iniciar brincadeira </button>
        </footer>
    )
}