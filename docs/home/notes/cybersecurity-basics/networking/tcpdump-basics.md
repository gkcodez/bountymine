---
title: Tcpdump Basics
sidebar_position: 6
description: Basics of Tcpdump.
---

## Introduction
- Tcpdump tool and its `libpcap` library uses C and C++.
- It is very stable and offer optimal speed.
- libpcap library is the foundation for many other networking tools today.
- Windows ported version of libpcap is called `winpcap`.

## Basic Packet Capture
- `tcpdump` command without any arguments is only useful for checking if it is installed or not.
- `tcpdump -i <INTERFACE>` to listen to a specific interface.
    - For example: `tcpdump -i eth0`
    - To view all the interfaces, use the command `ip a s`.
- `tcpdump -i any` to listen to any interface.
- `-r <FILE>` to save the captured packets into a file. This will be normally saved as a `.pcap` file.
- `-c <COUNT>` to specify the number of packets to capture.
- `-n` - Don't resolve ip address into a domain name.
- `-nn` - Don't resolve both ip address and port number. By default, tcpdump resolves `80` to `http`. 
- `-v` - Verbose output.
- `-vv` - Produce more verbose output.

## Filtering Expressions
- Filtering can be done by the following.
  - Filtering by Host.
  - Filtering by Port.
  - Filtering by Protocol.

### Filtering by Host
- To capture the packets exchanged with `example.com` and save it to `http.pcap`
  ```
  sudo tcpdump host example.com -w http.pcap
  ```
- To filter packets by source hostname or ip address
  ```
  sudo tcpdump src host example.com -w http.pcap
  ```
- To filter packets by destination hostname or ip address
  ```
  sudo tcpdump dest host example.com -w http.pcap
  ```

### Filtering by Port
- If you want to capture all DNS traffic, you can limit the captured packets to those on port `53`.
  ```
  sudo tcpdump -i ens5 port 53 -n
  ```
- To filter packets by source port number.
  ```
  sudo tcpdump -i ens5 src port 53 -n
  ```
- To filter packets by destination port number.
  ```
  sudo tcpdump -i ens5 dest port 53 -n
  ```

### Filtering by Protocol
- You can limit your packet capture to a specific protocol; examples include: ip, ip6, udp, tcp, and icmp.
  ```
  sudo tcpdump -i ens5 icmp -n
  ```

### Logical Operators
- `and` - Captures when both conditions are true. For example `tcpdump host 1.1.1.1 and tcp`.
- `or` - Captures when any of the conditions is true. For example `tcpdump udp or icmp`.
- `not` - Captures when condition is not true. For example `tcpdump not tcp`.

### Examples
- To filter all SSH traffic
  ```
  tcpdump -i any tcp port 22 -n
  ```
- To filter HTTPS traffic related to example.com
  ```
  tcpdump -i eth0 host example.com and tcp port 443 -w https.pcap -n
  ```
- To filter ARP request and reply
  ```
  tcpdump -i any arp -n

- To filter all DNS requests
  ```
  tcpdump -r traffic.pcap -n -c 1 port 53
  ```

