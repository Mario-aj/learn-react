import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  ImageSquare,
  Lightning,
} from "phosphor-react";
import { gql, useQuery } from "@apollo/client";

import "@vime/core/themes/default.css";

type Props = {
  videoSlug: string;
};

type Lesson = {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      name: string;
      avatarURL: string;
      bio: string;
    };
  };
};

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      description
      teacher {
        name
        avatarURL
        bio
      }
    }
  }
`;

export const Video = ({ videoSlug }: Props) => {
  const { data } = useQuery<Lesson>(GET_LESSON_BY_SLUG_QUERY, {
    variables: { slug: videoSlug },
  });

  if (!data) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="flex justify-center bg-black">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] m-auto">
        <div className="flex items-start gap-16 mb-20">
          <div className="flex-1">
            <h1 className="mb-4 text-lg font-bold">{data.lesson.title}</h1>
            <p className="mb-6 leading-relaxed text-gray-200">
              {data.lesson.description}
            </p>

            <div className="flex items-start gap-4">
              <img
                className="w-16 h-16 border-2 border-blue-500 rounded-full"
                src={data.lesson.teacher.avatarURL}
                alt="teacher picture"
              />

              <div className="leading-relaxed">
                <strong className="block text-lg font-bold">
                  {data.lesson.teacher.name}
                </strong>
                <span className="block text-sm text-gray-200">
                  {data.lesson.teacher.bio}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="flex items-center justify-center gap-2 p-4 text-sm font-bold uppercase transition-colors duration-300 bg-green-500 rounded hover:bg-green-700"
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>

            <a
              href="#"
              className="flex items-center justify-center gap-2 p-4 text-sm font-bold text-blue-500 uppercase transition-colors duration-300 border border-blue-500 border-solid rounded hover:bg-blue-500 hover:text-gray-900"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <a
            href="#"
            className="flex items-stretch gap-6 overflow-hidden transition-colors duration-300 bg-gray-700 rounded hover:bg-gray-600"
          >
            <div className="flex items-center h-full p-6 bg-green-700">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="mb-2 text-lg font-bold">
                Material complementar
              </strong>
              <p className="text-gray-200">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="flex items-center h-full">
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href="#"
            className="flex items-stretch gap-6 overflow-hidden transition-colors duration-300 bg-gray-700 rounded hover:bg-gray-600"
          >
            <div className="flex items-center h-full p-6 bg-green-700">
              <ImageSquare size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="mb-2 text-lg font-bold">
                Wallpapers exclusivos
              </strong>
              <p className="text-gray-200">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className="flex items-center h-full">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
