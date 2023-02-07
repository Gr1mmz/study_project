import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss'

const MainPage: FC = ({}) => {
  const {t} = useTranslation();

  return (
    <div>
      {t('Главная страница')}
    </div>
  )
};

export default MainPage;