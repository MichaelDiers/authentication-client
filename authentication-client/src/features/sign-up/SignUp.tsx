import { FormEvent, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Email } from '../../components/Email';
import { Password } from '../../components/Password';

export function SignUp() {
  const { email: emailParam } = useParams();

  const [email, setEmail] = useState(emailParam || '');
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
            to={`/sign-in/${email}`}
          >I have an account</Link>
        </div>
      </form>
    </>
  );
}
