import { FC } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';
import './styles/index.scss';

const App: FC = ({}) => {
  const {theme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      {/* <button onClick={toggleTheme} >Theme</button> */}
      <AppRouter/>
    </div>
  )
};

export default App;