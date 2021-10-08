import { useEffect, useState } from 'react';
import { useRequest } from '../hook';
import { fetch } from '../services';

const ResponseSide = (): JSX.Element => {
  const { method, url } = useRequest();
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: items, request } = await fetch({ method, url });

        setStatus(`${request.status} ${request.statusText}`);
        setData(items);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [url, method]);

  return (
    <div className="flex flex-col overflow-hidden border border-gray-700">
      <div className="flex items-center justify-start gap-4 pl-4 bg-gray-900 border border-gray-700 h-11">
        <span className="px-2 bg-green-600 rounded-sm">{status}</span>
        <span className="px-2 bg-gray-800 rounded-sm">1.61 s</span>
        <span className="px-2 bg-gray-800 rounded-sm">105.8 KB</span>
      </div>
      {data && (
        <div
          className="h-screen p-2 overflow-y-scroll break-words"
          id="response-container"
        >
          <pre className="flex-wrap break-normal break-words break-all">
            {JSON.stringify(data, null, 4)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ResponseSide;
