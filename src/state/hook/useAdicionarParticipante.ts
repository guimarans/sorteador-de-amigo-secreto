import { useSetRecoilState } from 'recoil';
import { listaParticipantesState } from './../atom';

export function useAdicionarParticipante() {
  const setLista = useSetRecoilState(listaParticipantesState);

  return (nomeDoParticipante: string) => {
    return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
  }
}