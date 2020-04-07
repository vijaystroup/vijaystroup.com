$(document).ready( function()
{
    // let users know IE does not support some modern javascript functions
    // therefore website will not work correctly for that browser
    const isIE = /*@cc_on!@*/false || !!document.documentMode;
    if (isIE)
    {
        $(".content").empty();
        const warning_node = document.createElement('h1');
        warning_node.setAttribute('id', 'ie-warning');
        document.body.appendChild(warning_node);
        warning_node.innerText = 'THIS WEBSITE DOES NOT SUPPORT INTERNET EXPLORER.\nPLEASE SWITCH TO ANOTHER BROWSER.';
        return;
    }

    // global constants
    const getip_url = 'https://ipapi.co/json/';
    const valid_cmds = ['clear', 'ls', 'cd', 'cat', 'help', 'exit'];

    $.get(getip_url, function (data)
        {
            /**
            This function is used for getting client data to display.

            */

            $('.content').prepend('<p id="guest-connection">' + 
                'Guest connected as ' + data.ip + ' from ' + data.region + '...'
            );
        }, 'json');

    // page init
    $('.content').prepend('<pre>' + help_txt);
    let path = cur_dir()

    // init input event
    let input = document.getElementById('command-line');
    input.addEventListener('keypress', command_line_event);

    document.addEventListener('mouseup', function ()
    {
        /**
        This function is used for copying highlighted text and for focusing
        the last input when clicked on the page.

        */

        // get last #command-line to focus it
        const command_lines = document.querySelectorAll("#command-line");
        const last_cmd_line = command_lines[command_lines.length - 1];

        // copy highlighted text and focus #command-line
        document.execCommand('copy');
        $(last_cmd_line).focus();
    }, true);

    document.onkeydown = function (key)
    {
         /**
        This function is for recalling previous commands like on a real terminal emulator.

        */

        if (key.keyCode == 38)
        {
            let last_cmd = document.querySelectorAll("#command-line");
            const last_input = document.querySelectorAll("#command-line:last-child")[0];
            

            last_cmd = last_cmd[last_cmd.length - 2].value;
            $(last_input).val(last_cmd);

        }
    };

    function cur_dir()
    {
        /**
        This function is used for getting what directory the client is
        currently in for a various amount of uses.

        */

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
        /**
        This function is used for handling client input to $command-line.

        */
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
                    if (command_suffix)
                    {
                        $('.content').append('<p>"'+ command_prefix + '" does not take any arguments.');
                    }
                    else
                    {
                        $(".content").empty();
                    }
                }
                else if (command_prefix === valid_cmds[1]) // ls
                {
                    if (command_suffix)
                    {
                        $('.content').append('<p>"'+ command_prefix + '" does not take any arguments.');
                    }
                    else
                    {
                        path = cur_dir();
                        $('.content').append('<hr/>');
                        for (let key in file_tree[path])
                        {
                            val = file_tree[path][key]
                            if (val === 'DIR')
                            {
                                $('.content').append('<p class="ls-out" id="ls-dir">' + key + '/');
                            }
                            else if (val.slice(-4) === '.txt')
                            {
                                $('.content').append('<p class="ls-out">' + val);
                            }
                        }

                        if (path != '~')
                        {
                            path = '~/' + path;
                        }
                    }
                }                
                else if (command_prefix === valid_cmds[2]) // cd
                {
                    if (command[2])
                    {
                        $('.content').append('<p>"'+ command_prefix + '" only takes one argument.');
                    }
                    else
                    {
                        path = cur_dir();

                        if (command_suffix == undefined)
                        {
                            path = '~';
                        }
                        else if (command_suffix === '')
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
                            let new_command_suffix;
                            try
                            {
                                if (command_suffix.slice(-1) === '/')
                                {
                                    new_command_suffix = command_suffix.slice(0, -1);
                                }
                                else
                                {
                                    new_command_suffix = command_suffix;
                                }

                                check_if_dir = file_tree[path][new_command_suffix]
                                if (check_if_dir === 'DIR')
                                {
                                    path = '~/' + new_command_suffix;
                                }
                                else
                                {
                                    path = cur_dir();
                                    throw new Error('Not a directory.');
                                }
                            }
                            catch(err)
                            {
                                if (path != '~')
                                {
                                    path = '~/' + path
                                }

                                $('.content').append('<p>' + command_prefix + ': ' + new_command_suffix + ': No such file or directory.');
                            }
                        }
                    }
                }
                else if (command_prefix === valid_cmds[3]) // cat
                {
                    if (command[2])
                    {
                        $('.content').append('<p>"'+ command_prefix + '" only takes one argument.');
                    }
                    else
                    {
                        if (command_suffix == undefined || command_suffix === '')
                        {
                            $('.content').append('<p>no file input');
                        }
                        else
                        {
                            path = cur_dir();
                            let available_txts = [];
        
                            for (let key in file_tree[path])
                            {
                                const val = file_tree[path][key];
                                if (val.slice(-4) === '.txt')
                                {
                                    available_txts.push(val);
                                }                            
                            }
                            
                            if (available_txts.includes(command_suffix))
                            {
                                const file = command_suffix.replace(/\./g, '_')
                                $('.content').append('<pre class="pre-out">' + eval(file));
                            }
                            else
                            {
                                $('.content').append('<p>' + command_prefix + ': ' + command_suffix + ': No such file.');
                            }
        
                            if (path != '~')
                            {
                                path = '~/' + path;
                            }
                        }
                    }
                }
                else if (command_prefix === valid_cmds[4]) // help
                {
                    if (command_suffix)
                    {
                        $('.content').append('<p>"'+ command_prefix + '" does not take any arguments.');
                    }
                    else
                    {
                        $('.content').append('<pre class="pre-out">' + help_txt);
                    }
                }
                else if (command_prefix === valid_cmds[5]) // exit
                {
                    window.location.replace("https://www.vijaystroup.com");
                    // window.location.replace("http://localhost:5000");
                }
            }
            else
            {
                if (command_prefix === ''){}
                else
                {
                    $('.content').append('<p>' + command_prefix + ': command not found');
                }
            }

            // add new contents
            $('.content').append('<hr/>');
            if (command_prefix === '')
            {
                if (cur_dir() != '~')
                {
                    $('.content').append('<p class="terminal" id="path">guest@vijaystroup.com:~/' + cur_dir() + '$');
                }
                else
                {
                    $('.content').append('<p class="terminal" id="path">guest@vijaystroup.com:' + cur_dir() + '$');
                }
            }
            else
            {
                $('.content').append('<p class="terminal" id="path">guest@vijaystroup.com:' + path + '$');
            }
            $('.content').append('<input type="text" class="terminal" id="command-line" maxlength="22" spellcheck="false">');

            // add event listener to new input and focus it
            input = document.querySelectorAll("#command-line:last-child")[0];
            input.addEventListener('keypress', command_line_event);
            $(input).focus();
        }
    }
});
