import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
      <RotatingLines color="#b43583" height={64} width={64} />
    </div>
  );
};

export default Loader;
