// What we need is a way to tell Typescript that  the type of items and the omClic handler item can 
//Vary and generics are te way to that 

// Generic helps to avoid code duplication when we need to multiple types to be handled but at the same time 
// provide strict checking 

type ListProps<T> = {
    items: T[]
    onClick: (value: T) => void
  }
  
  export const List1 = <T extends string | number > ({
    items,
    onClick
  }: ListProps <T>) => {
    return (
      <div>
        <h2>List of items</h2>
        {items.map((item,index) => {
          return (
            <div key={index} onClick={() => onClick(item)}>
            {item}
            </div>
          )
        })}
      </div>
    )
  }

  export const List = <T extends { id: number }>({
    items,
    onClick
  }: ListProps<T>) => {
    return (
      <div>
        <h2>List of items</h2>
        {items.map(item => {
          return (
            <div key={item.id} onClick={() => onClick(item)}>
              {item.id}
            </div>
          )
        })}
      </div>
    )
  }
  