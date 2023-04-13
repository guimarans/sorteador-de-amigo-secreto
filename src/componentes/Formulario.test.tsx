import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { RecoilRoot } from "recoil";
import Formulario from "./Formulario";


describe('comportamento do formulario.tsx', () => {

  test('quando o input esta vazio, novos participantes nao podem ser adicionados', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    // encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    // encontrar o botao
    const botao = screen.getByRole('button');
    // garantir que o input esteja no documento
    expect(input).toBeInTheDocument();
    // garantir que o input esteja desabilitado
    expect(botao).toBeDisabled();
  })

  test('adicionar participante caso exista um nome preenchido', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    )
    // encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    // encontrar o botao
    const botao = screen.getByRole('button');

    // inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: 'Kelly'
      }
    });
    // clicar no botao de submeter
    fireEvent.click(botao)
    // garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus()
    // garantir que o input nao tenha um valor
    expect(input).toHaveValue('')
  })

  test('nomes duplicados nao podem ser adicionados na lista', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const botao = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: 'kelly'
      }
    });
    fireEvent.click(botao);

    fireEvent.change(input, {
      target: {
        value: 'kelly'
      }
    });
    fireEvent.click(botao);

    const mensagemDeErro = screen.getByRole('alert');

    expect(mensagemDeErro.textContent).toBe('Nomes duplicados nao sao permitidos!');
  })

  test('a mensagem de erro deve sumir apos os timers', () => {
    jest.useFakeTimers()

    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const botao = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: 'kelly'
      }
    });
    fireEvent.click(botao);

    fireEvent.change(input, {
      target: {
        value: 'kelly'
      }
    });
    fireEvent.click(botao);

    let mensagemDeErro = screen.queryByRole('alert');
    expect(mensagemDeErro).toBeInTheDocument();

    // esperar N segundos
    act(() => {
      jest.runAllTimers();
    });

    mensagemDeErro = screen.queryByRole('alert');
    expect(mensagemDeErro).toBeNull();
  })
})
