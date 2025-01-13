---
title: Command Prompt
sidebar_position: 1
description: Command prompt application in windows.
---

## Introduction
- One of the terminal programs in windows.
- To launch it send `cmd` in run window.
## Advantages of Command Line Interfaces
- Low resource usage
- Automation
- Remote management

## Basic commands
- `set` - Check your path from the command line.
- `ver` - Find windows operating system version.
- `systeminfo` - Shows more detailed information about the system.
- `more` - Pipe this command to view the output of any command page by page if the output is too long.
    - `driverquery | more` to view the output page by page.
- `help` - Provides help information about a command.
- `cls` - Clears the command prompt screen.
- `hostname` - Shows the machine name of the system.

## Network Troubleshooting
- `ipconfig` - Displays ip address, subnet mask and default gateway.
- `ipconfig /all` - Displays additional information such as the MAC address, DNS servers, DHCP details, etc.
- `ping target_name` - Checks if a server can be accessed.
- `tracert target_name` - Also called trace route. Traces the network route traversed by the given target.
- `nslookup example.com` - Returns the IP address of the given host or domain.
- `netstat -abon target_name` - Displays current network connections and listening ports.
    - `-a` - Displays all connnections and ports
    - `-b` - Displays the associated program.
    - `-o` - Displays the process ID associated with the connection.
    - `-n` - Uses the numerical form for addresses and port numbers.

## File and Disk Management
- `cd` - Change directory.
- `dir` - View child directories.
    - `dir /a` - Displays hidden and system files.
    - `dir /s` - Displays files in current directory and all subdirectories.
- `tree` - Visual representation of directories and subdirectories.
- `mkdir` - Create directory.
- `rmdir` - Remove directory.

## Working with Files
- `type` - Print the contents of the text file in command prompt. Similar to `cat` command in linux.
- `copy` - Copy files from one location to another.
- `move` - Moves files from one location to another.
- `del` or `erase` - Delete files.
- `*` - Use wildcards to refer multiple files.

## Task and Process Management
- `tasklist` - Displays all the running tasks.
    - `tasklist /FI "imagename eq notepad.exe"` - Filters notepad tasks.
- `taskkill` - Kills the task.
    - `taskkill /PID 123` - Kills the task with process id 123.

## Miscellaneous
- `chkdsk` - Checks the filesystem and disks for errors.
- `driverquery` - Displays all installed device drivers.
- `sfc /scannow` - Scans system files for corruption and repairs them if possible.
- `/?` - Displays help information for a command.