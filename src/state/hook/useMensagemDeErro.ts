import { useRecoilValue } from 'recoil';
import { erroState } from 'state/atom';

export function useMensagemDeErro() {
    const mensagem = useRecoilValue(erroState);

    return mensagem;
}