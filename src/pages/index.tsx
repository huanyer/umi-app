import React from 'react';
import { history, Prompt } from 'umi';
import api from '../store/api';
import styles from './index.less';

export default () => {
  console.log(api)
  return (
    <div>
      <Prompt message="你确定要离开么？" />
      <h1
        onClick={() => {
          history.push('/login');
        }}
        className={styles.title}
      >
        go login
      </h1>
    </div>
  );
};
