import React, { useState, useRef } from "react";
import "./insert-mot.css";
import Mot from "@/types/data";

export const InsertMot = ({
  data,
  onLetterInsert,
  maxEssai,
}: {
  data: Mot;
  onLetterInsert: (letter: string) => void;
  maxEssai: number;
}) => {
  // Tableau contenant les différentes lettres insérés, initialisé à un tableau vide
  const [tabLetters, setTabLetters] = useState<string[]>([]);
  // Pour accéder à la lettre de l'input, initialisé à rien
  const inputRef = useRef<HTMLInputElement>(null);
  // Compteur d'essai
  const [essai, setEssai] = useState(maxEssai);

  //   Gestion d'événement au soumission du formulaire
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    // ___Évite le rechargement de page
    event.preventDefault();
    // ___Récupère la valeur sans les espaces en trop (finalement inutile, puisque j'ai mis maxLength = {1}...)
    if (!inputRef.current || !inputRef.current.value.trim()) return;
    const value = inputRef.current.value.trim();
    // ___Je vérifie si les lettres insérés par l'utilisateur ne l'a pas déjà été, en regardant dans son historique (tabLetters)
    if (tabLetters.includes(value)) {
      alert("La lettre a déjà été insérée");
      return;
    }
    // Je vérifie le nombre d'essaie de l'utilisateur
    if (essai <= 0) {
      alert(`Vous avez dépassé la limite d'essai: ${maxEssai}`);
      return;
    }
    setTabLetters((prevTabLetters) => [...prevTabLetters, value]);
    inputRef.current.value = "";
    onLetterInsert(value);

    const isCorrect = isLetterCorrect(value);

    // À chaque essai de l'utilisateur, il augmente de 1, si il a bon, il ne décrémente pas
    if (!isCorrect) {
      setEssai(essai - 1);
    }
  };
  const isLetterCorrect = (letter: string) => {
    return data.word.includes(letter);
  };
  return (
    <div>
      {essai <= 0 && (
        <p className="defaite">Vous avez perdu, le mot était : {data.word}</p>
      )}
      <div className="wrap-insert-mot">
        <form className="insert-mot-form" onSubmit={handleSubmit}>
          <p className="color-red">Votre nombre d'essais restant : {essai}</p>
          <br />
          <br />
          <label htmlFor="mot">Entrez une lettre :</label>
          <br />
          <input type="text" id="mot" maxLength={1} ref={inputRef} />
          <br />
          <button type="submit">Ajouter</button>
        </form>
        <div className="wrap-idependant-letter">
          {/* Je parcours tabLetters pour afficher les lettres insérés par l'utilisateur */}
          {tabLetters.map((letter, index) => (
            <p
              key={index}
              className={`independant-letter ${
                isLetterCorrect(letter) ? "correct" : ""
              }`}
            >
              {letter}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsertMot;
