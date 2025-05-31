import "../style.css";

const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

const chemist = people.filter((p) => p.profession === "chemist");

const mapChemist = chemist.map((p) => (
  <ul key={p.id}>
    <li>{p.name}</li>
    <li>{p.profession}</li>
  </ul>
));

export default function Filter() {
  return (
    <>
      <h1>Chemist Profession List</h1>

      {/* {chemist.map((p)=>(
        <ul key={p.id}>
        <li>{p.name}</li>
        <li>{p.profession}</li>
        </ul>
        ))} */}

      {mapChemist}
    </>
  );
}
