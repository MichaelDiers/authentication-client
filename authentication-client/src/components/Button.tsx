export function Button({ text }: { text: string }) {
  return (
    <>
      <button
        className='button'
        type='submit'
      >{text}</button>
    </>
  );
}