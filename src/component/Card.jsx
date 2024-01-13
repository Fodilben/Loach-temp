const Card = ({ text, number }) => {
  return (
    <div className="w-36 w-max-36  bg-slate-400  p-4 rounded-lg">
      <p className=" text-center text-purple-700 font-bold text-3xl">
        {number}
      </p>
      <p className=" text-white mt-2">{text}</p>
    </div>
  );
};
export default Card;
