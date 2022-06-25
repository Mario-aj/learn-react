import { isPast, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CheckCircle, Lock } from "phosphor-react";

type Props = {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
};

export const Lesson = ({ title, type, availableAt }: Props) => {
  const isLessonAvailable = isPast(availableAt);
  const availableAtFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  return (
    <a href="#">
      <span className="text-sm font-normal text-gray-300">
        {availableAtFormatted}
      </span>

      <div className="p-4 mt-2 border border-gray-500 rounded">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="flex items-center gap-2 text-sm font-medium text-blue-500">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm font-medium text-orange-500">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="text-xs rounded px-2 py-0.5 text-white border border-green-300 font-bold">
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong className="block mt-5 text-base text-gray-200">{title}</strong>
      </div>
    </a>
  );
};
