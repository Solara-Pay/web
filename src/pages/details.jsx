import UserDetailsPage from "../components/userdetails";
const Details = () => {
  const userData = {
    name: "John Doe",
    email: "john@example.com",
    username: "johndoe",
    country: "United States",
    wallet_address_balance: "1000 ETH",
    wallet_address: "0x1234...5678",
    onsite_wallet_balance: "500 USD",
    onsite_wallet_address: "0xabcd...efgh",
    api_key: "sk_test_1234567890",
    webhook: "https://example.com/webhook",
  };
  return (
    <>
      <UserDetailsPage user={userData} />
    </>
  );
};

export default Details;
