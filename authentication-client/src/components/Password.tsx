import { ChangeEvent } from 'react';

export function Password({
  password,
  passwordRepeat,
  onPasswordChange,
  onPasswordRepeatChange,
  repeat = false,
  minLength = 8,
  maxLength = 248,
}: {
  password: string,
  passwordRepeat?: string,
  onPasswordChange: (value: string) => void,
  onPasswordRepeatChange?: (value: string) => void,
  repeat?: boolean,
  minLength?: number,
  maxLength?: number,
}) {
  return (
    <>
      <input
        className='form-element'
        type='password'
        id='password'
        name='password'
        required={true}
        placeholder=' '
        value={password}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onPasswordChange(event.target.value)}
        minLength={minLength}
        maxLength={maxLength}
      ></input>
      <label
        className='form-element'
        htmlFor='password'
      >Password</label>
      {
        repeat && onPasswordRepeatChange
          ? (
            <>
              <input
                className='form-element'
                type='password'
                id='passwordRepeat'
                name='passwordRepeat'
                required={true}
                placeholder=' '
                value={passwordRepeat}
                onChange={(event: ChangeEvent<HTMLInputElement>) => onPasswordRepeatChange(event.target.value)}
              ></input>
              <label
                className='form-element'
                htmlFor='passwordRepeat'
              >Repeat Password</label>
            </>
          )
          : <></>
      }
    </>
  );
}