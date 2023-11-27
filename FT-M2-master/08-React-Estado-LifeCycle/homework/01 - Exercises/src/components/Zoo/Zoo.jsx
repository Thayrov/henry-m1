import React, {useEffect} from 'react';
import Animals from '../Animals/Animals';
import Species from '../Species/Species';
import styledZoo from './Zoo.module.css';

export default function Zoo() {
  const [zoo, setZoo] = React.useState({
    zooName: '',
    animals: [],
    species: [],
    allAnimals: [],
  });

  React.useEffect(() => {
    fetch('http://localhost:3001/zoo')
      .then(res => res.json())
      .then(data =>
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
        }),
      )
      .catch(error => console.log(error));
  });

  const handleSpecies = e => {};
  const handleAllSpecies = () => {};

  const handleInputChange = e => setZoo({...zoo, zooName: e.target.value});
  return (
    <div>
      <label>Zoo Name:</label>
      <input type='text' value={zoo.zooName} onChange={handleInputChange} />
      <h1>{zoo.zooName}</h1>

      <Species
        species={zoo.species}
        handleSpecies={handleSpecies}
        handleAllSpecies={handleAllSpecies}
      />

      <Animals animals={zoo.animals} />
    </div>
  );
}
