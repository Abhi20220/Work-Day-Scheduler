//Variables for moment.js current time
var dateNow = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var hourNow = moment().format('h:mm:ss a');

//Time and Date function
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


//Function gets items from the local storage
function initPage() {

    console.log("Current Hour " + hour);
    var init9 = JSON.parse(localStorage.getItem("09:00 am"));
    nineAm.val(init9);
  
    var init10 = JSON.parse(localStorage.getItem("10:00 am"))
    tenAm.val(init10);
    
    var init11 = JSON.parse(localStorage.getItem("11:00 am"))
    elevenAm.val(init11);
    
    var init12 = JSON.parse(localStorage.getItem("12:00 pm"))
    twelvePm.val(init12);
    
    var init1 = JSON.parse(localStorage.getItem("01:00 pm"))
    onePm.val(init1);
    
    var init2 = JSON.parse(localStorage.getItem("02:00 pm"))
    twoPm.val(init2);
    
    var init3 = JSON.parse(localStorage.getItem("03:00 pm"))
    threePm.val(init3);
   
    var init4 = JSON.parse(localStorage.getItem("04:00 pm"))
    fourPm.val(init4);
    
    var init5 = JSON.parse(localStorage.getItem("05:00 pm"))
    fivePm.val(init5);
    
    var init6 = JSON.parse(localStorage.getItem("06:00 pm"))
    sixPm.val(init6);
    
    var init7 = JSON.parse(localStorage.getItem("07:00 pm"))
    sevenPm.val(init7);

    var init8 = JSON.parse(localStorage.getItem("08:00 pm"))
    eightPm.val(init8);
} 


