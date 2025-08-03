import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head />
      <body className="antialiased bg-neutral-900 cursor-none">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}