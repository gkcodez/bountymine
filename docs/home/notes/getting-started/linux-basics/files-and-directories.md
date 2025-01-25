---
title: Files and Directories
sidebar_position: 2
description: Files interaction and permissions.
---

## File Interaction
- `find` - Finds a specific file within a tree of directories.
- `grep` - Searches the contents of a file.
- `touch` - Create file.
- `mkdir` - Makes new directory.
- `cp` - Copy files.
- `mv` - Move files.
- `rm` - Remove files.
- `file` - Displays information about the file type.

## File Permissions
- `-r` - Read permission.
- `-w` - Write permission.
- `-x` - Execute permission.

## Common Directories
- **/** - Parent for all the directories in linux.
- **/root** - Home directory for root user.
- **/etc - Etcetera** - Common place for storing system files. Etc folder contains the following important files.
    - **sudoers** - Contains the list of users and groups allowed to run as sudo (Admin previleges).
    - **passwd** - Contains the passwords for all the users. Encrypted in SHA512.
    - **shadow** - Supporting file for passwd implemented as a security mechanism.
- **/var** - Variable data - Stores the data which is frequently accessed by files and services running in the system.
    - **/var/log** - Stores the log files from applications and services.
- **/tmp** - Contains only the temporary data. When the computer is restarted the contents of this folder are cleared out.

## Search Files
- Find files by name.
    ```
    find / -type f -name <FILE_NAME>
    ```
- Find files by name ignoring error messages.
    ```
     find / -type f -name user.txt 2> /dev/null
    ```