---
title: System Management
sidebar_position: 6
description: Managing system level activities in a linux machine.
---

## Crontab
- Crontab is a special file with formatting that is recognized by the cron process to execute step by step.
- For example: `0 */12 * * * cp -R /home/cmnatic/Documents /var/backups/`
- `*` is the wildcard character and we can use this if we do not wish to provide value.
- Use the below for cron job expressions.
    - https://crontab.guru
    - https://crontab-generator.org
- `crotab -e` to edit crontab file with configured text editor.

## Package Management
- When a new package is developed it will be submitted to the `apt` directory. 
- After approval the package will be deployed to the users.
- In linux, the files in `/etc/apt` act as a gateway / registry.
- `add-apt-repository` - To add a new repository.
- A package can also be installed using package installers such as `dpkg`.
- Integrity of the downloaded file can be checked with `GPG (Gnu Privacy Guard) keys`.

## Logs Management
- Linux maintains `rotating` logs of the running application or service.
- Logs can be found in `/var/log`.

