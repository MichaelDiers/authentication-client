import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Email } from '../../components/Email';

export function ForgotPassword() {
  return (
    <>
      <h1>Forgot Password</h1>
      <form className='form'>
        <Email />
        <Button text='Request Link' />
        <div className='links-tupple'>
          <Link className='underline' to='/sign-up'>Create Account</Link>
          <Link className='underline' to='/sign-in'>Sign In</Link>
        </div>
      </form>
    </>
  );
}