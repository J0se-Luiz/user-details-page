import React, { useState } from 'react';
import { userLogin } from './ui/helpers/api';
import DetailsUser from './ui/components/templates/DetailsUser'
import Header from './ui/components/molecules/Header';

function App() {
  const [login, setLogin] = useState({ auth: false, token: "" }); // da para seta no LocalStorage
  const [dataListUsers, setDataListUsers] = useState(undefined); // da para usa useEffect 
  console.log(".........", login) // console.log
  return (
    <React.StrictMode>
      <Header />
      {!dataListUsers && <button onClick={() => {
        userLogin(
          setLogin,
          setDataListUsers
        )
      }}>test</button>}

      {dataListUsers && <DetailsUser />}
    </React.StrictMode>
  );
}

export default App;
