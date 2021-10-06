import { useContext } from 'react';

import { RequestContext } from '../context'

const useRequest = () => useContext(RequestContext);

export default useRequest;
