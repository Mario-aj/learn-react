import { createContext } from 'react';

export type dispatchRequestProps = {
  url:string;
  method: 'get' | 'post' | 'put' | 'delete';
}

interface RequestContextProps extends dispatchRequestProps {
  dispatchRequest: (props: dispatchRequestProps) => void;
};

const RequestContext = createContext<RequestContextProps>({
  url: '',
  method: 'get',
  dispatchRequest: () => {}
});

export default RequestContext;
