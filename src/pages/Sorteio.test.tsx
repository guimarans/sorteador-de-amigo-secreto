import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Sorteio from "./Sorteio";
import { useListaDeParticipantes } from "state/hook/useListaDeParticipantes";

jest.mock('../state/hook/useListaDeParticipantes.ts', () => {
    return{
        useListaDeParticipantes: jest.fn()
    }
})

describe('na pagina de sorteio', () => {
    const participantes = ['kelly', 'karoline', 'guimarans'];

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
    })

    test('todos os participantes podem exibir o seu amigo secreto', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        );

        const opcoes = screen.queryAllByRole('option');
        expect(opcoes).toHaveLength(participantes.length);
    })
 })