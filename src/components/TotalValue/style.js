import styled from "styled-components";

export const StyledTotalvalue = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.5rem 1rem;
    border: 2px solid var(--grey200);
    gap: 1rem;


    div{
        display: flex;
        justify-content: space-between;
    }

    div h3:nth-child(2){
        color: var(--color-primary);
        font-weight: 800;
    }
    
`