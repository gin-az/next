import Heading from "../components/Heading";
import Head from "next/head";
import Socials from "../components/Socials";

import s from "../styles/Home.module.scss";

export const getStaticProps = async () => {
  const response = await fetch(`http://localhost:3000/api/socials`);
  const data = await JSON.stringify(response.json());
  console.log(response.json());

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { socials: data },
  };
};

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <div className={s.wrapper}>
      <Heading text="Next.js" />
      <Socials socials={socials} />
    </div>
  </>
);

export default Home;
