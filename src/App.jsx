import logo from './assets/images/logo.svg';
import { Home } from './pages/home/Home';

function App() {
  return (
    <div className="app">
    <Home />
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p className="header">Vite React Starter 💯</p>
        <p>
          Vite + React <br />
          ESLint + Prettier + Stylelint
          <br />
          Sass + Emotion + Tailwind
          <br />
          Jest + Testing Library
        </p>
      </header>
    </div>
  );
}

export default App;
