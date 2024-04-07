export const StartAgain = ({ children }: any) => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div>
      <button onClick={handleReload}>{children}</button>
    </div>
  );
};

export default StartAgain;
