import React from "react";
import AppBar from "@material-ui/core/AppBar"
import Highlights from '../components/Highlights';
import Categories from '../components/Categories';

const MainPage = () => {
  return (
    <div>
          <Highlights/>
          <Categories/>
    </div>
  );
};

export default MainPage;

