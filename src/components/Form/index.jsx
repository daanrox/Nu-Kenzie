import React, { useState } from "react";
import { StyledForm, StyledButton } from "./style";
import { v4 as uuidv4} from "uuid"
 
export const Form = ({ addItem, setTotal }) => {
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [typeValue, setTypeValue] = useState("inputValue");
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      if (description && value) {
        const item = {
        id: uuidv4(),
          description,
          value,
          typeValue,
        };
  
        addItem(item);
  
        if (typeValue === "inputValue") {
          setTotal(prevTotal => prevTotal + parseFloat(value));
        } else {
          setTotal(prevTotal => prevTotal - parseFloat(value));
        }
  
        resetForm();
      } else {
        alert("Por favor, preencha todos os campos");
      }
    };
  
    const resetForm = () => {
      setDescription("");
      setValue("");
      setTypeValue("inputValue");
    };

  return (
    <StyledForm>
      <label>Descrição</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Digite aqui sua descrição"
        required
      />
      <span>Ex: Compra de roupas</span>

      <label>Valor (R$)</label>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        min="0"
        placeholder="Digite aqui o valor"
        required
      />

      <label>Tipo de valor</label>
      <select value={typeValue} onChange={(e) => setTypeValue(e.target.value)}>
        <option value="inputValue">Entrada</option>
        <option value="outputValue">Saída</option>
      </select>

      <StyledButton type="submit" onClick={handleFormSubmit}>
        Inserir valor
      </StyledButton>
    </StyledForm>
  );
};