import React from 'react';
import styles from './style.module.scss';

interface IHeadingLevels {
  h1: 'h1';
  h2: 'h2';
  h3: 'h3';
  h4: 'h4';
  h5: 'h5';
  h6: 'h6';
}

const HEADING_LEVELS: IHeadingLevels = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};

interface ITitle {
  children: React.ReactNode;
  variant: keyof IHeadingLevels;
}

const Title: React.FC<ITitle> = ({ variant, children }) => {
  const Tag = HEADING_LEVELS[variant] || 'h1';

  return <Tag className={`${styles.title} ${styles[variant]}`}>{children}</Tag>;
};

export default Title;
