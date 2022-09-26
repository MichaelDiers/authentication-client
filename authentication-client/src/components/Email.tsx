import { ChangeEvent } from 'react';

export function Email({
  email,
  onChange,
}: {
  email: string,
  onChange: (email: string) => void,
}) {
  return (
    <>
      <input
        className='form-element'
        type='email'
        id='email'
        name='email'
        required={true}
        placeholder=' '
        value={email}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
      ></input>
      <label
        className='form-element'
        htmlFor='email'
      >Email</label>
    </>
  );
}