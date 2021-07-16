import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionTable";
import { Container } from "./styles";

export const Dashboard = () => {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
};
