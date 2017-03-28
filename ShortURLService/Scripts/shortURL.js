﻿/// <reference path="jquery-2.1.0.min.js" />

function requestShortUrl(longUrl, requestUrl, resultSelector, outputSelector) {
    $('#_preloader').show();
    $.ajax({
        url: requestUrl,
        dataType: "json",
        async: true,
        jsonp: false,
        type: "POST",
        data: {
            longUrl: longUrl,
            ts: new Date().getTime()

        },
        error: function (xhr, textStatus, errorThrown) {
            alert("Error: " + errorThrown);
            $(resultSelector).append(errorThrown);
            $('#_preloader').fadeOut(2000);
        },
        success: function (data) {
            $(resultSelector).text("");
            if (data.status == true) {
                $(resultSelector).append('<a href="' + data.url.ShortUrl + '" target="_blank">' + data.url.ShortUrl + '</a>');
            } else {
                $(resultSelector).append(data.message);
            }
            $(outputSelector).slideDown('slow');
            $('#_preloader').fadeOut(2000);
        }
    });
}
function clear() {

    $('#LongUrl').val('');
}