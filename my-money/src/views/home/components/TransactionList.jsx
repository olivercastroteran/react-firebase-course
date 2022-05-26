import { useEffect } from 'react';
import { useFirestore } from '../../../hooks';
import styles from '../Home.module.css';

const TransactionList = ({ transactions }) => {
  const { response, deleteDocument, cleanup } = useFirestore('transactions');

  useEffect(() => {
    return () => {
      if (response.isPending) {
        cleanup();
      }
    };
  });

  return (
    <ul className={styles.transactions}>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>${transaction.amount}</p>
          <button onClick={() => deleteDocument(transaction.id)}>x</button>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
