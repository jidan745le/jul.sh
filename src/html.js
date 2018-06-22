import React from 'react'

const regularFont = '/fonts/jregular.woff2'
const boldFont = '/fonts/jbold.woff2'

const webFonts = `
@font-face {
  font-family: 'Juliette';
  src: url('${regularFont}') format('woff2'),
    url('/fonts/jregular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Juliette';
  src: url('${boldFont}') format('woff2'),
    url('/fonts/jbold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
`

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html lang="en" {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>Juliette Pretot</title>
          <meta name="description" content="Frontend Engineer" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
          />
          <link rel="preload" href={regularFont} as="font" />
          <link rel="preload" href={boldFont} as="font" />
          <meta name="theme-color" content="#000615" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <meta
            name="msapplication-TileImage"
            content="/favicons/mstile-144x144.png"
          />
          <meta
            name="msapplication-config"
            content="/favicons/browserconfig.xml"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: webFonts
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html:
                '/*\n \n \n🔵🔵🔵🔵🔵🔴🔴🔴🔴🔴🔴\n🔵🔵🔵🔵🔵🔴🔴🔴🔴🔴🔴\n🔵🔵🔵🔵🔵🔴🔴🔴🔴🔴🔴\n🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴\n🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴\n🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 \n \n \nHey astronaut. You can view the uncompiled soure code at https://github.com/juliettepretot/juliette.sh :) \n \n \n*/'
            }}
          />
          {css}
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

export default HTML