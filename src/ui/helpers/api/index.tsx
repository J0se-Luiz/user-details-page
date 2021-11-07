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
                    var request = require('request');
                    var options = {
                        'method': 'GET',
                        'url': `https://challenge-fielo.herokuapp.com/users/${dataListUsers[20].id}`,
                        'headers': {
                            'x-access-token': login?.token
                        }
                    };
                    request(options, function (error: string | undefined, response: { body: any; }) {
                        if (error) throw new Error(error);
                        // var PerfilUser = JSON.parse(response.body)
                         const perfil = JSON.parse(response.body);

                         console.log("....... perfil",perfil)
                    });
                    // <<<   // retorna o perfil


                      // retorna  as activities
                    // var requesta = require('request');
                    // var optionsa = {
                    //     'method': 'GET',
                    //     'url': `https://challenge-fielo.herokuapp.com/users/${dataListUsers[20].id}/activities`,
                    //     'headers': {
                    //         'x-access-token': login?.token
                    //     }
                    // };
                    // requesta(optionsa, function (error: string | undefined, response: { body: any; }) {
                    //     if (error) throw new Error(error);
                    //   const activities = JSON.parse(response.body);

                    //   console.log("........activities", activities)
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
                      const program = JSON.parse(response.body);

                      console.log(".......program", program)
                    });
//  <<< retorna  os programas


//  retorna  os nivel dos programas
                    // var requestpp = require('request');
                    // var optionspp = {
                    //     'method': 'GET',
                    //     'url': `https://challenge-fielo.herokuapp.com/programs/86d5780f-38e2-4926-b4fe-518c5fd36b03/levels`,
                    //     'headers': {
                    //         'x-access-token': login?.token
                    //     }
                    // };

                    // requestpp(optionspp, function (error: string | undefined, response: { body: any; }) {
                    //     if (error) throw new Error(error);
                    //    const lvlprogram = JSON.parse(response.body)

                    //    console.log("......lvlprogram", lvlprogram)
                    // });
// <<<<< retorna  os nivel dos programas


// retorna o nivel do user
                    var requestl = require('request');
                    var optionsl = {
                        'method': 'GET',
                        'url': `https://challenge-fielo.herokuapp.com/levels/620be362-27a8-4531-8694-f314b03c169g`,
                        'headers': {
                            'x-access-token': login?.token
                        }
                    };
                    requestl(optionsl, function (error: string | undefined, response: { body: any; }) {
                        if (error) throw new Error(error);
                        const lvlUser = JSON.parse(response.body);

                        console.log(".......lvluser", lvlUser)
                    });

// <<<<retorna o nivel do user

                }
            });
        }
    })

}



// export const getInforUser = (login: { token: any; }, idUser: any) => {


//     // aqiiiiiiiiiiiiiiiiiiiiiiii

//     // retorna o perfil
//     var request = require('request');
//     var options = {
//         'method': 'GET',
//         'url': `https://challenge-fielo.herokuapp.com/users/${idUser}`,
//         'headers': {
//             'x-access-token': login?.token
//         }
//     };
//     request(options, function (error: string | undefined, response: { body: any; }) {
//         if (error) throw new Error(error);
//         // var PerfilUser = JSON.parse(response.body)
//          const perfil = JSON.parse(response.body);

//          console.log("....... perfil",perfil)
//     });
//     // <<<   // retorna o perfil


//       // retorna  as activities
//     var requesta = require('request');
//     var optionsa = {
//         'method': 'GET',
//         'url': `https://challenge-fielo.herokuapp.com/users/${idUser}/activities`,
//         'headers': {
//             'x-access-token': login?.token
//         }
//     };
//     requesta(optionsa, function (error: string | undefined, response: { body: any; }) {
//         if (error) throw new Error(error);
//       const activities = JSON.parse(response.body);

//       console.log("........activities", activities)
//     });
// // <<<< retorna  as activities 


// //  retorna  os programas 
//     var requestp = require('request');
//     var optionsp = {
//         'method': 'GET',
//         'url': `https://challenge-fielo.herokuapp.com/programs/86d5780f-38e2-4926-b4fe-518c5fd36b03`,
//         'headers': {
//             'x-access-token': login?.token
//         }
//     };
//     requestp(optionsp, function (error: string | undefined, response: { body: any; }) {
//         if (error) throw new Error(error);
//       const program = JSON.parse(response.body);

//       console.log(".......program", program)
//     });
// //  <<< retorna  os programas


// //  retorna  os nivel dos programas
//     var requestpp = require('request');
//     var optionspp = {
//         'method': 'GET',
//         'url': `https://challenge-fielo.herokuapp.com/programs/86d5780f-38e2-4926-b4fe-518c5fd36b03/levels`,
//         'headers': {
//             'x-access-token': login?.token
//         }
//     };

//     requestpp(optionspp, function (error: string | undefined, response: { body: any; }) {
//         if (error) throw new Error(error);
//        const lvlprogram = JSON.parse(response.body)

//        console.log("......lvlprogram", lvlprogram)
//     });
// // <<<<< retorna  os nivel dos programas


// // retorna o nivel do user
//     var requestl = require('request');
//     var optionsl = {
//         'method': 'GET',
//         'url': `https://challenge-fielo.herokuapp.com/levels/620be362-27a8-4531-8694-f314b03c169g`,
//         'headers': {
//             'x-access-token': login?.token
//         }
//     };
//     requestl(optionsl, function (error: string | undefined, response: { body: any; }) {
//         if (error) throw new Error(error);
//         const lvlUser = JSON.parse(response.body);

//         console.log(".......lvluser", lvlUser)
//     });

// // <<<<retorna o nivel do user

// }
