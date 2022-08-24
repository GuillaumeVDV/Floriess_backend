const dates = [];

module.exports = class Date{
    constructor(day, start, end) {
        this.day = day;
        this.start = start;
        this.end = end;
    }

    addDate(){
        dates.push(this);
    }

    static getDates(){
        return dates;
    }

}