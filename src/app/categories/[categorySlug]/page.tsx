import { FC } from "react";

type pageProps = {
  params: {
    categorySlug: string;
  };
};

const Page: FC<pageProps> = ({ params }) => {
  return <div>{params.categorySlug}</div>;
};

export default Page;
