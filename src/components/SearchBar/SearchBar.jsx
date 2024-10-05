import { useState } from "react";
import { toast } from "react-hot-toast";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit, onClear }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === "") {
      toast.error("Please enter a search term");
      return;
    }

    if (input.trim().length < 3) {
      toast.error("Search term is too short");
      return;
    }

    onSubmit(input);
  };

  const handleClear = () => {
    setInput("");
    onClear();
  };

  return (
    <header className={css.component}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Search images and photos"
          autoFocus
        />
        <button type="submit" className={css.button}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        {input && (
          <button
            type="button"
            className={css.clearButton}
            onClick={handleClear}
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
        )}
      </form>
    </header>
  );
};

export default SearchBar;
