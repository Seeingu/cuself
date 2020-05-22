import React from 'react';
import { Layout } from '../src/components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear, faSadCry } from '@fortawesome/free-solid-svg-icons';

const EmptyBlock: React.FC = () => {
  return (
    <div>
      Empty, 空 <FontAwesomeIcon icon={faSadCry} />
    </div>
  );
};

const Blog: React.FC = () => {
  return (
    <Layout>
      <EmptyBlock />
    </Layout>
  );
};

export default Blog;
