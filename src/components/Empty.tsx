import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';

export const EmptyBlock: React.FC = () => {
  return (
    <div>
      Empty, 空 <FontAwesomeIcon icon={faSadCry} />
    </div>
  );
};
