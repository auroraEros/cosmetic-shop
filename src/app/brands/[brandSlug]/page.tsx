import { FC } from "react";

type pageProps = {
  params: { brandSlug: string };
};

const Page: FC<pageProps> = ({ params }) => {
  return <div>{params.brandSlug}</div>;
};

export default Page;
