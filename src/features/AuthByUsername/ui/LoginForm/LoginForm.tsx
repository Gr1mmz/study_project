import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text, TextTheme } from 'shared/ui/Text';

import cls from './LoginForm.module.scss';
import {
  getLoginState,
} from '../../model/selectors/getLoginState/getLoginState';
import {
  loginByUsername,
} from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Войти')} />
      <Input
        id="login"
        label="Логин"
        type="text"
        value={username}
        onChange={onChangeUsername}
        className={cls.input}
      />
      <Input
        id="password"
        label="Пароль"
        type="text"
        value={password}
        onChange={onChangePassword}
        className={cls.input}
      />
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});