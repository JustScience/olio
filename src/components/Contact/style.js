import styled from 'styled-components'
import color from '../Theme/Color'

const FormWrap = styled.section`
`
const Form = styled.form`
    width: 100%;
    max-width: 420px;
`
const FormTitle = styled.h2`
    color: ${color.grey.light};
    margin-bottom: 12px;
`
const FormField = styled.div`
    width: 100%;

    label {
        color: ${color.grey.light};
        width: 100%;
    }

    input, 
    textarea {
        background-color: rgba(255,255,255,0.2);
        border: none;
        border-radius: 4px;
        font-size: 120%;
        margin: 4px 0 12px 0;
        outline: none;
        padding: 4px;
        width: 100%;

        &:focus {
            background-color: rgba(255,255,255,0.6);
        }
    }

    button {
        background-color: ${color.primary.base};
        border-radius: 4px;
        color: ${color.grey.light};
        font-size: 110%;
        padding: 12px 24px;
    }
`

export { FormWrap, Form, FormTitle, FormField }