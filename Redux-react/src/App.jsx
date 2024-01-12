import React from 'react';
import { fetchData } from './utils/redux/action';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector(storeData => storeData.user);

  const handleFetchData = () => {
    dispatch(fetchData());
  };

  return (
    <>
      <button onClick={handleFetchData}>GET DATA</button>

      {users.map((e, i) => (
        <fieldset key={e.id}>
          <legend>{e.username}</legend>
          <h1>{e.name}</h1>
          <h1>{e.email}</h1>
        </fieldset>
      ))}
    </>
  );
};

export default App;