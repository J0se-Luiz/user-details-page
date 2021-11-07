import { SetStateAction } from "react";

export const userLogin = (
    setLogin: { (value: SetStateAction<{ login: { auth: boolean; token: string; }; dataListUsers: undefined; }>): void; (arg0: any): void; },
    dataLogin: { login: { auth: boolean; token: string; }; dataListUsers: undefined; }

) => {
    const request = require('request');
    const options = {
        'method': 'POST',
        'url': 'https://challenge-fielo.herokuapp.com/auth',
        'headers': {
            'x-app-id': 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCh7uxHjWd1CyRgPD4XHcIPKiDb'
        }
    };

    request(options, function (error: string | undefined, response: { body: any; }) {

        if (error) throw new Error(error);

        if (response.body) {
            const login = JSON.parse(response.body)
            const requestListUsers = require('request');
            const optionsuser = {
                'method': 'GET',
                'url': 'https://challenge-fielo.herokuapp.com/users',
                'headers': {
                    'x-access-token': login?.token
                }
            };

            requestListUsers(optionsuser, function (erroruser: string | undefined, responseListUsers: { body: any; }) {
                if (erroruser) throw new Error(erroruser);

                if (responseListUsers.body) {
                    const dataListUsers = JSON.parse(responseListUsers.body)

                    dataListUsers.sort((a: { balance: { points: number; }; }, b: { balance: { points: number; }; }) => {
                        if (a.balance.points > b.balance.points) {
                            return -1
                        } else {
                            return true
                        }
                    })
                    //  console.log("dentro da api....",dataListUsers); // console.log
                    setLogin({ ...dataLogin, login: login, dataListUsers: dataListUsers });
                };
            });
        };
    });
};

export const getInforUser = (token: any, idUser: any, dataUserInfor: any,
    setDataUserInfor: (arg0: any) => void) => {

    // retorna o perfil
    const requestPerfil = require('request');
    const optionsPerfil = {
        'method': 'GET',
        'url': `https://challenge-fielo.herokuapp.com/users/${idUser}`,
        'headers': {
            'x-access-token': token
        }
    };
    requestPerfil(optionsPerfil, function (error: string | undefined, response: { body: any; }) {
        if (error) throw new Error(error);

        if (response.body) {
            const perfil = JSON.parse(response.body);
            // console.log("....... perfil", perfil)
            // setDataUserInfor({ ...dataUserInfor, user: perfil })

            //   retorna  o programa do user
            const requestProgram = require('request');
            const optionsProgram = {
                'method': 'GET',
                'url': `https://challenge-fielo.herokuapp.com/programs/${perfil.programId}`,
                'headers': {
                    'x-access-token': token
                }
            };

            requestProgram(optionsProgram, function (error: string | undefined, response: { body: any; }) {
                if (error) throw new Error(error);

                if (response.body) {
                    const program = JSON.parse(response.body);
                    // console.log("..........program", program)
                    // setDataUserInfor({ ...dataUserInfor, user: perfil, userProgram: program })

                    // retorna o nivel do user
                    const requestLevelUser = require('request');
                    const optionsLevelUser = {
                        'method': 'GET',
                        'url': `https://challenge-fielo.herokuapp.com/levels/${perfil.levelId}`,
                        'headers': {
                            'x-access-token': token
                        }
                    };

                    requestLevelUser(optionsLevelUser, function (error: string | undefined, response: { body: any; }) {
                        if (error) throw new Error(error);

                        if (response.body) {
                            const userLevel = JSON.parse(response.body);
                            // console.log("......A API TA RETORNANDO UMA ORDEM ERRADA. userLevel", userLevel)
                            // setDataUserInfor({ ...dataUserInfor, user: perfil, userProgram: program, userLevel: userLevel })


                            // // retorna  as activities
                            var requesta = require('request');
                            var optionsa = {
                                'method': 'GET',
                                'url': `https://challenge-fielo.herokuapp.com/users/${idUser}/activities`,
                                'headers': {
                                    'x-access-token': token
                                }
                            };

                            requesta(optionsa, function (error: string | undefined, response: { body: any; }) {
                                if (error) throw new Error(error);
                                if (response.body) {
                                    const activities = JSON.parse(response.body);
                                    // console.log("........activities", activities);

                                    setDataUserInfor({ ...dataUserInfor, user: perfil, userProgram: program, userLevel: userLevel, userActivities: activities })
                                }
                            }); // <<<< retorna  as activities 
                        };
                    });  // <<<<retorna o nivel do user
                };
            });  //   <<< retorna o program 
        };
    }); // <<<  retorna o perfil












}












  //   retorna  os nivel dos programas
//   var requestpp = require('request');
//   var optionspp = {
//       'method': 'GET',
//       'url': `https://challenge-fielo.herokuapp.com/programs/86d5780f-38e2-4926-b4fe-518c5fd36b03/levels`,
//       'headers': {
//           'x-access-token': token
//       }
//   };

//   requestpp(optionspp, function (error: string | undefined, response: { body: any; }) {
//       if (error) throw new Error(error);
//       const lvlprogram = JSON.parse(response.body)

//       console.log("...........lvlprogram", lvlprogram)
//   });
  // // <<<<< retorna  os nivel dos programas