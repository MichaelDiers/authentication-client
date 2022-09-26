export function Password() {
  return (
    <>
      <input className='form-element' type='password' id='password' name='password' required={true} placeholder=' '></input>
      <label className='form-element' htmlFor='password' >Password</label>
    </>
  );
}