import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function Etudiant() {
    const [etudiant, setEtudiant] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/')
            .then(res => {
                console.log('Données récupérées :', res.data);
                setEtudiant(res.data);
            })
            .catch(err => console.error('Erreur lors de la récupération des données :', err));
    }, []);

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className="w-50 bg-white rounded p-3">
                <button className="btn btn-success">Add +</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {etudiant.map((data, i) => (
                            <tr key={i}>
                                <td>{data.Nom}</td>
                                <td>{data.email}</td>
                                <td>
                                    <button className="btn btn-primary">Update</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
