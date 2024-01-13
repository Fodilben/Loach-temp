const Card = ({ text, number }) => {
  return (
    <div className="w-36 w-max-36  bg-slate-300  p-4 rounded-lg">
      <p className=" text-center text-primary font-bold text-3xl">{number}</p>
      <p className="  mt-2">{text}</p>
    </div>
  );
};
export default Card;
