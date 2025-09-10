export interface User {
    name: string;
    password: string; // token
    optimisedResponse: boolean;
    state: string;
}

export interface Data {
    title: string;
    description: string;
    vector: string; // vector format of "title + description"
    type: 'Constitution' | 'Indian union law' | 'state law';
}