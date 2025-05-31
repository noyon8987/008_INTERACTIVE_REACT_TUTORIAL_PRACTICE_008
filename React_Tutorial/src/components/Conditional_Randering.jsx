import "../style.css";

function Item({ name, isPacked }) {
  //Control Section
  // <li>{isPacked ? name + "✅" : name}</li>
  const isCheckMark = isPacked && "✅";

  //View Section
  return (
    <li>
      {name}
      {isCheckMark}
    </li>
  );
}

export default function Conditional_Randering() {
  return (
    <>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="1. Space suit" />
        <Item isPacked={true} name="2. Helmet with a golden leaf" />
        <Item isPacked={false} name="3. Photo of Tam" />
      </ul>
    </>
  );
}
