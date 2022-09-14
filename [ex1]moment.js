// moment 호출
const moment = require("moment");

console.log("today", moment().format("YYYY-MM-DD"));
console.log("tomorrow", moment().add(1,"day").format("YYYY-MM-DD"));
