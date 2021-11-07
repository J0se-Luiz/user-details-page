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
                    const dataListUsers = JSON.parse(responseListUsers.body)

                    dataListUsers.sort((a: { balance: { points: number; }; }, b: { balance: { points: number; }; }) => {
                        if (a.balance.points > b.balance.points) {
                            return -1
                        } else {
                            return true
                        }
                    })
                    //  console.log("dentro da api....",dataListUsers); // console.log
                    setDataListUsers(dataListUsers);

// aqiiiiiiiiiiiiiiiiiiiiiiii

                    // retorna o perfil
                    // var request = require('request');
                    // var options = {
                    //     'method': 'GET',
                    //     'url': `https://challenge-fielo.herokuapp.com/users/${dataListUsers[0].id}`,
                    //     'headers': {
                    //         'x-access-token': login?.token
                    //     }
                    // };
                    // request(options, function (error: string | undefined, response: { body: any; }) {
                    //     if (error) throw new Error(error);
                    //     // var PerfilUser = JSON.parse(response.body)
                    //     console.log(JSON.parse(response.body));
                    // });
                    // <<<   // retorna o perfil


                      // retorna  as activities
                    // var requesta = require('request');
                    // var optionsa = {
                    //     'method': 'GET',
                    //     'url': `https://challenge-fielo.herokuapp.com/users/${dataListUsers[0].id}/activities`,
                    //     'headers': {
                    //         'x-access-token': login?.token
                    //     }
                    // };
                    // requesta(optionsa, function (error: string | undefined, response: { body: any; }) {
                    //     if (error) throw new Error(error);
                    //     console.log(JSON.parse(response.body));
                    // });
  // <<<< retorna  as activities 


   //  retorna  os programas 
                    var requestp = require('request');
                    var optionsp = {
                        'method': 'GET',
                        'url': `https://challenge-fielo.herokuapp.com/programs/86d5780f-38e2-4926-b4fe-518c5fd36b03`,
                        'headers': {
                            'x-access-token': login?.token
                        }
                    };
                    requestp(optionsp, function (error: string | undefined, response: { body: any; }) {
                        if (error) throw new Error(error);
                        console.log(JSON.parse(response.body));
                    });
//  <<< retorna  os programas


//  retorna  os nivel dos programas
                    var requestpp = require('request');
                    var optionspp = {
                        'method': 'GET',
                        'url': `https://challenge-fielo.herokuapp.com/programs/86d5780f-38e2-4926-b4fe-518c5fd36b03/levels`,
                        'headers': {
                            'x-access-token': login?.token
                        }
                    };

                    requestpp(optionspp, function (error: string | undefined, response: { body: any; }) {
                        if (error) throw new Error(error);
                        console.log(JSON.parse(response.body));
                    });
// <<<<< retorna  os nivel dos programas


// retorna o nivel do user
                    var requestl = require('request');
                    var optionsl = {
                        'method': 'GET',
                        'url': `https://challenge-fielo.herokuapp.com/levels/620be362-27a8-4531-8694-f314b03c169f`,
                        'headers': {
                            'x-access-token': login?.token
                        }
                    };
                    requestl(optionsl, function (error: string | undefined, response: { body: any; }) {
                        if (error) throw new Error(error);
                        console.log(JSON.parse(response.body));
                    });

// <<<<retorna o nivel do user

                }
            });
        }
    })

}

