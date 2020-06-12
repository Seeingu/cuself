import React from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const headerItems = [
  {
    url: '/blog',
    title: 'Blog',
  },
  {
    url: '/bookmark',
    title: 'Bookmark',
  },
  {
    url: '/about',
    title: 'About',
  },
];

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
          {headerItems.map((item) => (
            <li className="layout-li">
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
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
