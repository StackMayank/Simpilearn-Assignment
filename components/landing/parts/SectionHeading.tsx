import { Fragment } from "react";

type SectionHeadingProps = {
  title: string;
  description?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  as?: "h1" | "h2" | "h3";
};

function TitleLines({ title }: { title: string }) {
  const lines = title.split("\n");

  return (
    <>
      {lines.map((line, index) => (
        <Fragment key={`${index}-${line}`}>
          {index > 0 ? <br /> : null}
          {line}
        </Fragment>
      ))}
    </>
  );
}

/**
 * Shared title + description pair used across landing sections.
 * Newlines in `title` become hard line breaks.
 */
export function SectionHeading({
  title,
  description,
  titleClassName = "text-heading-section",
  descriptionClassName = "mt-2 text-body-muted",
  as: Tag = "h3",
}: SectionHeadingProps) {
  return (
    <>
      <Tag className={titleClassName}>
        <TitleLines title={title} />
      </Tag>
      {description ? <p className={descriptionClassName}>{description}</p> : null}
    </>
  );
}
