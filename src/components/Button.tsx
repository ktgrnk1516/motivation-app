const Button = ({ props }: any) => {
  return (
    <div>
      {/* ボタン */}
      <button
        className="w-full mt-8 h-10 bg-black cursor-pointer text-white"
        onClick={props}
      >
        ◯
      </button>
      {/* ボタン */}
    </div>
  );
};
export default Button;
