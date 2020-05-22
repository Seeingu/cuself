import React from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

export const Layout: React.FC = (props) => {
  const { children } = props;
  return (
    <div className="container h-screen">
      <Head>
        <title>cuself</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="block h-20 fixed w-screen font-mono flex items-center">
        <div className="text-4xl flex-initial pl-10 pr-10">~</div>
        <ul className="text-2xl flex-1 flex flex-row items-center">
          <li className="flex-initial mr-10">
            <a className="" href="/blog">
              Blog
            </a>
          </li>
          <li className="flex-initial">
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
      <main className="block flex flex-col justify-center items-center min-h-screen pt-20 pb-20">
        {children}
      </main>
      <footer className="w-screen block text-center h-20 fixed left-0 bottom-0">
        <a
          href="https://github.com/Seeingu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithubAlt} size="lg" />
        </a>
      </footer>
    </div>
  );
};
