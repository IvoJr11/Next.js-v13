import '../styles/globals.css'

import Navigation from '../components/Navigation'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>Next.js 13 uwu</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
