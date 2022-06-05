export class experience {
    id?: number;
    position: string;
    description: string;
    dateStart: string;
    dateEnd: string;
    
    constructor(position: string,description: string,dateStart: string,dateEnd: string) {
        this.position=position;
        this.description = description;
        this.dateStart = dateStart;
        this.dateEnd=dateEnd;
        
    }
}