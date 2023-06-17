import Ripple from './components/Ripple'
import SwitchTheme from './components/SwitchTheme'
import './globals.css'

import Providers from './Providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Providers>
        <link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.core.min.css"/>
          <SwitchTheme/>
          {children}
        </Providers>
      </body>
    </html>
  )
}