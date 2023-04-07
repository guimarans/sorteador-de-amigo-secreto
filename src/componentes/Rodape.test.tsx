import { render,screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';

describe('onde nao existem participantes suficientes', () => {
    test('a brincadeira nao pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )

        const botao = screen.getAllByRole('button');
        expect(botao).toBeDisabled();
    })
})