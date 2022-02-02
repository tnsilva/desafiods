
type LoginProps = {
    user: string,
    password: string,
    isButtonDisabled: boolean,
    helperText: string,
    isError: boolean,
};

export const initialLoginProps: LoginProps = {
    user: '',
    password: '',
    isButtonDisabled: true,
    helperText: '',
    isError: false
};

type Action = { type: setUser, payload: string }
    | { type: setPassword, payload: string }
    | { type: 'setIsButtonDisabled', payload: boolean }
    | { type: 'loginSuccess', payload: string }
    | { type: 'loginFailed', payload: string }
    | { type: 'setIsError', payload: boolean };

export const reducer = (state: LoginProps, action: Action): LoginProps => {
    switch (action.type) {
        case 'setUser':
            return {
                ...state,
                user: action.payload
            };
        case 'setPassword':
            return {
                ...state,
                password: action.payload
            };
        case 'setIsButtonDisabled':
            return {
                ...state,
                isButtonDisabled: action.payload
            };
        case 'loginSuccess':
            return {
                ...state,
                helperText: action.payload,
                isError: false
            };
        case 'loginFailed':
            return {
                ...state,
                helperText: action.payload,
                isError: true
            };
        case 'setIsError':
            return {
                ...state,
                isError: action.payload
            };
    }
}
