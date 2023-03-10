import { FC } from 'react';

import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Counter />
      <BugButton />
      {t('Главная страница')}
    </div>
  );
};

export default MainPage;