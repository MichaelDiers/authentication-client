// https://www.youtube.com/watch?v=cxm5bCCa9OA
import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Email } from '../../components/Email';
import { Password } from '../../components/Password';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email, password);
  }

  return (
    <>
      <h1>Sign In</h1>
      <form
        className='form'
        onSubmit={onSubmit}
      >
        <Email
          email={email}
          onChange={(value: string) => setEmail(value)}
        />
        <Password
          password={password}
          onPasswordChange={(value: string) => setPassword(value)} />
        <Button text='Sign In' />
        <div className='links-tupple'>
          <Link
            className='underline'
            to='/sign-up'
          >Create Account</Link>
          <Link
            className='underline'
            to='/forgot-password'
          >Forgot Password?</Link>
        </div>
      </form>
    </>
  );
}
