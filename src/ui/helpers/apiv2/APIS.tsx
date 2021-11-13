
export const API_LOGIN = {
    'method': 'POST',
    'url': 'https://challenge-fielo.herokuapp.com/auth',
    'headers': {
        'x-app-id': 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCh7uxHjWd1CyRgPD4XHcIPKiDb'
    }
};

export const API_GET_USERS = (loginToken: string) => {
    const GET_USERS = {
        'method': 'GET',
        'url': 'https://challenge-fielo.herokuapp.com/users',
        'headers': {
            'x-access-token': loginToken
        }
    };

    return GET_USERS
}

export const API_PERFIL = (idUser: string, loginToken: string) => {
    const PERFIL = {
        'method': 'GET',
        'url': `https://challenge-fielo.herokuapp.com/users/${idUser}`,
        'headers': {
            'x-access-token': loginToken
        }
    };
    return PERFIL
}


export const API_PROGRAM = (perfilProgramId: string, loginToken: string) => {
    const PROGRAM = {
        'method': 'GET',
        'url': `https://challenge-fielo.herokuapp.com/programs/${perfilProgramId}`,
        'headers': {
            'x-access-token': loginToken
        }
    };
    return PROGRAM
}


export const API_LEVEL_USER = (perfilLevelId: string, loginToken: string) => {
    const LEVEL_USER = {
        'method': 'GET',
        'url': `https://challenge-fielo.herokuapp.com/levels/${perfilLevelId}`,
        'headers': {
            'x-access-token': loginToken
        }
    };
    return LEVEL_USER
}

export const API_ACTIVITIES = (idUser: string, loginToken: string) => {
    const ACTIVITIES = {
        'method': 'GET',
        'url': `https://challenge-fielo.herokuapp.com/users/${idUser}/activities`,
        'headers': {
            'x-access-token': loginToken
        }
    };
    return ACTIVITIES
}
