import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { resultadoDoAmigoSecreto } from "state/atom";
import { useListaDeParticipantes } from "state/hook/useListaDeParticipantes"
import { useResultadoDoSorteio } from "state/hook/useResultadoDoSorteio";

export default function Sorteio() {

  const participantes = useListaDeParticipantes();
  const [participanteDaVez, setParticipanteDaVez] = useState('');
  const [amigoSecreto, setAmigoSecreto] = useState('');

  const resultado = useResultadoDoSorteio();
  
  function sortear(evento: React.FormEvent<HTMLFormElement> ) {
    evento.preventDefault();

    if(resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
    }
  }
  return (
    <section>
      <form onSubmit={sortear}>
        <select 
          required 
          name="participanteDaVez" 
          id="participanteDaVez" 
          placeholder="Seleciona o seu nome"
          value={participanteDaVez}
          onChange={evento => setParticipanteDaVez(evento.target.value)}
        >
          {participantes.map(participante => <option key={participante}>{participante}</option>)}
        </select>
        <button> Sortear </button>
      </form>
      {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
    </section>
  )
}