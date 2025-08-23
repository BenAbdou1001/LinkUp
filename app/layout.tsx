import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import 'react-datepicker/dist/react-datepicker.css';
export const metadata: Metadata = {
  title: "LinkUp",
  description: "A platform for seamless video calls",
  icons: {
    icon: '../public/icons/linkup.svg',
  },
};
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout:{
            logoImageUrl: '/icons/yoom-logo.png',
            socialButtonsVariant: 'iconButton',
          },
          variables: {
            colorText : '#fff',
            colorPrimary: '#0E78F9',
            colorBackground: '#1C1F2E',
            colorInputBackground: '#252A41',
            colorInputText: '#fff',
          }
        }}
      >
        <body
          className={`${inter.variable} bg-background text-white`}
          suppressHydrationWarning={true}
        >
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
