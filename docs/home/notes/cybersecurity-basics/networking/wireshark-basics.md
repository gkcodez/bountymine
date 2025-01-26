---
title: Wireshark Basics
sidebar_position: 5
description: Basics of Wireshark.
---

## Introduction
- Wireshark is an open-source, cross-platform network packet analyser tool capable of sniffing and investigating live traffic and inspecting packet captures (PCAP).
- Wireshark is not an Intrusion Detection System (IDS). It only allows analysts to discover and investigate the packets in depth.
- It also doesn't modify packets; it reads them.

## Tool Overview
- Wireshark GUI opens with a single all-in-one page, which helps users investigate the traffic in multiple ways. At first glance, five sections stand out.
    - **Toolbar** - The main toolbar contains multiple menus and shortcuts for packet sniffing and processing.
    - **Display Filter Bar** - The main query and filtering section.
    - **Recent Files** - List of the recently investigated files. 
    - **Capture Filter and Interfaces** - Capture filters and available sniffing points (network interfaces). 
    - **Status Bar** - Tool status, profile and numeric packet information.

## PCAP (Packet Capture) File
-  Use the "File" menu, dragging and dropping the file, or double-clicking on the file to load a pcap.
-  Packet details are shown in three different panes
    - Packet List Pane
    - Packet Details Pane
    - Packet Bytes Pane

## Colouring Packets
- Coloring packets can help to spot anomalies and protocols in captures quickly.
- Wireshark has two types of packet colouring methods.
    - Temporary (Only applies to the current session). Navigate to **View -> Conversation Filter**.
    - Permanent (Applies to all sessions). Navigate to **View -> Coloring Rules**.
- The View -> Colorize Packet List activates or deactivates the coloring rules.

## Traffic Sniffing
- **Blue Shark button** starts network sniffing.
- **Red button** stops network sniffing.
- **Green button** will restart network sniffing.

## Merge PCAP Files
- Combine two PCAP files using File -> Merge menu path.

## View File Details
- To view the file details such as file hash, capture time, capture file comments, interface and statistics. Do one of the following.
    - Navigate to **Statistics --> Capture File Properties**
    - Click the **PCAP Icon** at the left bottom.

## Packet Dissection
- Packet dissection is also known as protocol dissection, which investigates packet details by decoding available protocols and fields.
- Read more: https://github.com/boundary/wireshark/blob/master/doc/README.dissector

## Packet Details
-  Packets consist of 5 to 7 layers based on the OSI model.
- We can see seven distinct layers to the packet: 
    - **Frame/packet** - Details specific to the Physical layer of the OSI model.
    - **Source [MAC]** - Source and destination MAC Addresses; from the Data Link layer of the OSI model.
    - **Source [IP]** - Source and destination IPv4 Addresses; from the Network layer of the OSI model.
    - **Protocol** - Details of the protocol used (UDP/TCP) and source and destination ports; from the Transport layer of the OSI model.
    - **Protocol errors** - This continuation of the 4th layer shows specific segments from TCP that needed to be reassembled.
    - **Application protocol**- Details specific to the protocol used, such as HTTP, FTP,  and SMB. From the Application layer of the OSI model.
    - **Application data** - This extension of the 5th layer can show the application-specific data.

## Packet Navigation
- Wireshark calculates the number of investigated packets and assigns a unique number for each packet. 
- To Go to a packet number, Navigate to `Go -> Go to Packet` or Press `Ctrl+G`.
- To Find a packet Navigate to `Edit -> Find Packet` or Press `Ctrl+F`.
- There are two crucial points in finding packets. 
- The first is knowing the input type. This functionality accepts four types of inputs 
    - Display filter
    - Hex
    - String
    - Regex
- The second point is choosing the search field. You can conduct searches in the three panes.
    - Packet list
    - Packet details
    - Packet bytes
- It is important to know the available information in each pane to find the event of interest.
- For example, If you try to find the information available in the packet details pane and conduct the search in the packet list pane, Wireshark won't find it even if it exists.

## Mark Packets
- Marking packets is another helpful functionality for analysts. You can find/point to a specific packet for further investigation by marking it.
- To view all the mark options, Navigate to `Edit` menu or to simply Mark/Unmark Press `Ctrl+M`.
- Marked packets will be shown in black.
- Marked packet information is renewed every file session, so marked packets will be lost after closing the capture file.

## Packet Comments
- Commenting will help the further investigation or remind and point out important/suspicious points for other layer analysts.
- Unlike packet marking, the comments can stay within the capture file until the operator removes them.
- To add a packet comment, Navigate to `Edit -> Packet Comment` or Press `Ctrl+Alt+C`.