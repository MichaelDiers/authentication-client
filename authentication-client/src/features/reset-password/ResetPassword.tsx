import { FormEvent, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Email } from '../../components/Email';
import { Password } from '../../components/Password';
import { Uuid } from '../../components/Uuid';

export function ResetPassword() {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState('');
  const [uuid, setUuid] = useState(searchParams.get('uuid') || '');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email, uuid, password, passwordRepeat);
  }

  return (
    <>
      <h1>Reset Password</h1>
      <form
        className='form'
        onSubmit={onSubmit}
      >
        <Email
          email={email}
          onChange={(value: string) => setEmail(value)}
        />
        <Uuid
          uuid={uuid}
          onChange={(value: string) => setUuid(value)}
        />
        <Password
          repeat={true}
          password={password}
          passwordRepeat={passwordRepeat}
          onPasswordChange={(value: string) => setPassword(value)}
          onPasswordRepeatChange={(value: string) => setPasswordRepeat(value)}
        />
        <Button text='Reset Password' />
        <div className='links-tupple'>
          <Link
            className='underline'
            to='/sign-up'
          >Create Account</Link>
          <Link
            className='underline'
            to='/sign-in'
          >Sign In</Link>
        </div>
      </form>
    </>
  );
}