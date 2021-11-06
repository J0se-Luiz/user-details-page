import React, { useState } from 'react';
import { userLogin } from './ui/helpers/api';
import DetailsUser from './ui/components/templates/DetailsUser'

function App() {
  const [login, setLogin] = useState({ auth: false, token: "" }); // da para seta no LocalStorage
  const [dataListUsers, setDataListUsers] = useState(undefined); // da para usa useEffect p
  console.log(".........", login)
  return (
    <React.StrictMode>
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
