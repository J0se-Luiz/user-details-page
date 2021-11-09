import { SetStateAction } from "react";

export const userLogin = (
    setDataLogin: { (value: SetStateAction<{ login: { auth: boolean; token: string; }; dataListUsers: undefined; loading: string; }>): void; (arg0: any): void; },
    dataLogin: { login: { auth: boolean; token: string; }; dataListUsers: undefined; loading: string; }

) => {

    setDataLogin({ ...dataLogin, loading: 'yes' });
    const request = require('request');

    const API_LOGIN = {
        'method': 'POST',
        'url': 'https://challenge-fielo.herokuapp.com/auth',
        'headers': {
            'x-app-id': 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCh7uxHjWd1CyRgPD4XHcIPKiDb'
        }
    };

    request(API_LOGIN, function (error: string | undefined, response: { body: any; }) {

        try {
            if (response.body) {
                const login = JSON.parse(response.body);

                const API_GET_USERS = {
                    'method': 'GET',
                    'url': 'https://challenge-fielo.herokuapp.com/users',
                    'headers': {
                        'x-access-token': login?.token
                    }
                };

                request(API_GET_USERS, function (erroruser: string | undefined, responseListUsers: { body: any; }) {
                    try {

                        if (responseListUsers.body) {

                            const dataListUsers = JSON.parse(responseListUsers.body)

                            dataListUsers.sort((a: { balance: { points: number; }; }, b: { balance: { points: number; }; }) => {
                                if (a.balance.points > b.balance.points) {
                                    return -1
                                } else {
                                    return true
                                }
                            });

                            setDataLogin({ ...dataLogin, login: login, dataListUsers: dataListUsers, loading: 'no' });
                        };
                    } catch {
                        alert(`Failed trying to list users... >>> =..( <<< something wrong is not right hehehe, try again later. ${error}`);
                        setDataLogin({ ...dataLogin, loading: 'no' });
                    }
                });
            };
        } catch {
            alert(`Sign In failed...  >>> =..( <<< something wrong is not right hehehe, try again later. ${error}`);
            setDataLogin({ ...dataLogin, loading: 'no' });
        }
    });
};

export const getInforUser = (token: any, idUser: any, dataUserInfor: any,
    setDataUserInfor: (arg0: any) => void) => {

    setDataUserInfor({ ...dataUserInfor, loading: 'yes' });

    if (dataUserInfor?.userInfor?.user?.id && idUser === dataUserInfor.userInfor.user.id) {
        setDataUserInfor({ ...dataUserInfor, userInfor: undefined });
        return
    }

    // retorna o perfil
    const request = require('request');
    const API_PERFIL = {
        'method': 'GET',
        'url': `https://challenge-fielo.herokuapp.com/users/${idUser}`,
        'headers': {
            'x-access-token': token
        }
    };
    request(API_PERFIL, function (error: string | undefined, response: { body: any; }) {

        try {
            if (response.body) {
                const perfil = JSON.parse(response.body);
              
                //   retorna  o programa do user
                const API_PROGRAM = {
                    'method': 'GET',
                    'url': `https://challenge-fielo.herokuapp.com/programs/${perfil.programId}`,
                    'headers': {
                        'x-access-token': token
                    }
                };

                request(API_PROGRAM, function (error: string | undefined, response: { body: any; }) {                   
                    if (response.body) {

                        const program = JSON.parse(response.body);
                       
                        // retorna o nivel do user                        
                        const API_LEVEL_USER = {
                            'method': 'GET',
                            'url': `https://challenge-fielo.herokuapp.com/levels/${perfil.levelId}`,
                            'headers': {
                                'x-access-token': token
                            }
                        };

                        request(API_LEVEL_USER, function (error: string | undefined, response: { body: any; }) {

                            if (response.body) {                                
                                const userLevel = JSON.parse(response.body);
                                
                                // // retorna  as activities                                
                                const API_ACTIVITIES = {
                                    'method': 'GET',
                                    'url': `https://challenge-fielo.herokuapp.com/users/${idUser}/activities`,
                                    'headers': {
                                        'x-access-token': token
                                    }
                                };                               

                                request(API_ACTIVITIES, function (error: string | undefined, response: { body: any; }) {
                                    
                                    if (response.body) {
                                        const activities = JSON.parse(response.body);

                                        activities.sort((a: { date: number; }, b: { date: number; }) => {
                                            if (a.date > b.date) {
                                                return -1
                                            } else {
                                                return true
                                            }
                                        })

                                        setDataUserInfor({ ...dataUserInfor, userInfor: { user: perfil, userProgram: program, userLevel: userLevel, userActivities: activities }, loading: 'no' })
                                    }
                                }); // <<<< retorna  as activities 
                            };
                        });  // <<<<retorna o nivel do user
                    };
                });  //   <<< retorna o program 
            };
        } catch {
            alert(`failed while trying to fetch user information... >>> =..( <<< something wrong is not right hehehe, try again later. ${error}`);
            setDataUserInfor({ ...dataUserInfor, loading: 'no' });
        }
    }); // <<<  retorna o perfil
}
