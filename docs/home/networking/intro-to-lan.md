---
title: Introduction to LAN
sidebar_position: 7
---

## Local Area Network(LAN)
- There are different topologies in networks. Some of the most prevalent network topologies are
    - Star topology
    - Bus topology
    - Ring topology

### Star topology
- Individual devices are connected to a central networking device.
- Characteristics of star topology are
    - Most common
    - Easy to add more devices
    - Expensive
    - More maintenance

### Bus topology
- Devices are connected to a single connection called backbone cable.
- Characteristics of bus topology
    - Cost efficient
    - Prone to becoming slow as all data travels through the single cable.
    - Difficult to troubleshoot.
    - If the backbone cable breaks, then the entire network will not work.

### Ring topology
- Devices are connected in a circle to form a loop.
- Each device is connected to two other devices.
- Also called token topology.
- The device will send it's own data before receiving and sending the data from nearby device.
- Data travels in one direction only.
- Characteristics of ring topology
    - Easy to troubleshoot.
    - Not efficient.
    - If the cable breaks anywhere then the entire network is down.

## Switch
- Switches allow multiple devices such as computers, printers, etc to connect using ethernet cables into their port.
- Switches keep track of what device is connected to which port and transmits data efficiently.

## Routers
- Routers help in routing which is a process of connecting networks and passing data to them.
- Switches and routers can be connected to each other to increase reliability.

**Note**: Switches connect **individual devices** and Routers connect **networks**.

## Subnetting
- Subnetting is the process of splitting a large network into smaller networks.
- Subnetting helps in assigning networks based on business needs.
    - For example: Grouping networks based on the deparments and decide the information and bandwidth for that network.
        - Engineering department
        - HR department
        - Accounting deparment
- Subnets use IP address in 3 ways
    - Network address 
        - Network address is the address of the start of the network.
        - For example: 192.168.1.0
    - Host address
        - Host address is the address of the device to be identified.
        - For example: 192.168.1.10
    - Default gateway
        - Default gateway is the special address of the device which is capable of sending data outside of the network.
        - This address is usually the **first or last host address** of the network.
        - For example: 192.168.1.1 or 192.168.1.255
### Advantages of Subnetting
- Efficiency.
- Security.
- Full control over the network.

## Address Resolution Protocol (ARP)
- ARP allows devices to identify themselves within the network.
- ARP allows the device to associate it's IP address with it's MAC address on the network.
- Initially a device sends an **ARP Request** to find the Mac address of the device with the IP address.
- The device owning the IP address currently will send back an **ARP Response** with the MAC address.
- This information will be stored in the **ARP Cache** of the requesting device for future reference.

## Dynamic Host Configuration Protocol (DHCP)
- IP addresses can either be assigned manually or automatically and most commonly using DHCP.
- The process of assigning and IP to the device is as below
    - DHCP Discover - Device sends a request to find any DHCP servers on the network.
    - DHCP Offer - DHCP server replies back with an IP address that the device can use.
    - DHCP Request - Device then sends a reply confirming to assign the IP address to it.
    - DHCP ACK - DHCP server sends an acknowledgement as confirmation.