$(document).ready( function()
{
    const getip_url = 'http://ip-api.com/json';

    $.get(getip_url, function (data)
        {
            $('<p class="content" id="guest-connection">').text(
                'Guest connected as ' + data.query + ' from ' + data.regionName + '.').insertBefore(
                    $('#home-from-txt'));
        }, 'json');

    $('<input class="content" id="command-line">').insertAfter($('#break-after-home-text'));
})

