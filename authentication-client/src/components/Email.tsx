export function Email() {
  return (
    <>
      <input className='form-element' type='email' id='email' name='email' required={true} placeholder=' '></input>
      <label className='form-element' htmlFor='email'>Email</label>
    </>
  );
}