import React from 'react';
import { Layout } from '../src/components/Layout';

// TODO: move to persistent storage
const bookmarks = [
  {
    url:
      'http://goodmath.blogspot.com/2006/05/my-favorite-calculus-lambda-part-1.html',
    title: 'Lambda Calculus',
    description: 'The introduction of `Lambda Calculus`',
  },
  {
    url: 'http://pages.cs.wisc.edu/~remzi/OSTEP/',
    title: 'Operating Systems: Three Easy Pieces',
    description: 'Learning the basis of operating system',
  },
];

const Bookmark: React.FC = () => {
  return (
    <Layout>
      <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">
        {bookmarks.map((bm) => (
          <div
            className="max-w-sm rounded p-6 overflow-hidden shadow-lg"
            key={bm.title}
          >
            <a href={bm.url} target="_blank">
              <h3 className="font-bold text-xl mb-2">{bm.title}</h3>
              <p>{bm.description}</p>
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Bookmark;
