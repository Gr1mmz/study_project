import { useCallback, useState } from 'react';

import { LoginModal } from 'features/AuthByUsername';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [openAuthModal, setOpenAuthModal] = useState<boolean>(false);

  const { t } = useTranslation();

  const onCloseModal = useCallback(() => {
    setOpenAuthModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setOpenAuthModal(true);
  }, []);

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