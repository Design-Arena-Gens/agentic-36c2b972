import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Générateur de Notices Sécurité Incendie & Accessibilité',
  description: 'Outil professionnel pour architectes - Génération de notices de sécurité incendie et accessibilité conformes aux normes françaises',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
