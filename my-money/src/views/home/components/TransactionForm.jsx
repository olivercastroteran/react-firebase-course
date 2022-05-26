import { useEffect, useState } from 'react';
import { useFirestore } from '../../../hooks';

const TransactionForm = ({ uid }) => {
  const { response, addDocument, cleanup } = useFirestore('transactions');
  const [transaction, setTransaction] = useState({
    name: '',
    amount: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({ ...transaction, uid });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTransaction((prevTransaction) => {
      return {
        ...prevTransaction,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    if (response.success) {
      setTransaction({
        name: '',
        amount: '',
      });
    }
    // eslint-disable-next-line
  }, [response.success]);

  useEffect(() => {
    return () => {
      if (response.isPending) {
        cleanup();
      }
    };
  });

  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction Name:</span>
          <input
            type="text"
            placeholder="Transaction Name"
            name="name"
            onChange={handleChange}
            value={transaction.name}
            required
          />
        </label>

        <label>
          <span>Amount ($):</span>
          <input
            type="number"
            placeholder="Transaction Amount"
            name="amount"
            onChange={handleChange}
            value={transaction.amount}
            required
          />
        </label>

        <button className="btn" disabled={response.isPending}>
          {response.isPending ? 'Adding Transaction...' : 'Add Transaction'}
        </button>
      </form>
    </>
  );
};

export default TransactionForm;
