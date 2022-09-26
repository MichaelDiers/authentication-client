import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Email } from '../../components/Email';
import { Password } from '../../components/Password';

export function SignUp() {
  return (
    <>
      <h1>Sign Up</h1>
      <form className='form'>
        <Email />
        <Password repeat={true} />
        <Button text='Create Account' />
        <div className='links-tupple'>
          <Link className='underline' to='/sign-in'>I have an account</Link>
        </div>
      </form>
    </>
  );
}
