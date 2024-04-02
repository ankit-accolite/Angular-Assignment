export interface Userdata {
    id: number;
    name: string;
    email: string;
    phone: string;
    username : string;
    address:{
        street:string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    }
    website: string;
    company: {
        name: string,
        catchPhrase: string,
        bs: string,
    }
}
