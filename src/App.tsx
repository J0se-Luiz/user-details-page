import React, { useState } from 'react';
import { userLogin } from './ui/helpers/api';
import DetailsUser from './ui/components/templates/DetailsUser'
import Header from './ui/components/molecules/Header';

function App() {
  const [dataLogin, setLogin] = useState({
    login: { auth: false, token: "" },
    dataListUsers: undefined
  });
  
  return (
    <React.StrictMode>
      <Header />
      {!dataLogin.dataListUsers && <button onClick={() => {
        userLogin(
          setLogin,
          dataLogin

        )
      }}>LOGIN</button>}

      {dataLogin.dataListUsers && <DetailsUser dataLogin={dataLogin} />}
    </React.StrictMode>
  );
}

export default App;
