import { useRouteError } from "react-router-dom";
import magicWord from "./assets/magic_word.png";

const imgStyle = {
  width: "800px",
};

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <img src={magicWord} alt="Ah, Ah, Ah!" style={imgStyle} />
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
