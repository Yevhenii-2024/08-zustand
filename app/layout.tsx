import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto({
	weight: ['400', '700'],
	variable: '--font-main',
	display: 'swap',
	subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
	title: 'NoteHUB',
	description:
		'A simple and fast notes app to create, edit, and manage your personal or work-related notes. Organize your thoughts in one place — anytime, anywhere.',
	openGraph: {
		title: 'NoteHUB',
		description:
			'A simple and fast notes app to create, edit, and manage your personal or work-related notes. Organize your thoughts in one place — anytime, anywhere.',
		url: 'https://08-zustand-beige.vercel.app/',
		images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
	},
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <TanStackProvider>
          <Header />
          {children}
          {modal}
          <Footer />
        </TanStackProvider>
        
      </body>
    </html>
  );
}
