import React, { useState, useEffect } from 'react';
import { UserCard } from '../';
import { useParams } from 'react-router-dom';

const URL = '/users.json';

function User() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setError] = useState(false);

  const uploadUser = async () => {
    try {
      setIsLoaded(true);
      const response = await fetch(URL);
      if (response) {
        const data = await response.json();
        const filteredUser = data.results.filter(
          (user) => user.id === parseInt(id, 10)
        );
        setUser(filteredUser[0]);
      } else {
        throw setError(true);
      }
    } catch (error) {
      console.log(error);
    }
    return setIsLoaded(false);
  };

  useEffect(() => {
    uploadUser();
  }, []);

  return (
    <div className='section section__users'>
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
