import Header from "../Components/Header/Header";
import HomeSection_1 from "../Components/HomeSection/HomeSection_1";
import SelectService from "../Components/SelectServices/SelectSecvice";
import CardList from "../Components/CardList/CardList";
import { useState } from "react";
import IconCard from "../Components/IconCard/IconCard";

const Home = () => {
  const [changeText, SetChangeText] = useState(false);
  const handleSwipe = (value) => {
    SetChangeText(value);
  };
  return (
    <>
      <Header />
      <HomeSection_1 />
      <SelectService handleChange={handleSwipe} />
      <CardList changeText={changeText} />
      <IconCard/>
    </>
  );
};

export default Home;
