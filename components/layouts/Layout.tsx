import { FC } from "react";
import Head from "next/head";
import { NavBar } from "../ui/NavBar";

type Iprops = {
  title: string;
};
const origin = typeof window === "undefined" ? "" : window.location.origin;

const Layout: FC<Iprops> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='author' content='Saul Ramirez' />
        <meta name='description' content={`Pika ${title}`} />
        <meta name='keyword' content='Pikachu, pokedex' />
        <meta property='og:title' content={`${title}`} />
        <meta property='og:description' content={`Page of ${title}`} />
        <meta property='og:image' content={`${origin}/img/banner.png`} />
      </Head>
      <NavBar />
      <main
        style={{
          padding: "0px 20px",
        }}>
        {children}
      </main>
    </>
  );
};

export { Layout };
