import React, { useState } from 'react';
import { userLogin } from './ui/helpers/api';
import GoToGitHub from './ui/components/atoms/GoToGitHub'
import Loading from './ui/components/atoms/Loading';
import Login from './ui/components/templates/Login';
import DetailsUser from './ui/components/templates/DetailsUser';
import Header from './ui/components/organisms/Header';

function App() {
  const [dataLogin, setDataLogin] = useState({
    login: { auth: false, token: "" },
    dataListUsers: undefined,
    loading: 'no'
  });

  return (
    <React.StrictMode>
      <Header onClick={() => setDataLogin({
        login: { auth: false, token: "" },
        dataListUsers: undefined,
        loading: 'no'
      })} auth={dataLogin.login.auth} />
      {!dataLogin.dataListUsers && <Login onClick={() => {
        userLogin(
          setDataLogin,
          dataLogin
        )
      }} />}
      <Loading loading={dataLogin.loading} />
      {dataLogin.dataListUsers && <DetailsUser dataLogin={dataLogin} />}
      <GoToGitHub />
    </React.StrictMode>
  );
}

export default App;
