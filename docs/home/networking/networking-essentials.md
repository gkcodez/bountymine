---
title: Networking Essentials
sidebar_position: 2
description: Networking Essentials for Cybersecurity.
---

## DHCP: Give Me My Network Settings
- To access a network, the following needs to be configured.
    - IP address along with subnet mask
    - Router (or gateway)
    - DNS server
- DHCP following the below steps
    - DHCP Discover: The client broadcasts a DHCPDISCOVER message seeking the local DHCP server if one exists.
    - DHCP Offer: The server responds with a DHCPOFFER message with an IP address available for the client to accept.
    - DHCP Request: The client responds with a DHCPREQUEST message to indicate that it has accepted the offered IP.
    - DHCP Acknowledge: The server responds with a DHCPACK message to confirm that the offered IP address is now assigned to this client.

## ARP: Bridging Layer 3 Addressing to Layer 2 Addressing
- Two devices does not need to know each other's MAC address all the time. 
- They only need to know that when communicating.
- Address Resolution Protocol (ARP) makes it possible to find the MAC address of another device on the Ethernet.
- ARP is considered layer 2 because it deals with MAC addresses.

## ICMP: Troubleshooting Networks
- ICMP - Internet Control Messaging Protocol
- ICMP is mainly used for network diagnostics and error reporting.
- `ping` command uses ICMP to test connectivity to a target system and measures the round-trip time (RTT).
- `traceroute` (Linux) or `tracert` (Windows) command uses ICMP to discover the route from your host to the target.

### Ping
- The ping command sends 4 packets and stops.
    ```
    ping 192.168.11.1 -c 4
    ```
- The ICMP reply may not be received due to many reasons.
    - System is offline.
    - Firewall blocking requests.

### Traceroute
- **Time To Live (TTL)** indicates the number of routers a packet can pass through before it is dropped.
- Every router it passes through decrements the number by 1. 
- Once this number reaches 0, the router drops the packet and send ICMP Time Limit Exceeded (Type 11) message.
- To run traceroute use the below command.
    ```
     traceroute example.com
    ```

## Routing
- Router sending the packets via the appropriate link to the correct device is called routing.
- Some of the popular routing protocols are listed below
    - **OSPF (Open Shortest Path First)** - Each router has a complete map of the network and can determine the best routes to reach any destination.
    - **EIGRP (Enhanced Interior Gateway Routing Protocol)** - EIGRP is a Cisco proprietary routing protocol that combines aspects of different routing algorithms.
    - **BGP (Border Gateway Protocol)** - BGP is the primary routing protocol used on the Internet. It allows different networks (like those of Internet Service Providers) to exchange routing information and establish paths for data to travel between these networks.
    - **RIP (Routing Information Protocol)** - RIP is a simple routing protocol often used in small networks. Routers running RIP share information about the networks they can reach and the number of hops (routers) required to get there.

## NAT
- IPv4 can support a maximum of four billion devices which gets depleted quickly.
- One solution to address depletion is **Network Address Translation (NAT)**.
- NAT uses one public IP address to provide Internet access to many private IP addresses. 
- In other words, if you are connecting a company with twenty computers, you can provide Internet access to all twenty computers by using a single public IP address instead of twenty public IP addresses. 
- For example: the devices in the network with ip addresses `192.168.0.120`, `192.168.0.110`, `192.168.0.130` communicates through the router with ip `192.168.0.1` with a public ip of `220.1.2.0` which communicates with the internet.

