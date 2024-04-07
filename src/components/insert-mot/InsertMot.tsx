import React, { useState, useRef } from "react";
import "./insert-mot.css";

export const InsertMot = ({
  onLetterInsert,
}: {
  onLetterInsert: (letter: string) => void;
}) => {
  // Tableau contenant les différentes lettres insérés, initialisé à un tableau vide
  const [tabLetters, setTabLetters] = useState<string[]>([]);
  // Pour accéder à la lettre de l'input, initialisé à rien
  const inputRef = useRef<HTMLInputElement>(null);

  //   Gestion d'événement au soumission du formulaire
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    // ___Évite le rechargement de page
    event.preventDefault();
    // ___Récupère la valeur sans les espaces en trop (finalement inutile, puisque j'ai mis maxLength = {1}...)
    if (!inputRef.current || !inputRef.current.value.trim()) return;
    const value = inputRef.current.value.trim();
    if (tabLetters.includes(value)) {
      alert("La lettre a déjà été insérée");
      return;
    }
    setTabLetters((prevTabLetters) => [...prevTabLetters, value]);
    inputRef.current.value = "";
    onLetterInsert(value);
  };

  return (
    <div className="wrap-insert-mot">
      <form className="insert-mot-form" onSubmit={handleSubmit}>
        <label htmlFor="mot">Entrez une lettre :</label>
        <br />
        <input type="text" id="mot" maxLength={1} ref={inputRef} />
        <br />
        <button type="submit">Ajouter</button>
      </form>
      <p>Insertions : {tabLetters.join(", ")}</p>
    </div>
  );
};

export default InsertMot;
