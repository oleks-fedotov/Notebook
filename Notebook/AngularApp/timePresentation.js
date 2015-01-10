'use strict';

app.filter("timePresentation", function () {
    function checkIfToday(date) {
        var today = new Date();
        return (date.getDate() == today.getDate()
        && date.getMonth() == today.getMonth()
        && date.getFullYear() == today.getFullYear());
    }

    function presentTime(date) {
        return date.toLocaleTimeString("uk", { hour: "2-digit", minute: "2-digit" });
    }

    function presentDate(date) {
        return date.toLocaleDateString("uk");
    }

    return function (date) {
        debugger;
        var d = (date instanceof Date) ? date : new Date(parseInt(date.substr(6)));
        return checkIfToday(d) ? presentTime(d) : presentDate(d);

    }
});