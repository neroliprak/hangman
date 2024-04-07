import Mot from "@/types/data";
import "./affiche-mot.css";
import StartAgain from "../start-again/StartAgain";

export const AfficheMot = ({
  data,
  insertedLetters,
}: {
  data: Mot;
  insertedLetters: string[];
}) => {
  // Contient l'ensemble des lettre correspondante
  const letters: string[] = data.word.split("");

  const nbBloc = [];
  for (let i = 0; i < letters.length; i++) {
    // Vérifie si la lettre existe bien dans mon tableau de letters
    // InsertedLetters contient l'ensemble des lettres isert par user
    const inserted = insertedLetters.includes(letters[i]);
    nbBloc.push(
      // Si il existe, alors on l'insert la bonne lettre
      <div key={i} className={`letter ${inserted ? "inserted" : ""}`}>
        {inserted ? letters[i] : ""}
      </div>
    );
  }

  const allLettersInserted = letters.every((letter) =>
    insertedLetters.includes(letter)
  );

  return (
    <div className="wrap-nb-letter">
      <div>Nombre de lettres : {letters.length}</div>
      <div className="display-nb-letter">{nbBloc}</div>
      {/* Si toutes les lettres ont été inséré, alors on affiche qu'il a fini le jeu */}
      {allLettersInserted && (
        <div className="victoire">
          <p>Bravo</p>
          <br />
          <br />
          <StartAgain />
        </div>
      )}
    </div>
  );
};

export default AfficheMot;
