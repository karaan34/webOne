
export class User {
    _id?: string;
    firstName: string;
    lastName: string;
    active: boolean;
    team?: Team;
    employee?: boolean;
}

export class Team {
    _id?: string;
    name: string;
    active: boolean;
}

export const Users: User[] = [
    {firstName: "Ayushi", lastName: "Agarwal", _id: "ayushi.agrawal@iicorporate.com", employee: false, team: {name: "Intern", active: true}, active: true},
    {firstName: "Tina", lastName: "V", _id: "tina.v@iicorporate.com", employee: false, team: {name: "Intern", active: true}, active: true},
    {firstName: "Karaan", lastName: "Nannda", _id: "karaan.nannda@iicorporate.com", team: {name: "Compass", active: true}, active: true},
    {firstName: "Pavan", lastName: "Agarwal", _id: "pavan.agrawal@iicorporate.com", employee: true, team: {name: "Crothall", active: true}, active: true},
    {firstName: "Gayatri", lastName: "Kannan", _id: "gayatri.kannan@iicorporate.com", employee: true, team: {name: "Cycligent", active: true}, active: true},
    {firstName: "Asha", lastName: "SK", _id: "asha.sk@iicorporate.com", employee: true, team: {name: "HR", active: true}, active: true},
    {firstName: "Isha", lastName: "Begum", _id: "isha.begum@iicorporate.com", employee: true, team: {name: "Compass", active: true}, active: true},
    {firstName: "Bala", lastName: "Murugan", _id: "bala.murugan@iicorporate.com", employee: true, team: {name: "Release", active: true}, active: true},
    {firstName: "Vinod", lastName: "Biradar", _id: "vinod.biradar@iicorporate.com", employee: true, team: {name: "Release", active: true}, active: false},
    {firstName: "AP", lastName: "Arun", _id: "arun.ap@iicorporate.com", employee: true, team: {name: "CVR CADE", active: true}, active: true},
    {firstName: "Praveen", lastName: "Saktivel", _id: "praveen.saktivel@iicorporate.com", employee: true, team: {name: "CVR CADE", active: true}, active: true},
    {firstName: "Richa", lastName: "Khare", _id: "richa.khare@iicorporate.com", employee: true, team: {name: "Crothall", active: true}, active: true},
    {firstName: "Aalapi", lastName: "Bhave", _id: "aalapi.bhave@iicorporate.com", team: {name: "Compass", active: true}, active: true},
    {firstName: "Maitri", lastName: "Badai", _id: "martri.badai@iicorporate.com", team: {name: "Compass", active: true}, active: true},
    {firstName: "Ivan", lastName: "Nelson", _id: "ivan.nelson@iicorporate.com", team: {name: "Crothall", active: true}, active: true},
    {firstName: "Murali", lastName: "Chandrababu", _id: "muralidhar@iicorporate.com", employee: true, team: {name: "Crothall", active: true}, active: true},
    {firstName: "Siva", lastName: "Kumar", _id: "siva.kumar@iicorporate.com", employee: true, team: {name: "Compass", active: true}, active: true},
    {firstName: "Ammu", lastName: "Dinakar", _id: "ammu.dinakar@iicorporate.com", employee: true, team: {name: "Cycligent", active: true}, active: false},
    {firstName: "Hasitha", lastName: "Gunasinghe", _id: "hasitha.gunasinghe@iicorporate.com", employee: true, team: {name: "Compass", active: true}, active: true},
    {firstName: "Srividya", lastName: "Nadig", _id: "srividya.nadig@iicorporate.com", employee: true, team: {name: "Crothall", active: true}, active: true},
    {firstName: "Anis", lastName: "Shikalgar", _id: "anis.shikalgar@iicorporate.com", employee: true, team: {name: "Compass", active: true}, active: true},
];

export const Teams: Team[] = [
    {name: "Crothall", active: true},
    {name: "Compass", active: true},
    {name: "CVR CADE", active: true},
    {name: "Cycligent", active: true},
    {name: "HR", active: true},
    {name: "Management", active: false},
    {name: "Intern", active: true},
    {name: "Release", active: true}
];