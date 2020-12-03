import React, { useState, useEffect } from 'react';
import { UserCard } from '../';
import { useParams } from 'react-router-dom';

const URL = '/users.json';

function User() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setError] = useState(false);
  console.log(`numer id to: ${id}`);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        const filteredUser = data.results.filter((user) => user.id === id);
        setUser(filteredUser);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(true);
        setIsLoaded(false);
      });
  }, [id]);

  return (
    <div className='section section__users'>
      {console.log(`filtered user ${user}`)}
      {isLoaded && <p>Loading data</p>}
      {hasError && <p>Error occurred</p>}
      {user ? (
        <UserCard
          key={user.id}
          name={user.name.first}
          surname={user.name.last}
          city={user.location.city}
          country={user.location.country}
          phone={user.cell}
          photo={user.picture.medium}
          id={id}
        />
      ) : (
        <p>Data is not ready</p>
      )}
    </div>
  );
}

export default User;
