import React, { useState, useEffect } from 'react';
import firebaseDb from "../Firebase"; // Ensure firebaseDb is configured correctly
import AddOrEditStudent from './addOrEditStudent'; // Importing AddOrEditStudent component

const StudentInfo = () => {
    const [currentId, setCurrentId] = useState('');
    const [studentObjects, setStudentObjects] = useState({});

    // Fetch student data from Firebase
    useEffect(() => {
        firebaseDb.ref('Student').on('value', (snapshot) => {
            if (snapshot.val() !== null) {
                setStudentObjects(snapshot.val());
            } else {
                setStudentObjects({});
            }
        });
    }, []);

    // Add or edit student data
    const addOrEdit = (obj) => {
        if (currentId === '') {
            // Add new student
            firebaseDb.ref('Student').push(obj, (err) => {
                if (err) console.log(err);
                else setCurrentId('');
            });
        } else {
            // Update existing student
            firebaseDb.ref(`Student/${currentId}`).set(obj, (err) => {
                if (err) console.log(err);
                else setCurrentId('');
            });
        }
    };

    // Delete student data
    const onDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this record?')) {
            firebaseDb.ref(`Student/${id}`).remove((err) => {
                if (err) console.log(err);
                else setCurrentId('');
            });
        }
    };

    return (
        <div className="card">
            <div className="card-body pb-0">
                <div className="card">
                    <div className="card-header main-search dash-search">
                        <h3>Student Information Details</h3>
                    </div>
                </div>
                <div className="row">
                    {/* Render AddOrEditStudent form */}
                    <div className="col-12 col-md-6">
                        <AddOrEditStudent {...{ addOrEdit, currentId, studentObjects }} />
                    </div>

                    {/* Render student list */}
                    <div className="col-12 col-md-6">
                        <div className="card">
                            <div className="card-header">Student Management</div>
                            <div className="card-body position-relative">
                                <div className="table-responsive cnstr-record product-tbl">
                                    <table className="table table-bordered heading-hvr">
                                        <thead>
                                            <tr>
                                                <th>Full Name</th>
                                                <th>Roll No</th>
                                                <th>Subject</th>
                                                <th>Class</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Object.keys(studentObjects).map((key) => (
                                                <tr key={key}>
                                                    <td>{studentObjects[key].FullName}</td>
                                                    <td>{studentObjects[key].RollNo}</td>
                                                    <td>{studentObjects[key].Subject}</td>
                                                    <td>{studentObjects[key].Class}</td>
                                                    <td>
                                                        <button
                                                            className="btn btn-info"
                                                            onClick={() => setCurrentId(key)}
                                                        >
                                                            Edit
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="btn btn-danger"
                                                            onClick={() => onDelete(key)}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentInfo;
