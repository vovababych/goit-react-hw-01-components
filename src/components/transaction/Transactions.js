import PropTypes from "prop-types";
import s from "./Transactions.module.css";

function Transactions({ transactions }) {
  return (
    <table className={s["transaction-history"]}>
      <thead className={s.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <Tbody transactions={transactions} />
    </table>
  );
}

function Tbody({ transactions }) {
  return <tbody className={s.tbody}>{transactions.map(TRow)}</tbody>;
}
function TRow({ id, type, amount, currency }, i) {
  const tRow = i % 2 ? "grey" : "white";
  return (
    <tr key={id} className={s[tRow]}>
      <td className={s.tRow}>{type}</td>
      <td className={s.TRow}>{amount}</td>
      <td className={s.TRow}>{currency}</td>
    </tr>
  );
}

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default Transactions;
