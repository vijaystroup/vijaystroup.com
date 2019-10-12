$(document).ready( function()
{
    const getip_url = 'http://ip-api.com/json';
    const valid_cmds = ['clear', 'ls', 'cd', 'cat', 'help'];

    $.get(getip_url, function (data)
        {
            $('.content').prepend('<p id="guest-connection">' + 
                'Guest connected as ' + data.query + ' from ' + data.regionName + '.'
            );
        }, 'json');

    $('.content').prepend('<pre>' + help_text);

    // init input event
    let input = document.getElementById('command-line');
    input.addEventListener('keypress', command_line_event);

    function command_line_event (event)
    {
        if (event.keyCode === 13)
        {
            event.preventDefault();
            $('input').prop('disabled', true);

            // check if valid_cmds
            if (valid_cmds.includes(input.value))
            {
                if (input.value === valid_cmds[0]) // clear
                {
                    console.log('clear');
                    $(".content").empty();
                }
                else if (input.value === valid_cmds[1]) // ls
                {
                    console.log('ls');
                }                
                else if (input.value === valid_cmds[2]) // cd
                {
                    console.log('cd');
                }
                else if (input.value === valid_cmds[3]) // cat
                {
                    console.log('cat');
                }
                else if (input.value === valid_cmds[4]) // help
                {
                    console.log('help');
                    $('.content').append('<pre>' + help_text);
                }
            }
            else
            {
                console.log('not valid')
            }

            $('.content').append('<hr/>');
            $('.content').append('<p class="terminal" id="path">guest@vijaystroup:~$');
            $('.content').append('<input type="text" class="terminal" id="command-line" autofocus>');
            input = document.querySelectorAll("#command-line:last-child")[0];
            input.addEventListener('keypress', command_line_event);
            $(input).focus();
        }
    }
});
