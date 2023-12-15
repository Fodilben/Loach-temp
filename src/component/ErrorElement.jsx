import { useNavigation } from "react-router-dom";
const ErrorElement = () => {
  const err = useNavigation();
  console.log(err);
  return <div className=" text-3xl font-bold">there was an err</div>;
};
export default ErrorElement;
