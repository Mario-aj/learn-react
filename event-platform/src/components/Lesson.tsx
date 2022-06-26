import { isPast, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CheckCircle, Lock } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
import classnames from "classnames";

type Props = {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
};

export const Lesson = ({ title, type, availableAt, slug }: Props) => {
  const params = useParams<{ slug: string }>();
  const isLessonActive = params.slug === slug;
  const isLessonAvailable = isPast(availableAt);
  const availableAtFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-sm font-normal text-gray-300">
        {availableAtFormatted}
      </span>

      <div
        className={classnames(
          "p-4 mt-2 border border-gray-500 rounded group-hover:border-green-500",
          {
            "bg-green-500": isLessonActive,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classnames(
                "flex items-center gap-2 text-sm font-medium",
                {
                  "text-white": isLessonActive,
                  "text-blue-500": !isLessonActive,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm font-medium text-orange-500">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={classnames(
              "text-xs rounded px-2 py-0.5 text-white border font-bold",
              {
                "border-white": isLessonActive,
                "border-green-300": !isLessonActive,
              }
            )}
          >
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong
          className={classnames("block mt-5 text-base", {
            "text-white": isLessonActive,
            "text-gray-200": !isLessonActive,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
};
