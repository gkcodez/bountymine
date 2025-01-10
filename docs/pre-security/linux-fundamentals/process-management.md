---
title: Process Management
sidebar_position: 5
description: Managing processes running in a linux machine.
---

## View processes
- `ps` - Shows the list of running processes for the current user.
- `ps aux` - Shows processes from other users as well.
- `top` - Shows real time statistics about the processes.

Note: **PID** means process id.

## Managing processes
- `kill` - Terminates a process.
- Signals associated with the kill command determines how cleanly the process should be terminated.
    - `SIGTERM` - Kills the process but allows cleanup to be done before that.
    - `SIGKILL` - Kills the process and does not allow cleanup.
    - `SIGSTOP` - Stops or suspends the process.

## Process hierarchy
- Namespaces is a way of isolating one process from another. This is great for security.
- `systemd` is the process with id 0 and it starts when the operating system boots up.
- Any program or service that the user starts will be a **child process** of systemd. All these processes will run as a separate process but it is controlled by systemd.

## Start on boot
- Some critical process needs to be started on boot.
- `systemctl` command helps us to do the below actions on processes.
    - Start
    - Stop
    - Enable
    - Disable
- For example: `sudo systemctl start apache2` starts apache2 server on boot.

## Background process
- To run a process in background add `&` at the end of the command.
- For example: `echo hello &`.
- Background processes are great for long running processes such as copy files, downloading, etc.
- We could also use `Ctrl+Z` instead of appending `&` at the end of the command.

## Foregrounding a process
- Use `ps aux` to view the list of running processes.
- `fg` command brings the background process to foreground.