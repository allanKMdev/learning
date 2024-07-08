
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCharacters } from 'https://rickandmortyapi.com/api/character';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchAllCharacters = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
      setFilteredCharacters(data);
    };

    fetchAllCharacters();
  }, []);

  useEffect(() => {
    const filteredResults = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(filteredResults);
  }, [searchTerm, characters]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <input
        type="text"
        placeholder="Search characters by name..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full max-w-md p-2 rounded-md shadow-sm mb-4"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCharacters.map((character) => (
          <Link to={`/character/${character.id}`} key={character.id}>
            <div className="bg-white p-4 rounded-md shadow-md">
              <img
                src={character.image}
                alt={character.name}
                className="rounded-md mb-2"
              />
              <p className="text-xl font-semibold">{character.name}</p>
              <p className="text-gray-600">{character.species}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
