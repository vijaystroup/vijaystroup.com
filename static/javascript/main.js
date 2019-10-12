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

    function cur_dir()
    {
        let path = document.querySelectorAll("#path");
        try
        {
            path = path[path.length - 1].innerHTML.split('/')[1].slice(0, -1);
        }
        catch(err)
        {
            if (err.name === 'TypeError') // this is okay since we can't slice '/' for the home dir
            {
                path = '~'
            }
            else
            {
                console.log(err);
            }
        }

        return path;
    }

    function command_line_event (event)
    {
        if (event.keyCode === 13)
        {
            // settings
            const command = input.value.split(' ');
            const command_prefix = command[0];
            const command_suffix = command[1];
            event.preventDefault();
            $('input').prop('disabled', true);

            // check if valid_cmds
            if (valid_cmds.includes(command_prefix))
            {
                if (command_prefix === valid_cmds[0]) // clear
                {
                    $(".content").empty();
                }
                else if (command_prefix === valid_cmds[1]) // ls
                {
                    console.log('ls');
                    // get current directory
                    // list all files/directores in that directory
                }                
                else if (command_prefix === valid_cmds[2]) // cd
                {
                    path = cur_dir();

                    if (command_suffix == undefined)
                    {
                        path = '~';
                    }
                    else if (command_suffix === '.')
                    {
                        if (path === '~'){}
                        else
                        {
                            path = '~/' + path;
                        }
                        
                    }
                    else if (command_suffix === '..')
                    {
                        if (path === '~'){}
                        else
                        {
                            path = file_tree[path].PARENT_DIR
                        }
                    }
                    else
                    {
                        try
                        {
                            check_if_dir = file_tree[path][command_suffix]
                            if (check_if_dir === 'DIR')
                            {
                                path = '~/' + command_suffix;
                            }
                            else
                            {
                                path = '~/' + cur_dir();
                                throw new Error('Not a directory.');
                            }
                        }
                        catch(err)
                        {
                            console.log('no listings');
                        }
                    }
                }
                else if (command_prefix === valid_cmds[3]) // cat
                {
                    console.log('cat');
                    // get current directory
                    // display file if present in directory
                }
                else if (command_prefix === valid_cmds[4]) // help
                {
                    console.log('help');
                    $('.content').append('<pre>' + help_text);
                }
            }
            else
            {
                console.log('not valid')
            }

            // add new contents
            $('.content').append('<hr/>');
            if (command_prefix === '')
            {
                $('.content').append('<p class="terminal" id="path">guest@vijaystroup:' + cur_dir() + '$');
            }
            else
            {
                $('.content').append('<p class="terminal" id="path">guest@vijaystroup:' + path + '$');
            }
            $('.content').append('<input type="text" class="terminal" id="command-line">');

            // add event listener to new input and focus it
            input = document.querySelectorAll("#command-line:last-child")[0];
            input.addEventListener('keypress', command_line_event);
            $(input).focus();
        }
    }
});
