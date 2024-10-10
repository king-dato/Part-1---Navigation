import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Logo from "../../components/Logo/Logo";
import LoginForm from "../../components/LoginForm/LoginFormContainer";
import Notification from "../../shared/Notification/Notification";
import getError from "../../redux/error/errorSelectors";
import Loader from "../../shared/Loader/Loader";
import getLoader from "../../redux/loader/loaderSelectors";
import styles from "../LoginregistrationPage/LoginRegistrationPage-module.css";

const LoginPage = () => {
  const isError = useSelector(getError);
  const loader = useSelector(getLoader);

  return (
    <>
      <div className={styles.bgContainer}>
        <div className={headerHide}>
          <Header />
        </div>
        <div className={styles.logoHide}>
          <Logo />
        </div>
        <div className={styles.pageContainer}>
          <LoginForm />
          {loader && <Loader />}
        </div>
      </div>
      <Notification>
        {isError ? (
          <span>Логин или пароль введен неверно</span>
        ) : (
          <span>Регистрация прошла успешно</span>
        )}
      </Notification>
    </>
  );
};

export default LoginPage;
