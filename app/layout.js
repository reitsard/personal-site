import './globals.css'
import NavBar from './navigationBar/page'

export const metadata = {
  title: 'Richard Alvarado',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
