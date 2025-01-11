---
title: OSI Model
sidebar_position: 3
---

## Introduction
- OSI - Open Systems Interconnection.
- OSI Model has **7** layers.
    - Application
    - Presentation
    - Session
    - Transport
    - Network
    - Data Link
    - Physical

## Physical Layer
- Physical components of the hardware in networking.
- For example: Ethernet cables

## Data Link Layer
- Data link layer deals with the physical addressing of the transmission.
- Every networking device comes with the hardware called the **Network Interface Card(NIC)** which contains the unique MAC address to identify it.
- Data link layer receives the IP address from the networking layer and adds the MAC address.

## Network Layer
- The most optimal path for the data to be transmitted will be determined in this layer.
- OSPF - Open Shortest Path First.
- RIP - Routing Information Protocol.
- The optimal path would be determined by the considering the following factors.
    - Shortest path.
    - Reliable path.
    - Fastest path.
- In network layer, everything is dealt with **IP addresses**.
- Routing and reassembly happens at this layer.
- Routers are called layer 3 devices.

## Transport Layer
- Transport layer plays a vital role is transmitting data across the network.
- There are two protocols for transmission of data.
    - Transmission Control Protocol (TCP).
    - User Datagram Protocol (UDP).

### Transmission Control Protocol (TCP)
- Characteristics of TCP
    - Reliable
    - Accurate
    - Slower
    - Needs reliable connection
- TCP is best suitable for the following
    - File transfers
    - Internet browsing
    - Sending emails

### User Datagram Protocol (UDP)
- Characteristics of UDP
    - Faster
    - Does not need reliable connection.
    - No error checking
    - Not reliable or accurate.
- UDP is best suitable for the following
    - Video streaming

## Session Layer
- Session layer creates and maintains a connection after the data is translated from the presentation layer.
- Session will be active as long as the connection is active.
- Session layer is also responsible for closing the connection when it is not used for a while.
- Sessions are unique and data cannot travel across different sessions.

## Presentation Layer
- **Standardisation** happens in this layer.
- This layer acts as a translator for data to and from the application layer.
- For example: Two users using different email clients, but the data should be handled in the same way.
- Security features such as **data encryption** happens in this layer.

## Application Layer
- Most familiar layer. User interaction happens in this layer.
- Protocols and rules are present in this layer.
- Email clients, browsers, etc are part of this layer and these application provide a user friendly **Graphical User Interface (GUI)** for the user to interact with.