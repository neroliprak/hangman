import Button from "../button/Button";

export const StartAgain = () => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div>
      <Button onClick={handleReload} children={"Réactualisé"} />
    </div>
  );
};

export default StartAgain;
