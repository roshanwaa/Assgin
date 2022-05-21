$(function ($) {
  $('.btn').click(function () {
    $('.form-signin').toggleClass('form-signin-left');
    $('.form-signup').toggleClass('form-signup-left');
    $('.frame').toggleClass('frame-long');
    $('.signup-inactive').toggleClass('signup-active');
    $('.signin-active').toggleClass('signin-inactive');
    $('.forgot').toggleClass('forgot-left');
    $(this).removeClass('idle').addClass('active');
  });
});

$(function () {
  $('.btn-signin').click(function () {
    $('.btn-animate').toggleClass('btn-animate-grow');
    $('.welcome').toggleClass('welcome-left');
    $('.cover-photo').toggleClass('cover-photo-down');
    $('.frame').toggleClass('frame-short');
    $('.profile-photo').toggleClass('profile-photo-down');
    $('.btn-goback').toggleClass('btn-goback-up');
    $('.forgot').toggleClass('forgot-fade');
  });
});

// function onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//   console.log('Name: ' + profile.getName());
//   console.log('Image URL: ' + profile.getImageUrl());
//   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }

// function init() {
//   gapi.load('auth2', function () {
//     /* Ready. Make a call to gapi.auth2.init or some other API */
//   });
// }

function onSuccess(googleUser) {
  console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
}
function onFailure(error) {
  console.log(error);
}
function renderButton() {
  gapi.signin2.render('my-signin2', {
    scope: 'profile email',
    width: 240,
    height: 50,
    longtitle: true,
    theme: 'dark',
    onsuccess: onSuccess,
    onfailure: onFailure,
  });
}
