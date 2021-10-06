import Header from './Header';

const RequestSide = (): JSX.Element => {
  return (
    <div className="border border-gray-700 h-screen">
      <Header />
      {/* <div className="border border-gray-700 w-full h-11 items-center gap-10 justify-start flex pl-4 text-gray-400">
        <span>Body</span>
        <span>Auth</span>
        <span>Query</span>
        <span>Header</span>
        <span>Docs</span>
      </div> */}
    </div>
  );
};

export default RequestSide;
