---
title: Introduction to Networking
sidebar_position: 2
---

## Neworking Introduction
- Network is formed when multiple things gets connected and work together.
- A network can contain anywhere from 2 to billions of devices.

## Internet
- An internet is a giant network with many small networks inside it.
- First iteration of internet was within ARPANET project in late 1960s.
- Tim Berners-Lee created World-Wide-Web (WWW) on 1989 which is the internet as we know today.

## Types of network
- Private network
- Public network

## Identifying devices
- Devices can be identified in two ways
    - IP (Internet Protocol) address
    - MAC (Media Access Control) address

## IP Address
- IP (Internet Protocol) Address is used for identifying devices on the network for a period of time.
- Protocol is the set of standards that IP addresses follow.
- IP Address contains different parts called octets.
- IPV4 address contains 4 octets containing numbers.
    - For example: 192.168.12.1
- IPV4 supports upto **2^32** devices.
- IPV6 was introduces as IPV4 addresses are running out due to the number of devices getting connected.
- IPV6 address is made up of alphanumeric characters.
    - For example: 2405:201:e033:68a0:2f2:151c:2c3d:9d1f
- IPV6 supports upto **2^128** devices.

## MAC Address
- MAC (Media Access Control) Address is a 12 character hexadecimal number divided into 6 parts separated by a colon(:).
- For example: a4:c3:f0:85:ac:2d
- MAC address is set by the manufacturer and it is literally burnt into the network interface card.
- MAC address can be faked using a process called **Spoofing**.

## Ping
- Ping command is used to check if the connection between two devices is available and reliable.
- Ping uses **ICMP(Internet Control Message Protocol)**.
