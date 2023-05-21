import Heading from "./Heading";
import { IPost } from "../types";
import React, { FC } from "react";

type PostProps = { post: IPost };

export const PostInfo: FC<PostProps> = ({ post }) => {
  const { title, body } = post || {};

  if (!post) {
    return <Heading tag="h3" text="Empty post" />;
  }

  return (
    <>
      <Heading tag="h3" text={title} />
      <p>{body}</p>
    </>
  );
};
