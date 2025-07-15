import { Outlet, useLocation } from 'react-router';
import AuthHelpText from '@common/AuthHelpText';
import clsx from 'clsx';

import styles from './style.module.scss';

const AuthLayout = () => {
  const location = useLocation();
  const isSignIn = location.pathname === '/auth/signin';

  return (
    <main>
      <section className={clsx('section', styles.auth)}>
        <div className={clsx('container', styles.container)}>
          <div className={styles.wrapper}>
            <Outlet />
            <AuthHelpText isSignIn={isSignIn} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
