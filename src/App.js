import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MethalodaiNewsHeader from "./Components/Header";
import NewsForm from "./Components/NewsForm";

/*{
import NewsList from "./Components/NewsList";
import NewsDetails from "./Components/NewsDetails";
import NewsEdit from "./Components/NewsEdit";
import NewsDelete from "./Components/NewsDelete";
}*/

function App() {
  return (
    <>
      <MethalodaiNewsHeader />
      <NewsForm />
    </>
  );
}
export default App;
