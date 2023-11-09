export default class Times{
    protected name:string | undefined
    protected flag:string|undefined
    protected championYear: number | undefined
    
    constructor(name: string, flag: string, championYear:number) {
        this.name = name;
        this.flag = flag;
        this.championYear = championYear;
    }

    get getName() {
        return this.name;
    }

    get getFlag() {
        return this.flag;
    }

    get getChampionYear() {
        return this.championYear;
    }
}