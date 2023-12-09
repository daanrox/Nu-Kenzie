import styled from "styled-components";


export const StyledCard = styled.div`
        display: flex;
        justify-content: space-between;
        background-color: var(--grey100);
        width: 100%;
        align-items: center;
        border-radius: 4px;
        height: 87px;


    .borderGreen{
        background-color: var(--color-secundary);
        width: 5px;
        height: 87px;
        position: relative;
        left: 0;
        align-self: left;
        border-radius: 4px 0 0 4px;
    }

    .borderGrey{
        background-color: var(--grey200);
        width: 5px;
        height: 87px;
        position: relative;
        left: 0;
        align-self: left;
        border-radius: 4px 0 0 4px;
    }

    .content{
        display: flex;
        justify-content: space-between;
        align-self: left;
        width: 95%;
    }

    .content div:nth-child(1){
        max-width: 460px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
    }

    .content div:nth-child(2){
        width: fit-content;
        height: 87px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        padding: 0 25px 0 15px;
        gap: 1rem;

    }

    h2{
        color: var(--grey400);
    }
    `

export const StyledExcludeButton = styled.button`
  
background-color: var(--grey200);
padding: 3px 9px;
border-radius: 2px;
width: fit-content;


:hover{
background-color: var(--grey300);
color: var(--grey100);

}

`