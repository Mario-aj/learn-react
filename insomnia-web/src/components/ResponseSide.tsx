import { useRequest } from '../hook';

const ResponseSide = (): JSX.Element => {
  const { method, url } = useRequest();

  return (
    <div>
      <h1>
        {method} - {url}
      </h1>
    </div>
  );
};

export default ResponseSide;
