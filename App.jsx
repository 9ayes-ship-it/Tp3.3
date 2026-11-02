import './App.css';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import { useState } from "react";
import StudentCard from "./components/StudentCard.jsx";
import studentImage from './assets/kais.jpg';
import { Counter } from './components/counter.jsx';

function App() {
   const [searchTerm, setSearchTerm] = useState("");

  const [students, setStudents] = useState([
    {
      nom: 'Kais',
      prenom: 'Salem',
      email: 'asdas@gmail.com',
      tel: '+216 56 444 199',
      filiere: 'Informatique',
      groupe: 'G1',
      ville: 'Tunis',
      annee: 2026,
      image: studentImage
    },
    {
      nom: 'Doe',
      prenom: 'John',
      email: 'john.doe@gmail.com',
      tel: '+216 00 000 000',
      filiere: 'GLSI',
      groupe: 'G1',
      ville: 'Tunis',
      annee: 2024,
      image: studentImage
    }
  ]);
 
const filteredStudents = students.filter(student => 
  student.filiere.toLowerCase().includes(searchTerm.toLowerCase())
);
  function ajouterEtudiant() {

    const newStudent = {
      nom: 'Mohamed',
      prenom: 'ALI',
      email: 'mohamed.ali@gmail.com',
      tel: '+216 00 000 000',
      filiere: 'LCE',
      groupe: 'G1',
      ville: 'Tunis',
      annee: 2024,
      image: studentImage

    }

    
    setStudents([...students, newStudent]);
  }
  function modifierEtudiant(index) {
    const nouveauPrenom = prompt("Entrez le nouveau prénom de l'étudiant:", students[index].prenom);
   const nouveauNom = prompt("Entrez le nouveau nom de l'étudiant:", students[index].nom);

    if (nouveauPrenom !== null) {
      const updatedStudents = [...students];
      updatedStudents[index].prenom = nouveauPrenom;
      updatedStudents[index].nom = nouveauNom;
      setStudents(updatedStudents);
    }
  }
  return (
    <>
      <header className="App-header">
        <Header />
        <Navbar />  <div className='actions'>
        <button onClick={ajouterEtudiant}>Ajouter un étudiant</button>
        <input type="text" placeholder="Rechercher une filière..." onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      </header>

      <div className='container'>
        {filteredStudents.map(student => (
          <StudentCard
            key={student.email}
            prenom={student.prenom}
            nom={student.nom}
            email={student.email}
            tel={student.tel}
            filiere={student.filiere}
            groupe={student.groupe}
            ville={student.ville}
            annee={student.annee}
            image={student.image}

            onContacter={() => console.log("Contacter", student.email)}
            onSupprimer={() => {
              console.log("Supprimer", student.email);
              setStudents(students.filter((s, i) => i !== index));
            }}
            onModifier={() => modifierEtudiant(index)}
          />
        ))}
      </div>

     

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;