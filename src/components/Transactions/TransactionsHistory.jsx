import styles from "./Transactions.module.css";

const TransactionsHistory = ({ transactions }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr>
          <th className={styles.item}>Type</th>
          <th className={styles.item}>Amount</th>
          <th className={styles.item}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.body}>
        {transactions.map((transaction) => {
          const { id, type, amount, currency } = transaction;
          return (
            <tr key={id} className={styles.row}>
              <td className={styles.td}>{type}</td>
              <td className={styles.td}>{amount}</td>
              <td className={styles.td}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionsHistory;
