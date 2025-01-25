import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { ref, onValue, push, update, remove } from "firebase/database";
import { auth, db } from "../Firebase";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Add a CSS file for styling

const Home = () => {
  const [students, setStudents] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    grade: "",
    email: "",
    phone: "",
    address: "",
    guardian: "",
    school: "",
    marks: "",
    hobbies: "",
    goals: "",
    achievements: "",
  });
  const [currentId, setCurrentId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const studentRef = ref(db, "students");
    onValue(studentRef, (snapshot) => {
      setStudents(snapshot.val() || {});
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddOrEdit = () => {
    const studentRef = currentId
      ? ref(db, `students/${currentId}`)
      : ref(db, "students");

    if (currentId) {
      update(studentRef, formData);
    } else {
      push(studentRef, formData);
    }
    setFormData({
      name: "",
      age: "",
      grade: "",
      email: "",
      phone: "",
      address: "",
      guardian: "",
      school: "",
      marks: "",
      hobbies: "",
      goals: "",
      achievements: "",
    });
    setCurrentId("");
  };

  const handleDelete = (id) => {
    remove(ref(db, `students/${id}`));
  };

  const handleLogout = () => {
    signOut(auth);
    navigate("/");
  };

  return (
    <div className="home-container flex">
      <h2 className="header">Student Management</h2>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
      <div className="form-container">
        <h3>{currentId ? "Edit Student" : "Add Student"}</h3>
        <div className="form">
          {Object.keys(formData).map((key) => (
            <input
              key={key}
              type="text"
              name={key}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              value={formData[key]}
              onChange={handleInputChange}
            />
          ))}
        </div>
        <button className="submit-btn" onClick={handleAddOrEdit}>
          {currentId ? "Update" : "Add"} Student
        </button>
      </div>
      <div className="student-list flex flex-wrap">
        {Object.keys(students).map((id) => (
          <div className="student-card" key={id}>
            <h4>{students[id].name}</h4>
            <p>Age: {students[id].age}</p>
            <p>Grade: {students[id].grade}</p>
            <p>Email: {students[id].email}</p>
            <p>Phone: {students[id].phone}</p>
            <p>Address: {students[id].address}</p>
            <p>Guardian: {students[id].guardian}</p>
            <p>School: {students[id].school}</p>
            <p>Marks: {students[id].marks}</p>
            <p>Hobbies: {students[id].hobbies}</p>
            <p>Goals: {students[id].goals}</p>
            <p>Achievements: {students[id].achievements}</p>
            <button onClick={() => setCurrentId(id)}>Edit</button>
            <button className="delete-btn" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
