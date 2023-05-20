import Heading from "../components/Heading";
import Head from "next/head";
import Socials from "../components/Socials";

import s from "../styles/Home.module.scss";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export const getStaticProps = async () => {
  const response = await fetch(`http://localhost:3000/api/socials/`);
  // const response = await fetch(`${process.env.API_HOST}/socials/`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { socials: data },
  };
};

const Home = ({ socials }) => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <div className={s.wrapper}>
      <Heading text="Next.js" />
      <div>
        <Socials socials={socials} />
      </div>
    </div>
  </>
);

export default Home;
