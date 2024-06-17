import React, { useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import "./app.css";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4">
            <TooltipComponent content="Settings" position="TopCenter">
              <button
                type="button"
                style={{ background: "blue", borderRadius: "50%" }}
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
