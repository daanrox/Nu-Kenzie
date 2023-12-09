import { StyledTotalvalue } from "./style"
import { TextBody, Title3 } from "../../styles/Titles"
import React, { useEffect, useState } from "react";

export const Totalvalue = ({ total }) => {
    const [formattedTotal, setFormattedTotal] = useState("");
  
    useEffect(() => {
      const formattedValue = Number(total).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
      });
      setFormattedTotal(formattedValue);
    }, [total]);
  
    return (
      <>
        <StyledTotalvalue>
          <div>
            <Title3>Valor total:</Title3>
            <Title3>{formattedTotal}</Title3>
          </div>
          <TextBody>O valor se refere ao saldo</TextBody>
        </StyledTotalvalue>
      </>
    );
  };