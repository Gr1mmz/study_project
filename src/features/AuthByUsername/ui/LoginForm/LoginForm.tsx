import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        id="login"
        label="Логин"
        type="text"
        className={cls.input}
      />
      <Input id="password" label="Пароль" type="text" className={cls.input} />
      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};