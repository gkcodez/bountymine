---
title: Gobuster
sidebar_position: 1
description: Enumeration and bruteforcing tool.
---

## Introduction
- Gobuster is an enumeration and bruteforcing tool written in golang.
- To view the help page of gobuster use `gobuster --help`.

### Enumeration
Enumeration is the act of listing all the available resources, whether they are accessible or not. For example, Gobuster enumerates web directories.

### Brute Force
Brute force is the act of trying every possibility until a match is found. It is like having ten keys and trying them all on a lock until one fits. Gobuster uses wordlists for this purpose.


## Directory Mode
- Directory mode in gobuster is used for enumerating web directories.
- To find all commands in DNS mode use `gobuster dir --help`.

### Basic command
```
gobuster dir -u "http://www.example.thm/" -w /usr/share/wordlists/dirb/small.txt -t 64
```
- `dir` - Directory and file enumeration mode.
- `-u` - Target URL.
- `-w` - Wordlist to be used.
- `-t` - Number of threads to be used.

### Redirect response
```
gobuster dir -u "http://www.example.thm" -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -r
```
- `-r` - Redirects responses received from sent requests.

### Filetype
```
gobuster dir -u "http://www.example.thm" -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -x .php,.js
```
- `-x` - File type filter.

## DNS Mode
- DNS mode in gobuster is used for subdomain enumeration.
- To find all commands in DNS mode use `gobuster dns --help`.

### Basic command
```
gobuster dns -d example.thm -w /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-5000.txt
```
- `-d` - Domain name.
- `-i` - Show ip addresses.

## VHost Mode
- Virtual Hosts (VHosts) are different websites hosted on a same machine.
- They look like subdomains but different as they are IP based and runs on the same machine.
- `dns mode` uses the DNS services to scan for subdomains using the configured domain and wordlist.
- `vhost mode` sends web requests using the configured URL and wordlist.
- To find all commands in VHost mode use `gobuster vhost --help`.
```
gobuster vhost -u "http://10.10.159.190" --domain offensivetools.thm --append-domain -w /usr/share/wordlists/seclists/Discovery/DNS/subdomains-top1million-5000.txt
```

