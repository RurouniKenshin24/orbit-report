export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }

    shouldShowWarning(): boolean{
        let result: boolean = false;
        let str: string = 'space debris';

        if(this.type.toLowerCase() === str){
            result = true;
        }

        return result;
    }
}
