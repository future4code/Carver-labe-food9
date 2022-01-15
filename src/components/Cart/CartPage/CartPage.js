import React from 'react'
import Radio from '@material-ui/core/Radio';
import clsx from 'clsx'
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
// import { PageCart, useStyles, FormaPag, DivHr } from '../../pages/CartPage/styled';
import {useStyles, DivHr} from './style'
import styled from 'styled-components';

function CartPage(props) {

    const Pai = styled.div`
    font-family: Oxygen;
`
    function StyledRadio(props) {
        const classes = useStyles();
        return (
            <Radio
                className={classes.root}
                disableRipple
                color="default"
                checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                icon={<span className={classes.icon} />}
                {...props}
            />
        );
    }

    return (
        <Pai>

            <FormControl component="fieldset">
                <h2>
                    Forma de pagamento
                </h2>
                <DivHr />


                <RadioGroup onChange = {props.Payment} defaultValue="female" aria-label="gender" name="customized-radios">
                    <FormControlLabel  value="money" control={<StyledRadio />} label="Dinheiro" />
                    <FormControlLabel  value="creditcard" control={<StyledRadio />} label="Cartão de Crédito" />
                </RadioGroup>
            </FormControl>


        </Pai>
    )
}
export default CartPage;