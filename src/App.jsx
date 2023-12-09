import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { GlobalStyle } from "./styles/GlobalStyles"
import { Totalvalue } from "./components/TotalValue"
import { StyledFirstColumn } from "./styles/StyledFirstColumn"
import { StyledSecondColumn } from "./styles/StyledSecondColumn"
import { ListCards } from "./components/ListCards"
import { Title2 } from "./styles/Titles"

function App() {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    const storageList = JSON.parse(localStorage.getItem("@nukenzie:list"));
    const storageTotal = JSON.parse(localStorage.getItem("@nukenzie:total"));

    if (storageList && storageList.length > 0) {
      setList(storageList);
    }

    if (storageTotal) {
      setTotal(storageTotal);
    }
  }, []);

  const addItem = (item) => {
    setList([...list, item]);
  };

  const removeItem = (id, value, typeValue) => {
    const updatedList = list.filter((item) => item.id !== id);

    let newTotal;

    if (typeValue === "inputValue") {
      newTotal = total - parseFloat(value);
    } else if (typeValue === "outputValue") {
      newTotal = total + parseFloat(value);
    }

    setTotal(newTotal);
    setList(updatedList);
  };

  useEffect(() => {
    localStorage.setItem("@nukenzie:list", JSON.stringify(list));
    localStorage.setItem("@nukenzie:total", JSON.stringify(total));
  }, [list, total]);

  const [valueList, setValue] = useState([])

  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <StyledFirstColumn>
          <Form addItem={addItem} valueList={valueList} setValue={setValue} setTotal={setTotal} />
          {list.length > 0 ? <Totalvalue total={total} /> : null}
        </StyledFirstColumn>

        <StyledSecondColumn>
          <Title2>Resumo financeiro</Title2>
          {list.length > 0 ? <ListCards removeItem={removeItem} list={list} /> : <Title2>Você ainda não possui nenhum lançamento</Title2>}
        </StyledSecondColumn>
      </main>
    </>
  )
}

export default App
