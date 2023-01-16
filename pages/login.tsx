import React, { useState, useRef } from 'react';
import Link from 'next/link';
import styles from '../styles/Login.module.css';

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleSubmitForm = () => {};

  return (
    <div className={styles.login}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Connexion</h2>
        <form className={styles.form} onSubmit={handleSubmitForm}>
          <div className={styles.element}>
            <label className={styles.label} htmlFor='loginEmail'>
              Email
            </label>
            <input className={styles.input} type='email' id='loginEmail' />
          </div>
          <div className={styles.element}>
            <label className={styles.label} htmlFor='loginPassword'>
              Mot de passe
            </label>
            <input
              className={styles.input}
              type='password'
              id='loginPassword'
            />
          </div>
          <div className={styles.checkbox}>
            <input
              className={styles.checkboxInput}
              type='checkbox'
              name='checkbox'
              id='checkbox'
            />
            <label className={styles.checkboxLabel} htmlFor='checkbox'>
              Rester connecté(e)
            </label>
          </div>

          <button className={styles.submit} type='submit'>
            Valider
          </button>
          <Link href='/password/forgot' className={styles.forget}>
            Mot de passe oublié ?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
