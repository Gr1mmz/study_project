import { FC, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
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
          <Route path={'/about'} element={<AboutPage/>} />
          <Route path={'/'} element={<MainPage/>} />
        </Routes>
      </Suspense>
      
    </div>
  )
};

export default App;