import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToAddress } from '../../router/coordinator';
import { BtnSubmit, ContentInput, Form } from './styled'

const FormSingUp = (props) => {

    const history = useHistory();

    return (
        <Form onSubmit={props.submit}>
            <ContentInput>
                <label>Nome</label>
                <input
                    name={'name'}
                    value={props.nameValue}
                    onChange={props.change}
                    type="text"
                    required
                />
            </ContentInput>
            <ContentInput>
                <label>CPF</label>
                <input
                    placeholder={"000.000.000-00"}
                    name={'cpf'}
                    value={props.cpfValue}
                    onChange={props.change}
                    type={"number"}
                    required
                />
            </ContentInput>
            <ContentInput>
                <label>E-mail</label>
                <input
                    name={"email"}
                    value={props.emailValue}
                    onChange={props.change}
                    type="email"
                    required
                />
            </ContentInput>
            <ContentInput>
                <label>Senha</label>
                <input
                    name={"password"}
                    value={props.passwordValue}
                    onChange={props.change}
                    type="password"
                    pattern={'^.{6,}'}
                    title="Sua senha deve ter no mínimo 6 caracteres"
                    required
                />
            </ContentInput>
            <BtnSubmit  type="submit">Criar</BtnSubmit>

        </Form>
    )
}

export default FormSingUp;