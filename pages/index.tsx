import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const Home: React.FC = () => {
  return (
    <div className="container h-screen">
      <Head>
        <title>cuself</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="block h-20 fixed w-screen font-mono flex items-center">
        <div className="text-4xl flex-initial pl-10 pr-10">~</div>
        <ul className="text-2xl flex-1 flex flex-row items-center">
          <li className="flex-initial mr-10">Blog</li>
          <li className="flex-initial">About</li>
        </ul>
      </nav>
      <main className="block flex flex-col justify-center items-center min-h-screen pt-20 pb-20">
        <h2 className="font-serif text-2xl mb-10">Under Construction</h2>
        <figure className="block flex flex-col items-center">
          <img className="w-6/12" src="/pluto-success-1.png" alt="pluto" />
          <figcaption className="text-gray-500">
            Image from https://icons8.com/ouch/illustration/pluto-success-1
          </figcaption>
        </figure>
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

export default Home;
