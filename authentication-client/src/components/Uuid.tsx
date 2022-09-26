import { ChangeEvent } from 'react';

export function Uuid({
  uuid,
  onChange,
}: {
  uuid: string,
  onChange: (value: string) => void,
}) {
  return (
    <>
      <input
        className='form-element'
        type='text'
        id='uuid'
        name='uuid'
        required={true}
        placeholder=' '
        value={uuid}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
      ></input>
      <label
        className='form-element'
        htmlFor='uuid'
      >Reset Key</label>
    </>
  );
}