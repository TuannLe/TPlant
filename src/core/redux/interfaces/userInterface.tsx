export interface LoginInterface {
    email: string;
    password: string;
}
export interface UserInterface {
    email: string;
    password: string;
}
export interface RegisterInterface {
    email: string;
    password: string;
    username: string;
}

export interface UpdateUserInterface {
    username: string;
    address: string;
}
export interface ChangePasswordInterface {
    old_password: string;
    new_password: string;
    email: string;
}