export interface IUser {
    _id?: string;
    username: string;
    email: string;
    password?: string;
    image?: string;
    onlineStatus?: string;
    createdAt?: string;
    updatedAt?: string;
}