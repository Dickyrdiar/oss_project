/* eslint-disable import/no-named-as-default */
import Footer from '../../container/Footer';
import LoginPage from '../../container/LoginPage';
import styles from '../../styles/Home.module.css';

function Login() {
  return (
    <div className={styles.container}>
      <LoginPage />
      <Footer />
    </div>
  );
}

export default Login;
