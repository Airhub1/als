import Head from "next/head";
import MainPage from "../components/MainPage/MainPage";
import styles from "../styles/Home.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LightStarter</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          keywords="lightstarter , cryptocurrency , Lightstarter cryptocurrency ,криптовалюта Lightstarter , криптовалюта, Tokenomics ,crypto , earn , defi , nft , bitcoin , token , launchpad , launchpool , starter , pad , ido "
        ></meta>
        <meta property={"og:title"} content="LightStarter" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage />
    </div>
  );
}
