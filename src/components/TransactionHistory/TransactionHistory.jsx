import css from "./TransactionHistory.module.css"
function TransactionHistory ({items}){
    return (
        <table>
  <thead>
    <tr className={css.head}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map((item)=>{
        return ( 
        <tr className={css.data} key={item.id}>
            <td className={css.type}>{item.type[0].toUpperCase()+item.type.slice(1)}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
          )
    })}
  </tbody>
</table>
    )
}

export default TransactionHistory