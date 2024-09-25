import { useState } from "react";
{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [word, setWord] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
  };
    console.log(process.env);

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
