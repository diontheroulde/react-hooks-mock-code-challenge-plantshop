import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')



  useEffect(() => {
    fetch( "http://localhost:6001/plants")
    .then(res => res.json())
    .then(data =>setPlants(data))
  },[])

  const filteredPlants = plants.filter(plant =>( 
    plant.name.toLowerCase().includes(search.toLowerCase())
  ))
    
  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
