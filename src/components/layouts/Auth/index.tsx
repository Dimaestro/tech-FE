import { Outlet, useLocation } from 'react-router';
import AuthHelpText from '@common/AuthHelpText';

import styles from './style.module.scss';

const AuthLayout = () => {
  const location = useLocation();
  const isSignIn = location.pathname === '/auth/signin';

  return (
    <main>
      <section className={`section ${styles.auth}`}>
        <div className={`container ${styles.container}`}>
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
