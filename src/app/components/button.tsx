interface ButtonProps {
  onClick: () => {};
}

export default function Button({ onClick }: ButtonProps) {
  return (
    <>
      <div onClick={onClick}>Mini Game</div>
    </>
  );
}
