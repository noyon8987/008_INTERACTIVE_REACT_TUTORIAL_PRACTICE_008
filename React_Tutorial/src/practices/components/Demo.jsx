/* eslint-disable react/prop-types */
export default function Demo({onClick, num}) {
console.log(onClick());
  return (
    <div>
      <h1>{num}</h1>
    </div>
  );
}
