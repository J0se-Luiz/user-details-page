import { SetStateAction } from "react";

export const userLogin = (
    setDataLogin: { (value: SetStateAction<{ login: { auth: boolean; token: string; }; dataListUsers: undefined; loading: boolean; }>): void; (arg0: any): void; },
    dataLogin: { login: { auth: boolean; token: string; }; dataListUsers: undefined; loading: boolean; }

) => {
    setDataLogin({ ...dataLogin, loading: true });
    const request = require('request');
    const options = {
        'method': 'POST',
        'url': 'https://challenge-fielo.herokuapp.com/auth',
        'headers': {
            'x-app-id': 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCh7uxHjWd1CyRgPD4XHcIPKiDb'
        }
    };

    request(options, function (error: string | undefined, response: { body: any; }) {

        // if (error) throw new Error(error);
        try {
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
                    // if (erroruser) throw new Error(erroruser);
                    try {

                        if (responseListUsers.body) {
                            const dataListUsers = JSON.parse(responseListUsers.body)

                            dataListUsers.sort((a: { balance: { points: number; }; }, b: { balance: { points: number; }; }) => {
                                if (a.balance.points > b.balance.points) {
                                    return -1
                                } else {
                                    return true
                                }
                            })
                            //  console.log("lista dos usuarios....",dataListUsers); // console.log
                            setDataLogin({ ...dataLogin, login: login, dataListUsers: dataListUsers, loading: false });
                        };
                    } catch {
                        alert(`Failed trying to list users... >>> =..( <<< something wrong is not right hehehe, try again later. ${error}`);
                        setDataLogin({ ...dataLogin, loading: false });
                    }
                });
            };
        } catch {
            alert(`Sign In failed...  >>> =..( <<< something wrong is not right hehehe, try again later. ${error}`);
            setDataLogin({ ...dataLogin, loading: false });
        }
    });
};

export const getInforUser = (token: any, idUser: any, dataUserInfor: any,
    setDataUserInfor: (arg0: any) => void) => {

    setDataUserInfor({ ...dataUserInfor, loading: true });

    if (dataUserInfor?.userInfor?.user?.id && idUser === dataUserInfor.userInfor.user.id) {
        setDataUserInfor({ ...dataUserInfor, userInfor: undefined });
        return
    }

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
        // if (error) throw new Error(error);
        try {

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
                                    'url': `https://challenge-fielo.herokuapp.com/users/${perfil.id}/activities`,
                                    'headers': {
                                        'x-access-token': token
                                    }
                                };
                                // console.log("................ID QUE TA PASSANDO PARA A API DE ACTIVITIES, A API TA RETORNANDO SEMPRE AS MESMAS 7 ACTIVIES...........", perfil.id)

                                requesta(optionsa, function (error: string | undefined, response: { body: any; }) {
                                    if (error) throw new Error(error);
                                    if (response.body) {
                                        const activities = JSON.parse(response.body);

                                        activities.sort((a: { date: number; }, b: { date: number; }) => {
                                            if (a.date > b.date) {
                                                return -1
                                            } else {
                                                return true
                                            }
                                        })
                                        //  console.log("........activities...", activities);

                                        setDataUserInfor({ ...dataUserInfor, userInfor: { user: perfil, userProgram: program, userLevel: userLevel, userActivities: activities }, loading: false })
                                    }
                                }); // <<<< retorna  as activities 
                            };
                        });  // <<<<retorna o nivel do user
                    };
                });  //   <<< retorna o program 
            };
        } catch {
            alert(`failed while trying to fetch user information... >>> =..( <<< something wrong is not right hehehe, try again later. ${error}`);
            setDataUserInfor({ ...dataUserInfor, loading: false });
        }
    }); // <<<  retorna o perfil
}
