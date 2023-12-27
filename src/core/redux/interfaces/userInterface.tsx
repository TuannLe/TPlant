export interface LoginInterface {
    email: string;
    password: string;
}
export interface UserInterface {
    account_id: number;
    email: string;
    username: string;
    address: string | undefined;
    created_at: Date;
    otp: number | undefined;
    role: number | undefined;
    status: number | undefined;
    token: string | undefined;
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