export function Password({ repeat = false }: { repeat?: boolean }) {
  return (
    <>
      <input className='form-element' type='password' id='password' name='password' required={true} placeholder=' '></input>
      <label className='form-element' htmlFor='password' >Password</label>
      {
        repeat
          ? (
            <>
              <input className='form-element' type='password' id='passwordRepeat' name='passwordRepeat' required={true} placeholder=' '></input>
              <label className='form-element' htmlFor='passwordRepeat' >Repeat Password</label>
            </>
          )
          : <></>
      }
    </>
  );
}