import React from 'react';
import CalculatorButtons from './components/CalculatorButtons';
import Screen from './components/Screnn';

const App = () => (
  <div className="flex items-center justify-center w-screen h-screen py-4 bg-gray-300">
    <div className="relative flex flex-col items-center justify-center h-full px-4 py-16 bg-white rounded-2xl w-80">
      <div className="absolute flex flex-col items-center justify-center top-2">
        <div className="w-2 h-2 mb-2 bg-black rounded-full" />
        <div className="flex items-center justify-center">
          <div className="w-2 h-2 mr-1 bg-black rounded-full" />
          <div className="w-12 h-1 bg-black rounded-full" />
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center w-full h-full bg-black">
        <Screen />
        <CalculatorButtons />
      </div>
      <div className="absolute w-12 h-12 border-4 border-yellow-500 rounded-full bottom-2" />
    </div>
  </div>
);

export default App;
