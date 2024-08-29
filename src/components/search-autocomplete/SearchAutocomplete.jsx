import React, { useEffect, useState } from 'react';

function SearchAutocomplete() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function fetchUserDate() {
      try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        setSearchResults(
          data.users.filter((user) =>
            user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchUserDate();
  }, [searchTerm]);

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  function renderSearchResults() {
    if (searchResults.length === 0) {
      return null;
    }

    return (
      <div
        style={{
          width: '1fr',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
          gap: '0.5em',
        }}
      >
        {searchResults.map((user) => (
          <div
            key={user.id}
            style={{
              border: '1px solid #ccc',
              padding: '0.15em 0.25em',
              borderRadius: '5px',
            }}
          >
            <h5
              style={{ margin: '0', fontWeight: '400' }}
              onClick={(event) => setSearchTerm(event.target.innerText)}
            >
              {user.firstName}
            </h5>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ width: '800px' }}>
      <input
        style={{ marginBottom: '1em' }}
        type="text"
        placeholder="Search for users"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {renderSearchResults()}
    </div>
  );
}

export default SearchAutocomplete;
