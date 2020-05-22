import React from 'react';
import { Layout } from '../src/components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <h2 className="font-serif text-2xl mb-10">Under Construction</h2>
      <figure className="block flex flex-col items-center">
        <img className="w-6/12" src="/pluto-success-1.png" alt="pluto" />
        <figcaption className="text-gray-500">
          Image from https://icons8.com/ouch/illustration/pluto-success-1
        </figcaption>
      </figure>
    </Layout>
  );
};

export default Home;
