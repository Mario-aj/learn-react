import { createContext } from 'react';

export type dispatchRequestProps = { url:string; method: string }

type RequestContextProps = {
  url: string;
  method: string;
  dispatchRequest: (props: dispatchRequestProps) => void;
};


const RequestContext = createContext<RequestContextProps>({
  url: '',
  method: '',
  dispatchRequest: () => {}
});

export default RequestContext;
