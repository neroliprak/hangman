"use client";
import React, { useState, useEffect } from "react";
import Mot from "@/types/data";
import AfficheMot from "@/components/affiche-mot/AfficheMot";
import InsertMot from "@/components/insert-mot/InsertMot";
import Abandon from "@/components/abandon/Abandon";

// --------- Récupération des données de l'API
async function getData(): Promise<Mot> {
  // Appel à l'API en method POST
  const res = await fetch(
    "https://node-hangman-api-production.up.railway.app/",
    {
      method: "POST",
    }
  );
  if (!res.ok) {
    throw new Error("Erreur data, l'API ne fonctionne pas");
  }
  return res.json();
}

export default function Home() {
  const [data, setData] = useState<Mot | null>(null);
  // État pour suivre les lettres insérées
  const [insertedLetters, setInsertedLetters] = useState<string[]>([]);
  const [victory, setVictory] = useState(false);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    getData()
      .then(setData)
      .catch(() => {
        // Si il y a une erreur de récupération de l'API, boleen à true pour dire qu'il y a un problème
        setApiError(true);
      });
  }, []);

  const handleLetterInsert = (letter: string) => {
    // Mettre à jour les lettres insérées avec les anciens
    setInsertedLetters([...insertedLetters, letter]);
  };

  useEffect(() => {
    // Vérifie que les données soient bien présent
    if (data) {
      // Contient l'ensemble des lettres du bon mots
      const allLettersInserted = data.word
        .split("")
        // Compare les lettres du vraie mot avec ceux insérer par l'utilisateur grâce à la function every
        .every((letter) => insertedLetters.includes(letter));

      // Met l'état victoire à true, par useState
      if (allLettersInserted) {
        setVictory(true);
      }
    }
    // À chaque changement, il vérifie si on a gagner ou non
  }, [data, insertedLetters]);

  // Message d'erreur si l'API ne fonctionne pas
  if (apiError) {
    return (
      <div className="gestion-error">
        <p>
          L'API ne fonctionne pas, vous pouvez revenir plus tard. Ou bien
          regarder ce <a href="https://neroliprak.fr/">portfolio</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="allComponent">
      {/* Si l'API est bien chargé, alors on affiche le mot à deviner */}
      {data && (
        <div className="wrap-affiche">
          <div className="classAbandon">
            <Abandon data={data} />
          </div>
          <div>
            <h1>Le jeu du pendu</h1>
            <AfficheMot
              data={data}
              insertedLetters={insertedLetters}
            ></AfficheMot>
          </div>
        </div>
      )}
      {/* Si l'utilisateur n'a pas encore gagné, alors il peut insérer */}
      {!victory && (
        <InsertMot
          data={data}
          onLetterInsert={handleLetterInsert}
          maxEssai={5}
        ></InsertMot>
      )}
    </div>
  );
}
