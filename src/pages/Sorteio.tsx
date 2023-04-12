import { useListaDeParticipantes } from "state/hook/useListaDeParticipantes"

export default function Sorteio() {

  const participantes = useListaDeParticipantes();

  return (
    <section>
      <form>
        <select name="participanteDaVez" id="participanteDaVez">
          {participantes.map(participante => <option key={participante}>{participante}</option>)}
        </select>
      </form>
    </section>
  )
}