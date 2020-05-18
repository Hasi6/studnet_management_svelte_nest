export interface ILocation {
    location: string;
    lat: number;
    lng: number;
}

export interface IEvents {
    title: string;
    description: string;
    user: any;
    location: ILocation;
    dateTime: string;
    createdAt?: Date;
    updatedAt?: Date;
}