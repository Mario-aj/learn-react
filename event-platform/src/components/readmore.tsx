import { useState } from "react";

type Props = {
  text: string;
  min: number;
  readMoreText?: string;
  readLessText?: string;
};

type GetTextToShowProps = Pick<Props, "text" | "min">;

function getTextToShow({ text, min }: GetTextToShowProps): string[] {
  const characters = [".", ",", " ", "?", "!", "\n"];
  let i = min;
  let j = min;

  while (true) {
    if (characters.includes(text[i])) return [text.slice(0, i), text.slice(i)];

    if (characters.includes(text[j])) return [text.slice(0, j), text.slice(j)];

    i++;
    j--;
  }
}

const ReadMore = ({
  text,
  min,
  readLessText = "Read Less",
  readMoreText = "Read More",
}: Props) => {
  const [showMore, setShowMore] = useState(false);
  let textToShow = text.length <= min ? text : getTextToShow({ text, min });

  if (typeof textToShow === "object") {
    textToShow = showMore
      ? textToShow[0] + textToShow[1]
      : textToShow[0] + "...";
  }

  return (
    <section
      className="flex flex-col w-full gap-4 text-sm text-white"
      title="read-more"
      aria-label="read-more"
    >
      <span className="text-inherit">{textToShow}</span>
      <button
        className="flex self-start justify-center p-3 py-2 text-sm font-bold uppercase transition-colors duration-300 bg-green-500 rounded hover:bg-green-700"
        onClick={() => setShowMore((current) => !current)}
      >
        {showMore ? readLessText : readMoreText}
      </button>
    </section>
  );
};

export { ReadMore };
