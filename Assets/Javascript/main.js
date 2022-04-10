var dateNow = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var hourNow = moment().format('h:mm:ss a');

var interval = setInterval(function() {
    var momentNow = moment();
    $('#dateNow').html(momentNow.format('YYYY MMMM DD') + ' '
                        + momentNow.format('dddd')
                         .substring(0,3).toUpperCase());
    $('#dateNow').html(dateNow + " " + momentNow.format('HH:mm:ss A'));
  }, 100);