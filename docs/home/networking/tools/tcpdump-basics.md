---
title: Tcpdump Basics
sidebar_position: 1
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
- `-r <FILE>` Read packets from a file. This will be normally a `.pcap` file.
- `-w <FILE>` Write packets to a file.
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

## Advanced Filtering
- `greater LENGTH` - Filters packets that have length greater than or equal to the specified value.
- `less LENGTH` - Filters packets that have length less than or equal to the specified value.
- `man pcap-filter` displays all the options available for filtering the packets.

### Binary Operations
- `&` - And operation. Returns 1 only if both the inputs are 1.
- `|` - Or operation. Returns 1 if any of the inputs are 1.
- `!` - Not operation. Returns 1 if the input is 0 and vice versa.

### Header Bytes
- To refer to the contents of any byte in the header, use the following syntax 
  ```
  proto[expr:size]
  ```
  - **proto** - Protocol used. Valid protocols include `arp`, `ether`, `icmp`, `ip`, `ip6`, `tcp`, and `udp`.
  - **expr** - Indicates the byte offset, where `0` refers to the first byte.
  - **size** - Indicates the number of bytes that interest us, which can be one, two, or four. It is optional and is one by default.
  - Some of the examples for advanced packet filters are
    - `ether[0] & 1 != 0` - Takes the first byte in the Ethernet header and the decimal number 1 is not equal to 1.
    - `ip[0] & 0xf != 5` -  Takes the first byte in the IP header and compares it with the hexadecimal number F is not equal to 5.

- To filter TCP packets based on the set TCP flags use `tcp[tcpflags]` to refer to TCP flags field.
  - `tcp-syn` TCP SYN (Synchronize)
  - `tcp-ack` TCP ACK (Acknowledge)
  - `tcp-fin` TCP FIN (Finish)
  - `tcp-rst` TCP RST (Reset)
  - `tcp-push` TCP Push
  - Some of the examples for tcp packet filters are
      - `tcpdump "tcp[tcpflags] == tcp-syn"` to capture TCP packets with only the SYN (Synchronize) flag set, while all the other flags are unset.
      - `tcpdump "tcp[tcpflags] & tcp-syn != 0"` to capture TCP packets with at least the SYN (Synchronize) flag set.
      - `tcpdump "tcp[tcpflags] & (tcp-syn|tcp-ack) != 0"` to capture TCP packets with at least the SYN (Synchronize) or ACK (Acknowledge) flags set.

## Displaying Packets
Tcpdump is a rich program with many options to customize how the packets are printed and displayed. 
    - `-q` - Quick output; print brief packet information.
    - `-e` - Print the link-level header. Includes MAC address. Used in ARP and DHCP protocols.
    - `-A` - Show packet data in ASCII (American Standard Code for Information Interchange).
    - `-xx` - Show packet data in hexadecimal format, referred to as hex.
    - `-X` - Show packet headers and data in hex and ASCII.
