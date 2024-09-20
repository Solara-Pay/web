import TransactionTable from "../components/transactions";

const transactions = [
  {
    id: 24213,
    user_id: "1",
    account_id: "15",
    amount: "5",
    info: '{\n    "fee": 5000,\n    "slot": 326931944,\n    "signatures": "2zP47uNcLrRfvDUZZde4iKwQtyGDTUsn4nthyzDARVV5HnZu8ky5nPoZeLgGhpkeFJ43pDNf32gzo71uLB56KEoh"\n}',
    remark: "CONFIRMED",
    created_at: "2024-09-19T02:10:38.000000Z",
    updated_at: "2024-09-19T02:10:38.000000Z",
    signature: null,
  },
  {
    id: 24213,
    user_id: "1",
    account_id: "15",
    amount: "5",
    info: '{\n    "fee": 5000,\n    "slot": 326931944,\n    "signatures": "2zP47uNcLrRfvDUZZde4iKwQtyGDTUsn4nthyzDARVV5HnZu8ky5nPoZeLgGhpkeFJ43pDNf32gzo71uLB56KEoh"\n}',
    remark: "CONFIRMED",
    created_at: "2024-09-19T02:10:38.000000Z",
    updated_at: "2024-09-19T02:10:38.000000Z",
    signature: null,
  },
  {
    id: 24213,
    user_id: "1",
    account_id: "15",
    amount: "5",
    info: '{\n    "fee": 5000,\n    "slot": 326931944,\n    "signatures": "2zP47uNcLrRfvDUZZde4iKwQtyGDTUsn4nthyzDARVV5HnZu8ky5nPoZeLgGhpkeFJ43pDNf32gzo71uLB56KEoh"\n}',
    remark: "CONFIRMED",
    created_at: "2024-09-19T02:10:38.000000Z",
    updated_at: "2024-09-19T02:10:38.000000Z",
    signature: null,
  },
];

const Transactions = () => {
  return <TransactionTable transactions={transactions} />;
};

export default Transactions;
