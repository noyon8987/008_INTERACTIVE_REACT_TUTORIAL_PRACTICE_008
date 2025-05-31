import "../style.css";

const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

const listItem = people.map((p) => <li>{p}</li>);

export default function Map() {
  return (
    <>
      <h1>People Profession List</h1>
      <ul>{listItem}</ul>
    </>
  );
}
