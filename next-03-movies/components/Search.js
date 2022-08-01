import styles from "@/styles/Search.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

const Search = () => {
  const [text, setText] = useState("");
  const router = useRouter();

  const manageSearching = (e) => {
    e.preventDefault();
    router.push(`/movies/search?text=${text}`);
    setText("")
  };

  return (
    <div className={styles.buscar}>
      <form onSubmit={manageSearching}>
        <div className="mb-3">
          <input
            placeholder="Search for doggy"
            className="form-control"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
