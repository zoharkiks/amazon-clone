import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/ProximaNova-Bold.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="/fonts/ProximaNova-SemiBold.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="/fonts/ProximaNova-Regular.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="/fonts/ProximaNova-Extrabold.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
