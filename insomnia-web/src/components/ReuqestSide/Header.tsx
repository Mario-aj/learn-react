import { useState, FormEvent, useCallback } from 'react';
import { DropDown } from '../ui';
import { useRequest } from '../../hook';

const METHODS_HTTP = [
  { title: 'GET', color: 'purple' },
  { title: 'POST', color: 'green' },
  { title: 'PUT', color: 'yellow' },
  { title: 'DELETE', color: 'red' },
];

const Header = () => {
  const [selectedMethod, setSelectedMethod] = useState(METHODS_HTTP[0]);
  const [inputValue, setInputValue] = useState('');
  const { dispatchRequest } = useRequest();

  const onSubmit = useCallback(
    (event: FormEvent<HTMLElement>) => {
      event.preventDefault();

      let { title } = selectedMethod;
      dispatchRequest({ method: title, url: inputValue });
    },
    [selectedMethod, inputValue, dispatchRequest]
  );

  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center justify-between pl-4 bg-gray-900 border border-gray-700 h-11"
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
        className="flex-1 h-full bg-gray-900 focus:outline-none"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        type="submit"
        className="h-full px-4 transition-all duration-300 bg-purple-500 hover:bg-purple-700"
      >
        Send
      </button>
    </form>
  );
};

export default Header;
