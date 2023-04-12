import { useRecoilValue } from "recoil";
import { resultadoDoAmigoSecreto } from "state/atom";

export function useResultadoDoSorteio() {
    return useRecoilValue(resultadoDoAmigoSecreto);
}