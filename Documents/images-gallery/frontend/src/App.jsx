import { useState } from "react";
{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Header title="Images Gallery" />
      <Search />
    </div>
  );
}

export default App;
