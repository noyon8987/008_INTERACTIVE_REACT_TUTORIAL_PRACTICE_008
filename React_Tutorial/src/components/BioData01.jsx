import "../style.css"

export default function BioData01(props) {
  const {name, email} = props;
  return (
    <>
      <div className="bioData">
        <h2>Bio Data of {name}</h2>
        <br />
        <div className="personal_information">
          <p>Email : {email}</p>
          <p>Age: {props.age}</p>
          <p>Phone: {props.phone}</p>
          <p>Github: {props.github}</p>
        </div>
        <br />
        <h2>My Skills</h2>
        <div className="my-skills">
          <ul>
            {props?.skills?.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <br />
        <h2>My Interests</h2>
        <div className="my-interests">
          <ul>
            {props?.interests?.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
