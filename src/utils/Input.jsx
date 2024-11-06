export default function Input({ title, id, type, ...props }) {
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input type={type} name={id} id={id} {...props} />
    </>
  );
}
