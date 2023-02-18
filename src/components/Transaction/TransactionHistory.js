import {Transaction} from './Transaction'
export const TransactionHistory = ({items})=>{
  return (
    <ul>
      {items.map(item =>(
          <li key={item.id}>
            <Transaction item={item}/>
        </li>
      ))}
    </ul>
  );
  };
  
  // TransactionHistory.propTypes = {
  //   items: propTypes.arrayOf(
  //     PropTypes.shape({
  //       id: PropTypes.string.isRequired,
  //     }).isRequired
  //   ).isRequired,
  // };