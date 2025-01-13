---
title: Networking Concepts
sidebar_position: 1
description: Networking Concepts for Cybersecurity.
---

## TCP/IP Model
- TCP / IP Models contains the following 5 layers.
    - Physical Layer
    - Link Layer
    - Internet Layer
    - Transport Layer
    - Application Layer
        - Combines 3 layers (Application, Presentation and Session) into a single layer.

## IP Address
- Find ip address using the command
    - `ipconfig` - Windows
    - `ifconfig` or `ip address show` or `ip a s` - Linux
- There are two types of IP addresses.
    - Private
    - Public
- RFC 1918 defines the following three ranges of private IP addresses:
    ```
    10.0.0.0 - 10.255.255.255 (10/8)
    172.16.0.0 - 172.31.255.255 (172.16/12)
    192.168.0.0 - 192.168.255.255 (192.168/16)
    ```
## Subnets
- Subnet mask of `255.255.255.0` can also be written as `/24`.
- `/24` means that the leftmost three octets are the same across the whole subnet.
- In this case the subnet range would be `192.168.66.1 to 192.168.66.254`.

## Ports
- IP address identifies the host.
- Port determine the sending and receiving process.
- Port numbers ranges between 1 to 65535 (`2^16 - 1`).

## UDP and TCP
- UDP is fast but unreliable.
- TCP is reliable but slow.
- TCP connection is established using a three-way handshake.
    - Client intiates a connection by sending a **SYN packet** to the server.
    - Server responds to the SYN packet with **SYN-ACK packet**.
    - Client acknowledges the reception of SYN-ACK packet by sending an **ACK packet** to the server.

## Encapsulation
- Process of adding the header at each layer and forwarding it as a unit.
- At transport layer, TCP adds the header information and creates a **TCP segment**.
- At transport layer, UDP adds a header information and creates a **UDP datagram**.
- At the network layer, header is added to get an **IP Packet**.
- At the link layer, Header and trailer is added to get a **wifi or ethernet frame**.

## Telnet
- Telnet (Teletype Network) is a network protocol for remote terminal connection.
- Telnet allows the user to connect and ommunicate with the remote system.