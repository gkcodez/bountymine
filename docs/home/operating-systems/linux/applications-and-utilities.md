---
title: Applications and Utilities
sidebar_position: 4
description: Linux applications and utilities
---

## Nano
- Nano is a basic terminal based text editor in linux.
- To create or edit file in nano, use `nano filename.txt`.
- Some useful shortcuts in nano are
    - `Ctrl+S` - Save the file.
    - `Ctrl+X` - Exit the file.
    - `Ctrl+F` - Forward search.
    - `Ctrl+B` - Backward search.
    - `Alt+F` - Find next occurrence.
    - `Alt+B` - Find previous occurrence.
    - `Alt+R` - Start replacing session.
    - `Alt+G` - Go to specified line.
    - `Alt+]` - Go to complimentary bracket.

## Vim
- Vim is an advanced terminal based text editor.
- Learn more about Vim: https://vim.rtorr.com
- Tryhackme room: https://tryhackme.com/r/room/toolboxvim

## Wget
- Wget is used for downloading files from the internet.
- For example: `wget https://github.com/gobeecode/myfile.txt`

## Secure Copy (SCP)
- Allows the user to securely copy files from one computer to another using **Secure Shell (SSH)**.
- For example: (From local to remote) `scp secret.txt ubuntu@192.168.1.30:/home/ubuntu/transferred.txt`
- For example: (From remote to local) `scp ubuntu@192.168.1.30:/home/ubuntu/documents.txt notes.txt`

## HTTP Server
- HTTP server is used to serve files from one computer to another.
- To start a simple http server using python, run `python3 -m http.server 8000`  on machine 1.
- The files can then be accessed in another computer by navigating to `http://<MACHINE1_IP>:8000`