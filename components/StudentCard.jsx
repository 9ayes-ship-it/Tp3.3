
import "./StudentCard.css"
import { useState } from "react";


function StudentCard(props) {
    const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  function basculerInformations() {
          setCoordonneesVisibles(!coordonneesVisibles)
                                                    }
  const ville = props.ville ? props.ville : 'Ville non spécifiée';
  
  return (
    <div className='StudentCard'>
   
      <img src={props.image} alt="Student" />
      <h1>{props.prenom} {props.nom}</h1>
      <p>Email: {props.email}</p>
      <p>Tel: {props.tel}</p>
      <p>Filière: {props.filiere}</p>
      <p>Groupe: {props.groupe}</p>
      <p>Ville: {ville}</p>
      <p>Année: {props.annee}</p>
      {coordonneesVisibles && (
        <div className="coordonnees">
          <p>Email: {props.email}</p>
          <p>Tel: {props.tel}</p>
          
        </div>
      )}
      <button onClick={props.onContacter}>Contacter</button>
      <button onClick={props.onSupprimer}>Supprimer</button>
      <button onClick={props.onModifier}>Modifier</button>
      
       

      <button onClick={basculerInformations}>
        {coordonneesVisibles ? 'Masquer les informations' : 'Afficher les informations'} 
      </button>
      
    </div>

  );

}



export default StudentCard;
