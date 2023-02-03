import { FC, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';
import './styles/index.scss';

const App: FC = ({}) => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <button onClick={toggleTheme} >Theme</button>
      <Suspense fallback={<div>Loading...</div>} >
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync/>} />
          <Route path={'/'} element={<MainPageAsync/>} />
        </Routes>
      </Suspense>
      
    </div>
  )
};

export default App;