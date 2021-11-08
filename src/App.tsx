import React, { useState } from 'react';
import { userLogin } from './ui/helpers/api';
import Login from './ui/components/templates/Login';
import DetailsUser from './ui/components/templates/DetailsUser';
import Header from './ui/components/organisms/Header';

function App() {
  const [dataLogin, setLogin] = useState({
    login: { auth: false, token: "" },
    dataListUsers: undefined
  });

  return (
    <React.StrictMode>
      <Header />
      {!dataLogin.dataListUsers && <Login onClick={() => {
        userLogin(
          setLogin,
          dataLogin

        )
      }} />}

      {dataLogin.dataListUsers && <DetailsUser dataLogin={dataLogin} />}
    </React.StrictMode>
  );
}

export default App;
