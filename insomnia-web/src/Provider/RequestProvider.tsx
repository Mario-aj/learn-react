import { useState } from 'react';
import { RequestContext, dispatchRequestProps } from '../context';

const RequestProvider = ({ children }: any) => {
  const [requestUrl, setRequestUrl] = useState('');
  const [requestMethod, setRequestMethod] = useState('');

  const dispatchRequest = ({ url, method }: dispatchRequestProps) => {
    setRequestUrl(url);
    setRequestMethod(method);
  };

  return (
    <RequestContext.Provider
      value={{ url: requestUrl, method: requestMethod, dispatchRequest }}
    >
      {children}
    </RequestContext.Provider>
  );
};

export default RequestProvider;
