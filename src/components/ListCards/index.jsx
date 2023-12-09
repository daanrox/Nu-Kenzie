import { StyledList } from "./style"
import { CardItem } from "./CardItem"



export const ListCards = ({ list, removeItem }) => {
  return (

    <StyledList>
      {list.map((item) => (
        <CardItem
          key={item.id}
          id={item.id}
          description={item.description}
          value={item.value}
          typeValue={item.typeValue}
          removeItem={removeItem}
        />
      ))}
    </StyledList>

  )
}