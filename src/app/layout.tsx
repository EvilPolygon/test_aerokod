import localFont from 'next/font/local';
import './globals.css';

import type {Metadata} from 'next';
import StoreProvider from '@store/StoreProvider';
 
const dejaVuFont = localFont({
  src: '../public/fonts/DejaVuSans.ttf',
})

export const metadata: Metadata = {
  title: 'Time tracker todo test'
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dejaVuFont.className}>
      <body>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}