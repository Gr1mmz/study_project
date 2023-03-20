import { useCallback, useState } from 'react';

import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const authData = useSelector(getUserAuthData);
  const [openAuthModal, setOpenAuthModal] = useState<boolean>(false);

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const onCloseModal = useCallback(() => {
    setOpenAuthModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setOpenAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
          <Button theme={ButtonTheme.CLEAR} onClick={onLogout}>
            {t('Выйти')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <Button theme={ButtonTheme.CLEAR} onClick={onOpenModal}>
          {t('Войти')}
        </Button>
        <LoginModal isOpen={openAuthModal} onClose={onCloseModal} />
      </div>
    </div>
  );
};