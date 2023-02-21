export const List = ({title, list, onSelect, renderItem}) => (
  <>
    <h1>{title}</h1>
    <ul>
      {list.map((item, index) => (
        <li key={index} onClick={() => onSelect(item)}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  </>
)
