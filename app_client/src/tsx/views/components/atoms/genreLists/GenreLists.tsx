import { Link } from "react-router-dom";
import { RstGenres } from "../../../../../TestText";
import "../../../../style/components/atoms/GenreLists.css";

export const GenreLists = () => {
  return (
    <>
      <ul>
        {RstGenres.map((RstGenre) => (
          <li className="rst-lists" key={RstGenre.id}>
            <Link className="rst-links" to={RstGenre.link}>
              {RstGenre.genre}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
