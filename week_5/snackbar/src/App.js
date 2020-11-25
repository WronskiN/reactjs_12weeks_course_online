import React, { useState } from 'react';
import './App.css';

import Button from './components/Button';
import { Snackbar } from './components/Snackbar';

function App() {
  const [dispaySnackbar, setDisplaySnackbar] = useState(false);

  const handleDisplaySnackbar = () => setDisplaySnackbar(!dispaySnackbar);

  const handleCloseBtn = () => setDisplaySnackbar(false);

  return (
    <div className='App'>
      <Button
        buttonContent='Open snackbar'
        handleClick={handleDisplaySnackbar}
      />
      <Snackbar
        snackbarStatus={dispaySnackbar}
        content='This is a success message!'
        duration={5000}
        handleClose={handleCloseBtn}
        handleClick={handleDisplaySnackbar}
      />
    </div>
  );
}

export default App;
