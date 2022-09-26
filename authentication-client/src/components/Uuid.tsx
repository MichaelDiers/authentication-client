export function Uuid() {
  return (
    <>
      <input className='form-element' type='text' id='uuid' name='uuid' required={true} placeholder=' '></input>
      <label className='form-element' htmlFor='uud'>Reset Key</label>
    </>
  );
}