import { useEffect } from "react";
import { Container } from "./styles";

export const TransactionTable = () => {
  useEffect(() => {
    fetch("http://localhost:3000/api/transations")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Container>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Development of software</td>
            <td className="deposit">$1000</td>
            <td>Software</td>
            <td>2021/07/01</td>
          </tr>

          <tr>
            <td>Apartment</td>
            <td className="withdraw">-$500</td>
            <td>House</td>
            <td>2021/04/17</td>
          </tr>

          <tr>
            <td>Development of software</td>
            <td className="deposit">$4000</td>
            <td>Software</td>
            <td>2021/07/01</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
