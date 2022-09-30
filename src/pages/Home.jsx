import Popular from "../components/Popular";
import SelectedCuisine from "../components/SelectedCuisine";
import React from "react";
import InputCuisine from "../components/InputCuisine";
function Home() {
  return (
    <div>
      <SelectedCuisine input="vegetarian" perPage={3} />
      <InputCuisine />
      <Popular />
      <SelectedCuisine input="dessert" perPage={3} />
      <SelectedCuisine input="italian" perPage={4} />
    </div>
  );
}

export default Home;
