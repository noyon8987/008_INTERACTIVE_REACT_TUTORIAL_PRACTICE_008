import React, { useState } from "react";

export default function Student_Add() {
  const [studentName, setStudentName] = useState("");
  const [student, setStudent] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (studentName.trim() === "") {
      return alert("Please type a valid name");
    }
    editMode ? updatedStudent() : createStudent();
  }

  function createStudent() {
    const newStudent = {
      id: Date.now() + "",
      name: student,
    };
    setStudent([...student, newStudent]);
    setStudentName("");
  }

  function handleStudentName(e) {
    setStudentName(e.target.value);
  }

  function updatedStudent(student) {
     const updateHandler = student.map((item)=>{
        if (item.id === editMode.id) {
            return {...item, name: studentName}
        }
        return updateHandler;
        setEditMode(false);
     })
  }

  function deleteHandler(studentId) {
    const deleteStudent = student.filter((item) => item.id !== studentId);
    setStudent(deleteStudent);
  }

  return (
    <div className="student-form">
      <form onSubmit={handleSubmit}>
        <input type="text" value={studentName} onChange={handleStudentName} />
        <button type="submit">
          {editMode ? "Updated Student" : "Add Student"}
        </button>
      </form>
      <br />
      <div className="student-list">
        <div className="student-name">
          <h2>All Student</h2>
          <ul>
            {student.map((student) => (
              <>
                <li key={student.id}>
                  <span>{student.name}</span>
                  <button onClick={() => {
                      editModeHandler(student);
                  }}>edit</button>
                  <button
                    onClick={() => {
                      deleteHandler(student.id);
                    }}
                  >
                    delete
                  </button>
                  <button>Add Present</button>
                  <button>Add Absent</button>
                </li>
              </>
            ))}
          </ul>
        </div>
        <br />
        <br />
        <br />
        <div className="present-student">
          <h2>Present Student</h2>
        </div>
        <br />
        <br />
        <br />
        <div className="absent-student">
          <h2>Absent Student</h2>
        </div>
      </div>
    </div>
  );
}
