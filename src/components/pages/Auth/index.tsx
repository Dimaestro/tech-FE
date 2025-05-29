import { useLocation } from 'react-router-dom';
import SignIn from '@pages/Auth/components/SignIn';
import SignUp from '@pages/Auth/components/SignUp';
import AuthHelpText from '@pages/Auth/components/AuthHelpText';

import styles from './styles.module.scss';

const Auth = () => {
  const location = useLocation();
  const isSignIn = location.pathname === '/signin';

  return (
    <main>
      <section className={`section ${styles.auth}`}>
        <div className={`container ${styles.container}`}>
          <div className={styles.wrapper}>
            {isSignIn ? <SignIn /> : <SignUp />}
            <AuthHelpText isSignIn={isSignIn} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Auth;
