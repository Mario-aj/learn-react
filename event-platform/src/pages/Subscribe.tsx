import { gql, useMutation } from "@apollo/client";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

export const Subscribe = () => {
  const navigate = useNavigate();
  const [createSubscriber, { loading }] = useMutation(
    CREATE_SUBSCRIBER_MUTATION
  );
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    //@ts-ignore
    const name = event.target.elements["name"].value;
    //@ts-ignore
    const email = event.target.elements["email"].value;

    await createSubscriber({ variables: { name, email } });
    navigate("/event");
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-no-repeat bg-cover bg-blur">
      <article className="mb-10 max-w-[1100px] w-full flex items-center justify-between mt-20 mx-auto bg-react-logo bg-cover bg-no-repeat">
        <section className="max-w-[640px]">
          <Logo />

          <h1 className="mb-4 mt-8 text-[2.5rem] leading-tight">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="leading-relaxed text-gray-200">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </section>

        <section className="p-8 bg-gray-700 border rounded border-gray-50">
          <strong className="block mb-6 text-lg">
            Inscreva-se gratuitamente
          </strong>

          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-3">
            <input
              type="text"
              className="px-5 bg-gray-900 rounded h-14"
              placeholder="Seu nome completo"
              name="name"
              required
            />
            <input
              required
              name="email"
              type="email"
              className="px-5 bg-gray-900 rounded h-14"
              placeholder="Seu e-mail"
            />

            <button
              disabled={loading}
              type="submit"
              className="py-4 mt-5 font-bold uppercase transition-colors duration-300 bg-green-500 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-700"
            >
              Garantir minha vaga
            </button>
          </form>
        </section>
      </article>

      <img src="/src/assets/code-markup.png" alt="code markup" />
    </div>
  );
};
