
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterById } from '';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const data = await fetchCharacterById(id);
      setCharacter(data);
    };

    fetchCharacter();
  }, [id]);

  if (!character) {
    return <p>Loading character...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-4 rounded-md shadow-md">
        <img src={character.image} alt={character.name} className="rounded-md mb-4" />
        <p className="text-2xl font-semibold">{character.name}</p>
        <p className="text-gray-600 mb-2">{character.species}</p>
        <p>Status: {character.status}</p>
        <p>Origin: {character.origin.name}</p>
        <p>Location: {character.location.name}</p>
      </div>
    </div>
  );
};

export default CharacterDetail;
