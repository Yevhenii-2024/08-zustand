import Link from 'next/link';
import React from 'react';
import styles from './not-found.module.css'
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Page not Found',
	description: 'Oops! We couldn`t find the page you were looking for. It might have been deleted or never existed.',
	openGraph: {
		title: 'Page not Found',
		description: 'Oops! We couldn`t find the page you were looking for. It might have been deleted or never existed.',
		url: 'https://example.com/404',
		images: [
			{
				url: 'https://storage.googleapis.com/support-forums-api/attachment/thread-275804406-4521668504705607705.jpg',
				width: 1200,
				height: 630,
				alt: 'NoteHub 404',
			},
		],
	},
};

export default function NotFound404() {
    return (
      <div className={styles.container}>
        <div className={styles.iconWrapper}>
          <img
            src="https://elements-resized.envatousercontent.com/elements-cover-images/ea91690e-e5ac-4258-af91-30fd020a1f97?w=2038&cf_fit=scale-down&q=85&format=auto&s=25c98360e79865df97e67c652758350ef980660525c064e81a83f4a6f79ee608"
                    alt="astronaut"
            className={styles.icon}
          />
        </div>
        <h1 className={styles.title}>404</h1>
        <p className={styles.message}>
          Houston, we have a problem. <br /> This page is lost in space.
        </p>
        <Link href="/">
          <span className={styles.button}>Go Home</span>
        </Link>
      </div>
    );
  }