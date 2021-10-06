import { useState, FormEvent, useCallback } from 'react';
import { DropDown } from '../ui';

const METHODS_HTTP = [
  { title: 'GET', color: 'purple' },
  { title: 'POST', color: 'green' },
  { title: 'PUT', color: 'yellow' },
  { title: 'DELETE', color: 'red' },
];

const Header = () => {
  const [selectedMethod, setSelectedMethod] = useState(METHODS_HTTP[0]);

  const onSubmit = useCallback(
    (event: FormEvent<HTMLElement>) => {
      event.preventDefault();
      console.log(selectedMethod);
    },
    [selectedMethod]
  );

  return (
    <form
      onSubmit={onSubmit}
      className="bg-gray-900 flex items-center justify-between pl-4 h-11 border border-gray-700"
    >
      <DropDown
        options={METHODS_HTTP}
        selectedOption={selectedMethod}
        onSelectedOption={(option) => setSelectedMethod(option)}
        className="mr-3"
      />
      <input
        type="text"
        placeholder="https://api.myproduct.com/v1/users"
        className="flex-1 bg-gray-900 h-full focus:outline-none"
      />
      <button
        type="submit"
        className="h-full bg-purple-500 hover:bg-purple-700 transition-all duration-300 px-4"
      >
        Send
      </button>
    </form>
  );
};

export default Header;
