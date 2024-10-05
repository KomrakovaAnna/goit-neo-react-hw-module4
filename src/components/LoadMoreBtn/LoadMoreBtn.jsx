import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={css.component} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
