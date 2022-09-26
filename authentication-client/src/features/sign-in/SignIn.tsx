// https://www.youtube.com/watch?v=cxm5bCCa9OA
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Email } from '../../components/Email';
import { Password } from '../../components/Password';

export function SignIn() {
  return (
    <>
      <h1>Sign In</h1>
      <form className='form'>
        <Email />
        <Password />
        <Button text='Sign In' />
        <div className='links-tupple'>
          <Link className='underline' to='/sign-up'>Create Account</Link>
          <Link className='underline' to='/forgot-password'>Forgot Password?</Link>
        </div>
      </form>
    </>
  );
}
