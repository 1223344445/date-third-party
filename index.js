const { addDays } = require("date-fns");

const add_days=(days)=>{
    let date=addDays(new Date(2020,7,22),days);
    return(`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`);
}


module.exports=add_days;