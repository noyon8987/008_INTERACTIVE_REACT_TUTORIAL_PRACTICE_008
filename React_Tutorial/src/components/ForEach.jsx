import "../style.css";

const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

const person = [];
people.forEach((p) => {person.push(<li>{p}</li>)});

export default function ForEach() {
    return (
        <>
        <h1>People Profession List</h1>
        {person}
        </>
    )
}