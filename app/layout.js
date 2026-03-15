import './globals.css';
import { Lexend_Deca } from 'next/font/google'

export const metadata = {
  title: 'Corely — Agencia Creativa',
  description: 'Agencia creativa especializada en branding, redes sociales y contenido estratégico.',
};

const lexend = Lexend_Deca({ 
  subsets: ['latin'],
  weight: '400', // Lexend Deca suele venir en 400 por defecto
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${lexend.variable} font-sans`}>{children}</body>
    </html>
  );
}
