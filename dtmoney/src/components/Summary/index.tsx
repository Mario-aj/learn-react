import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import total from "../../assets/total.svg";

import { Container } from "./styles";

export const Summary = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={income} alt="income" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Outcome</p>
          <img src={outcome} alt="outcome" />
        </header>
        <strong>-R$2000,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="total" />
        </header>
        <strong>R$600,00</strong>
      </div>
    </Container>
  );
};
