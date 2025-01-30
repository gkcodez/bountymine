---
title: Powershell
sidebar_position: 2
description: Powershell application in windows.
---

## Introduction
- Powershell is based on **object-oriented** approach.
- Powershell supports Windows, MacOS and Linux.
- Powershell was created by **Jeffrey Snover**.

## Basic Cmdlets
- Powershell commands are known as **cmdlets (command-lets)**.
- Cmdlets follow a Verb-Noun naming convention.
- `Get-Content` - Displays content of the file in powershell. Similar to `cat`.
- `Get-Command` - Displays all the available commands.
- `Get-Command -CommandType "Function"` - Filters commands with CommandType as "Function".
- `Get-Help` - Get help information.
- `Get-Alias` - Get all aliases.
- `Write-Output` - Prints the given text in the console. SImilar to `echo`.
- `Find-Module -Name "Cmdlet*"` - Search online repositories for new cmdlets.
- `Install-Module -Name "Cmdlet*"` - Install cmdlet from online repositories.

## File Navigation
- `Get-ChildItem -Path ".\Documents"` - Displays files and folders in the current directory. Similar to `ls`.
- `Set-Location -Path ".\Documents"` - Changes the working directory. Similar to `cd`.
- `New-Item -Path ".\Documents\TestFolder" -ItemType "Directory"` - Creates a directory in the given path. Similar to `touch`.
- `New-Item -Path ".\Documents\TestFile" -ItemType "File"` - Creates a directory in the given path. Similar to `mkdir`.
- `Remove-Item -Path ".\Documents\TestFile"` - Deletes the file or directory. Similar to `rm`.
- `Copy-Item -Path ".\Documents\TestFile" -Destination ".\Documents\CopiedFile"` - Copies a file. Similar to `cp`.
- `Move-Item -Path ".\Documents\TestFile" -Destination ".\Documents\MovedFile"` - Moves a file. Similar to `mv`.

## Piping, Filtering and Sorting
- `| (Pipe Operator)` - Redirects the output of one command to another command.
- `Get-ChildItem | Sort-Object Length` - Sort object by length.
- `Get-ChildItem | Where-Object -Property "Extension" -eq ".txt"` - Filter files by extension.
    - `-eq` - Equal to.
    - `-nq` - Not equal to.
    - `-gt` - Greater than.
    - `-lt` - Less than.
    - `-ge` - Greater than or equal to.
    - `-le` - Less than or equal to.
    - `-like` - Matches a specific pattern.
- `Get-ChildItem | Where-Object -Property "Name" -like "ship*"` - Name like ship.
- `Get-ChildItem | Select-Object Name,Length` - Gets the name and length.
- `Select-String` - Finds a specific pattern in a file. Similar to `grep`.

## System and Network Information
- `Get-ComputerInfo` - Displays comprehensive system information. Similar to `systeminfo`.
- `Get-LocalUser` - Lists all local users in the system.
- `Get-NetIpConfiguration` - Displays all network interfaces. Similar to `ifconfig /a`.
- `Get-NetIpAddress` - Displays all IP addresses. Similar to `ipconfig`.

## Real Time System Analysis
- `Get-Process` - Displays information of all running processes.
- `Get-Service` - Displays information of all services in the system.
- `Get-NetTCPConnection` - Get all active tcp network connection. This cmdlet is very useful in malware analysis.
- `Get-FileHash` - Generate the file hash. Used in malware analysis, incident response and threat hunting.

## Scripting
- `Invoke-Command` - Executing command on remote systems.
    - `Invoke-Command -ComputerName Server01 -FilePath C:\scripts\test.ps1` - Runs test.ps1 on Server01.
    - `Invoke-Command -ComputerName RoyalFortune -ScriptBlock { Get-Service }` - Runs `Get-Service` command on RoyalFortune.
