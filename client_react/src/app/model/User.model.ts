export interface IAuthUser {
    email: string;
    password: string;
}

export interface IUser {
    email?: string;
    token?: string;
    password?: string;
    _id?: string;
    image: string;
    username?: string;
}


export interface ILocation {
    location: string;
    lat: string;
    lng: string;
}

export interface IEvents {
    _id: string;
    title: string;
    image: string;
    dateTime: string;
    description: string;
    participants: IUser[];
    location: ILocation;
    createdAt: string;
    updatedAt: string;
    user: IUser
}