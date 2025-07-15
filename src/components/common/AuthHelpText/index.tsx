import React from 'react';
import AuthLink from '@common/AuthLink';

import styles from './style.module.scss';

interface IAuthHelpText {
  isSignIn: boolean;
}

const AuthHelpText: React.FC<IAuthHelpText> = ({ isSignIn }) => {
  return (
    <div className={styles.help}>
      {isSignIn ? (
        <p>
          Don&#39;t have an account ?{' '}
          <AuthLink link="/auth/signup">Sign Up</AuthLink>
        </p>
      ) : (
        <p>
          Have an account ? <AuthLink link="/auth/signin">Sign In</AuthLink>
        </p>
      )}
    </div>
  );
};

export default AuthHelpText;
