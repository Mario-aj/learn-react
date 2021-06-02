import React from "react";

import Member from "./components/Member";
import ConditionalRender from "./components/ConditionalRender";
import Lists from "./components/Lists";

const App = () => {
  return (
    <>
      <Member name="Visitante" />
      <ConditionalRender />
      <Lists />
    </>
  );
};

export default App;
