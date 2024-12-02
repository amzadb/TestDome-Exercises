function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    var date = new Date(userDate);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    return "" + year + month + day;    
}
  
console.log(formatDate("12/31/2014"));