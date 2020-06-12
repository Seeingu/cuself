import React from 'react';
import { Layout } from '../src/components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaperPlane,
  faCode,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <Layout>
      <div className="font-serif">
        <h3 className="text-2xl mb-4">Yunliang Zhu</h3>
        <ul className="list-disc leading-10">
          <li>
            <FontAwesomeIcon fixedWidth icon={faCode} size="lg" /> Frontend
            Developer
          </li>
          <li>
            <FontAwesomeIcon fixedWidth icon={faBuilding} size="lg" /> Shanghai
            Bytedance inc.
          </li>
          <li>
            <FontAwesomeIcon fixedWidth icon={faPaperPlane} size="lg" />{' '}
            seeingasu@gmail.com
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default About;
