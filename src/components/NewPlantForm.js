import React, { useState } from "react";


function NewPlantForm({ plants, setPlants }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  })

  const handleChange = (event) => {
    console.log(event)
    const updatedPlantPage = {
      ...formData,
        [event.target.name] : event.target.value
    }
    setFormData(updatedPlantPage)
  }

  const handleClick = () => {
    const newPlantObj= {
      "name": formData.name,
      "image": formData.image,
      "price": parseFloat(formData.price)
    }

    fetch("http://localhost:6001/plants", {
        method: "POST",
        headers:{
        "Content-Type": "application/json",
        },
      body: JSON.stringify(newPlantObj)
    },[])
        .then(res => res.json())
        .then(data => {
          setPlants([...plants, data])
          setFormData({
            name: "",
            image: "",
            price: ""
          })
          console.log(setFormData)
        })
      }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input 
        type="text" 
        name="name" 
        placeholder="Plant name" 
        onChange={handleChange}
        value={formData.name}
        />
        <input 
        type="text" 
        name="image" 
        placeholder="Image URL" 
        onChange={handleChange}
        value={formData.image}
        />
        <input 
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price" 
        onChange={handleChange}
        value={formData.price}
        />
        <button 
        type="submit"
        onClick={handleClick}
         >
          Add Plant</button>
        </form>
    </div>
  );
}

export default NewPlantForm;
