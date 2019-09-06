import React, { useState, useEffect } from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import Package from "../package.json";
import moment from "moment";
import { LocaleProvider } from "antd";
// import * as zhCN from "antd/es/locale-provider/zh_CN";
import * as zhCN from "antd/lib/locale-provider/zh_CN";
import "antd/dist/antd.css";
import "moment/locale/zh-cn";
import "@static/styles/index.scss";
moment.locale("zh-cn");

// import { appWithTranslation } from "../i18n";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
    this.consoleLogVersion();
  }

  consoleLogVersion = () => {
    window.console.log(
      "%c%s",
      "padding:0 20px; color: #4688f1; background: #fff; font-size: 18px;",
      "ARPPU v" + Package.version
    );
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>My page</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <LocaleProvider locale={zhCN}>
            <Component {...pageProps} />
          </LocaleProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
// export default appWithTranslation(MyApp);
