
type CreateProps = {
    avatar: string,
    name: string,
    login: string,
    bio: string,
    location: string,
};

export const initialCreateProps: CreateProps = {
    avatar: '',
    name: '',
    login: '',
    bio: '',
    location: '',
};

export const reducer = (state: CreateProps): CreateProps => {
    return { ...state };
}
