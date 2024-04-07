import { useState } from "react";
import StartAgain from "../start-again/StartAgain";
import "./abandon.css";
import Mot from "@/types/data";

export const Abandon = ({ data }: { data: Mot }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className="abandon">
      <div className="abandon-wrap">
        <p>Trop dur ? </p>
        <StartAgain children={"Réactualisé"} />
        <button onClick={handleShowAnswer}>Afficher la réponse</button>
        {showAnswer && <p>La réponse est : {data.word}</p>}
      </div>
    </div>
  );
};

export default Abandon;
