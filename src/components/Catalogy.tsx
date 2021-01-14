import { useSelector } from "react-redux";

const Catalogy: React.FC = () => {
  
  const catalog = useSelector(state => state);

  console.log(catalog)

  return (
    <h1>Hello Catalogy</h1>
  );
}

export default Catalogy;