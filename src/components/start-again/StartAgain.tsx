import Button from "../button/Button";

export const StartAgain = () => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div>
      <Button onClick={handleReload} children={"Réactualiser"} />
    </div>
  );
};

export default StartAgain;
