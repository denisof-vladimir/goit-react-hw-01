import styles from "../TransactionHistory/TransactionRow.module.css";
import Transactions from "../transactions.json";

export default function TransactionHistory(props) {
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

            {Transactions.map(({ id, type, amount, currency }) => {
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


