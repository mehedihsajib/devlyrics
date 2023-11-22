export default function Error({ errorMessage, className }) {
  return (
    <span className={`${className} text-red-500 inline-block`}>
      {errorMessage}
    </span>
  );
}
