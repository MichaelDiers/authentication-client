import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Email } from '../../components/Email';
import { Password } from '../../components/Password';
import { Uuid } from '../../components/Uuid';

export function ResetPassword() {
  const [searchParams, setSearchParams] = useSearchParams();
  const uuid = searchParams.get('uuid');
  return (
    <>
      <h1>Reset Password</h1>
      <form className='form'>
        <Email />
        <Uuid />
        <Password repeat={true} />
        <Button text='Reset Password' />
        <div className='links-tupple'>
          <Link className='underline' to='/sign-up'>Create Account</Link>
          <Link className='underline' to='/sign-in'>Sign In</Link>
        </div>
      </form>
    </>
  );
}