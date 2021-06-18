import { useParams } from "react-router-dom";

const Teste = () => {
  const { name, age, nationality } = useParams();
  return (
    <div>
      <h1>name: {name}</h1>
      <h1>age: {age}</h1>
      <h1>nationality: {nationality}</h1>
    </div>
  );
};

export default Teste;
