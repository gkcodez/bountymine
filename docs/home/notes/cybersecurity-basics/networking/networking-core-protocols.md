---
title: Networking Core Protocols
sidebar_position: 3
description: Networking Core Protocols for Cybersecurity.
---

## DNS: Remembering Addresses
- DNS operates at the Application Layer, i.e., Layer 7 of the ISO OSI model.
- DNS traffic uses UDP port 53 by default and TCP port 53 as a default fallback.
- Most popular types of DNS records are below
    - **A record** - The A (Address) record maps a hostname to one or more IPv4 addresses.
    - **AAAA record** - The AAAA record is similar to the A Record, but it is for IPv6
    - **CNAME record** -  The CNAME (Canonical Name) record maps a domain name to another domain name.
    - **MX record** - The MX (Mail Exchange) record specifies the mail server responsible for handling emails for a domain.
- To lookup ip address of a domain name use the below command.
    ```
    nslookup www.example.com
    ```

## WHOIS
- The one who registers the domain name has the authority to set the A, AAAA, and MX records, among other DNS records for the domain.
- To view the whois records for any domain
    ```
    whois example.com
    ```

## HTTP(S): Accessing the Web
- HTTP stands for Hypertext Transfer Protocol; 
- S in HTTPS stands for Secure. 
- This protocol relies on TCP.
- HTTP and HTTPS commonly use TCP ports `80` and `443`, respectively, and less commonly other ports such as `8080` and `8443`.

### Telnet
- To connect to a server using telnet
    ```
    telnet <IP_ADDRESS> <PORT>
    ```
- To send a get request after connection
    ```
    GET /flag.html HTTP/1.1
    HOST:<HOST_NAME>
    ```
- If you don't have a valid host name send a random text to check if that works.

## FTP: Transferring Files
- FTP - File transfer protocol
- It is efficient than HTTP for transferring files.
- By default, FTP server listens on port `21`.
- Basic commands in FTP are
    - `USER` - To input a username.
    - `PASS` - To input a password
    - `RETR` - To retrieve or download a file.
    - `STOR` - To store or upload a file.
- In Terminal, to connect to the FTP server use,
    ```
    ftp <IP_ADDRESS>
    ```
- Enter the username and password.
- Switch to ascii mode `type ascii` for text files.
- List all files using `ls`.
- Download a file using `get <FILENAME>`.

## SMTP: Sending Email
- `SMTP` - Simple Mail Transfer Protocol.
- By default, SMTP server listens on TCP port `25`.
- Basic commands in SMTP are
    - `HELO or EHLO` initiates an SMTP session.
    - `MAIL FROM` specifies the sender’s email address.
    - `RCPT TO` specifies the recipient’s email address.
    - `DATA` indicates that the client will begin sending the content of the email message.
    - `.` is sent on a line by itself to indicate the end of the message.

## POP3: Receiving Email
- POP3 -  Post Office Protocol version 3
- It allows the client to communicate with a mail server and retrieve email messages.
- By default, POP3 server listens on TCP port `110`.
- Basic commands in POP3 are
    - `USER <username>` identifies the user.
    - `PASS <password>` provides the user’s password.
    - `STAT` requests the number of messages and total size.
    - `LIST` lists all messages and their sizes.
    - `RETR <message_number>` retrieves the specified message.
    - `DELE <message_number>` marks a message for deletion.
    - `QUIT` ends the POP3 session applying changes, such as deletions.

## IMAP: Synchronizing Email
- IMAP - Internet Message Access Protocol.
- POP3 is enough when working with a single device.
- IMAP allows synchronizing read, moved, and deleted messages when working with multiple devices.
- Some basic commands in IMAP are
    - `LOGIN <username> <password>` authenticates the user.
    - `SELECT <mailbox>` selects the mailbox folder to work with.
    - `FETCH <mail_number> <data_item_name>` Example: `fetch 3 body[]` to fetch message number 3, header and body.
    - `MOVE <sequence_set> <mailbox>` moves the specified messages to another mailbox.
    - `COPY <sequence_set> <data_item_name>` copies the specified messages to another mailbox.
    - `LOGOUT` logs out.

## Summary

| Protocol	| Transport Protocol	| Default Port Number   |
| ---       | ---                   |---                    |
| TELNET	| TCP	                | 23                    |
| DNS	    | UDP or TCP	        | 53                    |
| HTTP	    | TCP	                | 80                    |
| HTTPS	    | TCP	                | 443                   |
| FTP	    | TCP	                | 21                    |
| SMTP	    | TCP	                | 25                    |
| POP3	    | TCP	                | 110                   |
| IMAP	    | TCP	                | 143                   |