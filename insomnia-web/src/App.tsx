import { RequestSide, ResponseSide } from './components';

export function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <RequestSide />
      <ResponseSide />
    </div>
  );
}
