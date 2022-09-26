import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Email } from '../../components/Email';
import { Password } from '../../components/Password';

export function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email, password, passwordRepeat);
  }

  return (
    <>
      <h1>Sign Up</h1>
      <form
        className='form'
        onSubmit={onSubmit}
      >
        <Email
          email={email}
          onChange={(value: string) => setEmail(value)} />
        <Password
          repeat={true}
          password={password}
          passwordRepeat={passwordRepeat}
          onPasswordChange={(value: string) => setPassword(value)}
          onPasswordRepeatChange={(value: string) => setPasswordRepeat(value)}
        />
        <Button text='Create Account' />
        <div className='links-tupple'>
          <Link
            className='underline'
            to='/sign-in'
          >I have an account</Link>
        </div>
      </form>
    </>
  );
}
