function timeObject(str) {

  var unix;

  if (isNaN(str)) {

    unix = Date.parse(str);
  }
  else {
    unix = parseInt(str)
  }

  var obj = {};
  if (!unix) {

    obj = {
      'unix': null,
      'natural': null
    };
    return obj;

  }
  else {

    var date = new Date(unix);
    var month = [];

    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    obj.unix = unix / (1000);
    obj.natural = month[date.getUTCMonth()] + " " + date.getUTCDate() + ", " + date.getUTCFullYear();

    return obj;

  }
}

module.exports = timeObject;
