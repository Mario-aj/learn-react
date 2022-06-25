import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: createdAt_ASC, stage: PUBLISHED) {
      id
      title
      slug
      availableAt
      lessonType
    }
  }
`;

type LessonsQueryProps = {
  lessons: {
    title: string;
    slug: string;
    availableAt: string | Date;
    lessonType: "live" | "class";
    id: string;
  }[];
};

export const Sidebar = () => {
  const { data } = useQuery<LessonsQueryProps>(GET_LESSONS_QUERY);

  return (
    <aside className="w-[348px] bg-gray-700 border-l border-gray-600 p-6">
      <h2 className="block pb-6 mb-6 text-2xl font-bold border-b border-b-gray-500">
        Cronograma de aulas
      </h2>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            type={lesson.lessonType}
            availableAt={new Date(lesson.availableAt)}
            slug={lesson.slug}
          />
        ))}
      </div>
    </aside>
  );
};
