---
title: Networking Secure Protocols
sidebar_position: 5
description: Networking Secure Protocols for Cybersecurity.
---

## TLS
- **Secure Socket Layer (SSL)** was developed by Netscape Communications and released SSL 2.0 in 1995.
- **Transport Layer Security (TLS)** was developed by Internet Engineering Task Force (IETF) as an upgrade to SSL 3.0 in 1999.
- In 2018, TLS 1.3 was released as a major overhaul for its previous version after two decades.
- Nowadays, many protocols received an upgrade to secure protocols with the simple addition of TLS. 
- Examples: HTTPS, SMTPS, POP3S, IMAPS, DoT(DNS over TLS), etc.
- The first step for every server (or client) that needs to identify itself is to get a signed TLS certificate.
- Generally, it is a paid process but https://letsencrypt.org/ lets you get a certificate for free.
- A self-signed certificate cannot prove the server’s authenticity as no third party has confirmed it.

## HTTPS
- HTTPS stands for Hypertext Transfer Protocol Secure.
- It's basically HTTP over TLS.
- By default, HTTPS communicates over the port 443.
- The communication in HTTPS happens in the following order.
    - 3 packets for three-ways TCP handshake.
    - Several packets to negotiate TLS protocol.
    - Encrypted packets of application data.
- The encrypted data can be decrypted only if the key is available.

## SMTPS, POP3S, and IMAPS

| Protocol | Transport Protocol | Default Port Number |
| -------- | ------------------ | ------------------- |
| SSH      | TCP                | 22                  |
| HTTPS    | TCP                | 443                 |
| FTPS     | TCP                | 990                 |
| SMTPS    | TCP                | 465 and 587         |
| POP3S    | TCP                | 995                 |
| IMAPS    | TCP                | 993                 |

## SSH
- Although, telnet is convenient to login to remote systems it is less secure.
- Telnet sends data in cleartext, which anyone can intercept and read.
- **Secure Shell (SSH)** protocol was developed by Tatu Ylönen and released SSH-1 in 1995.
- A more secure version, SSH-2, was defined in 1996.
- **OpenSSH**, an opensource implementation of SSH was released by OpenBSD developers in 1999.
- Nowadays, most ssh clients use OpenSSH libraries and source code.
- OpenSSH offers the following benefits.
    - Secure authentication
    - Confidentiality
    - Integrity
    - Tunneling
    - X11 Forwarding -  SSH allows you to use the graphical application over the network.
- TELNET server listens on port `23`, the SSH server listens on port `22`.

## SFTP and FTPS
- SFTP stands for SSH File Transfer Protocol.
- It is part of the SSH protocol suite and shares the same port number, 22. 
- FTPS stands for File Transfer Protocol Secure.
- FTPS uses TLS to securely transfer files.
- SFTP and FTPS are different.

## VPN
- VPN stands for Virtual Private Network.
- VPN connect all its offices and sites to the main branch so that any device can access the shared resources.

## Closing notes
- Executing `chromium --ssl-key-log-file=~/ssl-key.log` dumps the TLS keys to the ssl-key.log file.
- Use this key file to decrypt the packets in wireshark.

