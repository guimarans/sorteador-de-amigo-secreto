import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "state/hook/useListaDeParticipantes"

export default function Rodape() {
    const participantes = useListaDeParticipantes()

    return(
        <footer>
            <button disabled={participantes.length < 3}> Iniciar brincadeira </button>
        </footer>
    )
}