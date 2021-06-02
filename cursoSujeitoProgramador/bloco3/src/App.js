import React from "react";

import Member from "./components/Member";
import ConditionalRender from "./components/ConditionalRender";
const App = () => {
  return (
    <>
      <Member name="Visitante" />
      <ConditionalRender />
    </>
  );
};

export default App;
