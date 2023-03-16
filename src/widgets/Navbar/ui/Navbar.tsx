import { useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Modal } from 'shared/ui/Modal/Modal';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [openAuthModal, setOpenAuthModal] = useState<boolean>(false);

  const { t } = useTranslation();

  const onToggleModal = useCallback(() => {
    setOpenAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <Button theme={ButtonTheme.CLEAR} onClick={onToggleModal}>
          {t('Войти')}
        </Button>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <Modal isOpen={openAuthModal} onClose={onToggleModal}>
          Booba
        </Modal>
      </div>
    </div>
  );
};