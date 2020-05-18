export interface IUser {
    _id?: string;
    username: string;
    email: string;
    password?: string;
    image?: string;
    token?: string;
    verifyAccount?: boolean;
    onlineStatus?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IJwtToken {
    _id: string
    email: string
    image: string
    onLineStatus: boolean
    username: string
}