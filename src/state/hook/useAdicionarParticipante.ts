import { erroState } from 'state/atom';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { listaParticipantesState } from './../atom';

export function useAdicionarParticipante() {
  const setLista = useSetRecoilState(listaParticipantesState);
  const lista = useRecoilValue(listaParticipantesState);
  const setErro = useSetRecoilState(erroState);

  return (nomeDoParticipante: string) => {
    if(lista.includes(nomeDoParticipante)) {
      setErro('Nomes duplicados nao sao permitidos!');
      return;
    }
    
    return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
  }
}