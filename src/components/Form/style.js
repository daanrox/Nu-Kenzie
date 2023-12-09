import styled from "styled-components";
import angle from "../../assets/ANGLE-DOWN.svg"


export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 1.5rem 1rem;
    border: 2px solid var(--grey200);
    gap: 1rem;

    input{
        background-color: var(--grey100);
        outline: none;
        border: 1px solid var(--grey100);
        padding: 1rem;
        height: 48px;
        border-radius: 8px;
        font-size: 1rem;
    }

    input:focus{
        border: 1px solid black;
    }

    input:valid{
        font-size: 1rem;
        color: var(--grey400);
    }

    input::placeholder{
        color: var(--grey300);
        font-size: 1rem;
    }

    label{
        color: var(--grey400);
        font-size: 0.75rem;
        font-weight: 400;
    }

    span{
        font-size: 0.75rem;
        color: var(--grey300);
    }

    select{
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background: url(${angle}) no-repeat 95% center;
        background-color: var(--grey100);
        padding: 0 1rem;
        color: var(--grey300);
        font-size: 1rem;
        border: none;
        border-radius: 8px;
        height: 48px;
        width: 100%;
    }

    select:hover{
        cursor: pointer;
    }
`

export const StyledButton = styled.button`
    
    background-color: var(--color-primary);
    color: #FFF;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    padding: 13px, 20px, 13px, 20px;
    height: 48px;
    width: 100%;

    :hover{
        background-color: var(--color-primary2);
    }
`
