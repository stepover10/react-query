import React from 'react';
import Document, { Html, Main, Head, NextScript } from 'next/document';

class _AppDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _AppDocument;