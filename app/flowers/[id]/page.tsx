import React from "react";

type Props = {
  params: {
    id: number;
  };
};

const page = ({ params: { id } }: Props) => {
  return <div>single flower page {id}</div>;
};

export default page;
