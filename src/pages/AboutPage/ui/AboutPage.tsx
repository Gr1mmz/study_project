import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss'

const AboutPage: FC = () => {
  const {t} = useTranslation('about');
  return (
    <div>
      {t('О сайте')}
    </div>
  )
};

export default AboutPage;