document.addEventListener("DOMContentLoaded", function() {
    var countryButton = document.querySelector('.country1');
    var preferencesBox = document.querySelector('.preferences-box');
    var closeIcon = document.querySelector('.close-icon');

    countryButton.addEventListener('click', function() {
        preferencesBox.style.display = 'block';
    });

    closeIcon.addEventListener('click', function() {
        preferencesBox.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == preferencesBox) {
            preferencesBox.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
var countryButton = document.getElementById('countryButton');
var preferencesBox = document.getElementById('preferencesBox');
var closeIcon = document.querySelector('.close-icon');

countryButton.addEventListener('click', function () {
preferencesBox.style.display = 'block';
});

closeIcon.addEventListener('click', function () {
preferencesBox.style.display = 'none';
});

window.addEventListener('click', function (event) {
if (event.target == preferencesBox) {
  preferencesBox.style.display = 'none';
}
});
});

