import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SignUp } from './features/sign-up/SignUp';
import { SignIn } from './features/sign-in/SignIn';
import { ForgotPassword } from './features/forgot-password/ForgotPassword';
import { ResetPassword } from './features/reset-password/ResetPassword';

function App() {
  return (
    <div className='app'>
      <HashRouter>
        <Header />
        <main>
          <Routes>
            <Route index element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/sign-up/:email' element={<SignUp />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-in/:email' element={<SignIn />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/forgot-password/:email' element={<ForgotPassword />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path='/reset-password/:email' element={<ResetPassword />} />
            <Route path='/reset-password/:email/:uuid' element={<ResetPassword />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
