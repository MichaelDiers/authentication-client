import { FormEvent, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Email } from '../../components/Email';

export function ForgotPassword() {
  const { email: emailParam } = useParams();
  const [email, setEmail] = useState(emailParam || '');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email);
  }

  return (
    <>
      <h1>Forgot Password</h1>
      <form
        className='form'
        onSubmit={onSubmit}
      >
        <Email
          email={email}
          onChange={(value: string) => setEmail(value)}
        />
        <Button text='Request Link' />
        <div className='links-tupple'>
          <Link
            className='underline'
            to={`/sign-up/${email}`}
          >Create Account</Link>
          <Link
            className='underline'
            to={`/sign-in/${email}`}
          >Sign In</Link>
        </div>
      </form>
    </>
  );
}