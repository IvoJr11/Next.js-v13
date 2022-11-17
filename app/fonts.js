import { Space_Grotesk as spaceGrotesk, Poppins } from '@next/font/google'

const groteskFont = spaceGrotesk({
  weight: ['400', '700'],
  subsets: ['latin'],
  // se utiliza 'variable' para cargar las fuentes importadas desde CSS
  variable: '--font-grotesk'
})

const poppinsFont = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})

export { groteskFont, poppinsFont }
