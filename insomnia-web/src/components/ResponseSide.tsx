import { useEffect, useState } from 'react';
import ReactJson from 'react-json-view';
import { useRequest } from '../hook';
import { fetch } from '../services';

const ResponseSide = (): JSX.Element => {
  const { method, url } = useRequest();
  const [requetResponse, setRequestResponse] = useState(null);
  const [status, setStatus] = useState('');
  const [requestTime, setRequestTime] = useState('');
  const [requestError, setRequestError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestStartedAt = new Date().getTime();
        const response = await fetch({ method, url });
        const requestEndedAt = new Date().getTime();
        const { data, request } = response;

        setStatus(`${request.status} ${request.statusText}`);
        setRequestTime(`${(requestEndedAt - requestStartedAt) / 100} s`);
        setRequestResponse(data);
        setRequestError(false);
      } catch (err) {
        setRequestResponse(null);
        setStatus('404 Not Found');
        setRequestError(true);
      }
    };

    fetchData();
  }, [url, method]);

  return (
    <div className="flex flex-col overflow-hidden border border-gray-700">
      <div className="flex items-center justify-start gap-4 pl-4 bg-gray-900 border border-gray-700 h-11">
        {!!status && (
          <span
            className={`px-1 ${
              !requestError ? 'bg-green-600' : 'bg-yellow-600'
            } rounded-sm`}
          >
            {status}
          </span>
        )}
        {!!requestTime && (
          <span className="px-1 bg-gray-800 rounded-sm">{requestTime}</span>
        )}
      </div>

      {requetResponse && (
        <div className="h-screen overflow-y-scroll" id="data-container">
          <ReactJson
            theme="tomorrow"
            src={requetResponse}
            displayDataTypes={false}
          />
        </div>
      )}
    </div>
  );
};

export default ResponseSide;
