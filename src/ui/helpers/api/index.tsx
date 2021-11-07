import { SetStateAction } from "react";

export const userLogin = (
    setLogin: { (value: SetStateAction<{ auth: boolean; token: string; }>): void; (arg0: any): void; },
    setDataListUsers: { (value: SetStateAction<undefined>): void; (arg0: any): void; }
    
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
            setLogin(login);

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
                    const dataListUser = JSON.parse(responseListUsers.body)
                     console.log(dataListUser); // console.log
                    setDataListUsers(dataListUser);
                }
            });
        }
    })

}

