//Variables for moment.js current time
var dateNow = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var hourNow = moment().format('h:mm:ss a');

var interval = setInterval(function() {
    var momentNow = moment();
    $('#dateNow').html(momentNow.format('YYYY MMMM DD') + ' '
                        + momentNow.format('dddd')
                         .substring(0,3).toUpperCase());
    $('#dateNow').html(dateNow + " " + momentNow.format('HH:mm:ss A'));
}, 100);

//Variables for time
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");
var sixPm = $("#18pm");
var sevenPm = $("#19pm");
var eightPm = $("#20pm");
