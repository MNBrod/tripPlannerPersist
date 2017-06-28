'use strict';
/* global $ tripModule */
$(tripModule.load);
$(function() {

  // $.ajax({
  //   type: 'GET',
  //   url: '/api/days'
  // })
  // .then((days) => {
  //   console.log(days);
  //   for (var i = 0; i < days.length; i++) {
  //     $('.day-buttons').append(`<button data=${i} class="btn btn-circle day-btn">${i+1}</button>`)
  //   }
  //   $('#day-add').next().toggleClass('current-day');
  // // var today = dayModule.create(days[1]);
  // // console.log(today);
  // // var hotelProm = $.ajax({
  // //   method: 'GET',
  // //   url: `/api/days/${today.number}/hotels`
  // // })
  // // var actiProm = $.ajax({
  // //   method: 'GET',
  // //   url: `/api/days/${today.number}/activities`
  // // })
  // // var restProm = $.ajax({
  // //   method: 'GET',
  // //   url: `/api/days/${today.number}/restaurants`
  // // })
  // // Promise.all([hotelProm, actiProm, restProm])
  // // .then((arr) => {
  // //   for (let i = 0; i < arr[1].length; i++) {
  // //     today.addAttraction(arr[1][i]);
  // //   }
  // // })
  // // // for (let j = 0; j < )
  // })
  // .catch(console.error)
})

