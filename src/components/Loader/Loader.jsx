import { RotatingLines } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <RotatingLines color="#60a3ea" height={64} width={64} />
    </div>
  );
};

export default Loader;
