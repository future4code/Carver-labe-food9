import React from 'react';
import { BtnSubmit, ContentInput, Form } from './styled'

const FormRegisterAdress = (props) => {

    return(
        <>
        <Form onSubmit={props.submit}>
            <ContentInput>
                <label>Rua/Avenida:</label>
                <input
                    name={'street'}
                    value={props.streetValue}
                    onChange={props.change}
                    type={'text'}
                    required
                />
            </ContentInput>
            <ContentInput>
                <label>Número:</label>
                <input
                    name={'number'}
                    value={props.numberValue}
                    onChange={props.change}
                    type={'number'}
                    required
                />
            </ContentInput>
            <ContentInput>
                <label>Bairro:</label>
                <input
                    name={"neighbourhood"}
                    value={props.neighbourhoodValue}
                    onChange={props.change}
                    type={"text"}
                    required
                />
            </ContentInput>
            <ContentInput>
                <label>Estado:</label>
                <input
                    name={"state"}
                    value={props.stateValue}
                    onChange={props.change}
                    type={"text"}
                    required
                />
            </ContentInput>
            <ContentInput>
                <label>Cidade:</label>
                <input
                    name={"city"}
                    value={props.cityValue}
                    onChange={props.change}
                    type={"text"}
                    required
                />
            </ContentInput>
            <ContentInput>
                <label>Complemento:</label>
                <input
                    name={"complement"}
                    value={props.complementValue}
                    onChange={props.change}
                    type={"text"}
                    required
                />
            </ContentInput>
            <BtnSubmit type="submit">Salvar</BtnSubmit>

        </Form>
        </>
    )
}

export default FormRegisterAdress;