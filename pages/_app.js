import {MantineProvider} from "@mantine/core";
import {AppProps} from "next/app";
import Head from "next/head";
import "../styles/globals.css";

export default function App(props) {
  const {Component, pageProps} = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        withCSSVariables
        theme={{
          /** Put your mantine theme override here */
          breakpoints: {
            xs: 500,
            sm: 800,
            md: 1000,
            lg: 1200,
            xl: 1400,
          },
          colorScheme: "dark",
          fontFamily: "Open Sans, sans serif",
          spacing: {xs: 15, sm: 20, md: 25, lg: 30, xl: 40},
          // transitionTimingFunction: "all 0.35s ease-in-out",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
