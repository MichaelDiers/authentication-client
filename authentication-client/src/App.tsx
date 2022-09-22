import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SignUp } from './features/sign-up/SignUp';
import { SignIn } from './features/sign-in/SignIn';

function App() {
  return (
    <HashRouter>
      <Header />
      <main>
        <Routes>
          <Route index element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
