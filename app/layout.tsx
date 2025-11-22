import './scss/style.scss'
import localFont from 'next/font/local'
import Header from './ui/header';
import Cart from './ui/Cart';

const GTEestiProText = localFont({
  src: [
    {
      path: './fonts/EestiRegular.otf',
      weight: '500'
    },
    {
      path: './fonts/EestiBold.otf',
      weight: '700'
    },
  ],
})

export default function RootLayout({ children, }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
		integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
      </head>
      <body className={GTEestiProText.className}>
        <Header />
        <main>
          {children}
        </main>
        <Cart />
      </body>
    </html>
  );
}
