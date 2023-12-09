import { StyledCard, StyledExcludeButton } from "./style";
import { TextBody, Title2 } from "../../../styles/Titles"

export const CardItem = ({ id, description, value, typeValue, removeItem }) => {
    let textBodyValue = "";
  
    if (typeValue === "inputValue") {
      textBodyValue = "Entrada";
    } else if (typeValue === "outputValue") {
      textBodyValue = "Despesa";
    }
  
    return (
      <>
        <StyledCard key={id}>
            <div className={typeValue === "inputValue" ? "borderGreen" : "borderGrey"}>

            </div>
            <div className="content">
            <div>
          <Title2>{description}</Title2>
          <TextBody>{textBodyValue}</TextBody>
            </div>
            <div>
                <TextBody>{parseFloat(value).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</TextBody>
                <StyledExcludeButton data-id={id} onClick={(e) => removeItem(e.target.dataset.id, value, typeValue)}>Excluir</StyledExcludeButton>
            </div>
            </div>
        </StyledCard>
      </>
    );
  };