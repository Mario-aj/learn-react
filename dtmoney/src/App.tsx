import styled from "styled-components";

const WelcomeMessage = styled.h1`
  font-size: 64px;
  color: #0d2636;
`;

export function App() {
  return (
    <div className="App">
      <WelcomeMessage>Hello dtmoney</WelcomeMessage>
    </div>
  );
}
