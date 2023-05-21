import React, { FC } from "react";

const Heading:FC = ({
  tag,
  text,
}: {
  tag?: keyof JSX.IntrinsicElements;
  text: string;
}) => {
  const Tag = tag || "h1";
  return <Tag>{text}</Tag>;
};

export default Heading;
