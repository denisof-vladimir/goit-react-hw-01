import styles from "../TransactionHistory/TransactionRow.module.css";

export default function TransactionHistory({ Items }) {
    return (
    <div className={styles.transactionHistory}>
        <table>
            <thead className={styles.transRow}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {Items.map(({ id, type, amount, currency })  => {
                    return (
                        <tr key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    );
                })}
            </tbody>

        </table>  
    </div> 
    );
  };


