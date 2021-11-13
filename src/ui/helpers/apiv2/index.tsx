import { SetStateAction } from "react";
import { API_LOGIN, API_GET_USERS, API_PERFIL, API_PROGRAM, API_LEVEL_USER, API_ACTIVITIES } from './APIS'

export const userLogin = (
    setDataLogin: { (value: SetStateAction<{ login: { auth: boolean; token: string; }; dataListUsers: undefined; loading: string; }>): void; (arg0: any): void; },
    dataLogin: { login: { auth: boolean; token: string; }; dataListUsers: undefined; loading: string; }

) => {

    setDataLogin({ ...dataLogin, loading: 'yes' });
    const request = require('request');

    request(API_LOGIN, function (error: string | undefined, response: { body: any; }) {

        try {
            if (response.body) {
                const login = JSON.parse(response.body);

                request(API_GET_USERS(login?.token), function (erroruser: string | undefined, responseListUsers: { body: any; }) {
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
   
    request(API_PERFIL(idUser,token), function (error: string | undefined, response: { body: any; }) {

        try {
            if (response.body) {
                const perfil = JSON.parse(response.body);
    
                request(API_PROGRAM(perfil.programId,token), function (error: string | undefined, response: { body: any; }) {                   
                    if (response.body) {

                        const program = JSON.parse(response.body);
                       
                        // retorna o nivel do user                        
                       
                        request(API_LEVEL_USER(perfil.levelId, token), function (error: string | undefined, response: { body: any; }) {

                            if (response.body) {                                
                                const userLevel = JSON.parse(response.body);
                                
                                // // retorna  as activities      

                                request(API_ACTIVITIES(idUser, token), function (error: string | undefined, response: { body: any; }) {
                                    
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
