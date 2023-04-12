import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "state/hook/useListaDeParticipantes"
import './Rodape.css';

export default function Rodape() {
  const participantes = useListaDeParticipantes();
  const navegarPara = useNavigate();

  function iniciar() {
    navegarPara('/sorteio')
  }

  return (
    <footer className="rodape-configuracoes">
      <button className="botao" disabled={participantes.length < 3} onClick={iniciar}> Iniciar brincadeira </button>
      <img src="/images/sacolas.png" alt="Sacolas de compras" />
    </footer>
  )
}