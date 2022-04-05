import React, { useState, useEffect } from "react";
import LoadingScreen from "../components/Preloader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 600);
  });
  return <>{loading ? <Component {...pageProps} /> : <LoadingScreen />}</>;
}

export default MyApp;
