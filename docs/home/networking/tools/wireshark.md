---
title: Wireshark
sidebar_position: 2
description: Wireshark notes.
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
    - Temporary (Only applies to the current session). Navigate to **View --> Conversation Filter**.
    - Permanent (Applies to all sessions). Navigate to **View --> Coloring Rules**.
- The View --> Colorize Packet List activates or deactivates the coloring rules.

## Traffic Sniffing
- **Blue Shark button** starts network sniffing.
- **Red button** stops network sniffing.
- **Green button** will restart network sniffing.

## Merge PCAP Files
- Combine two PCAP files using File --> Merge menu path.

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
- To Go to a packet number, Navigate to `Go --> Go to Packet` or Press `Ctrl+G`.
- To Find a packet Navigate to `Edit --> Find Packet` or Press `Ctrl+F`.
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
- To add a packet comment, Navigate to `Edit --> Packet Comment` or Press `Ctrl+Alt+C`.

## Export Packets
- Capture files can contain thousands of packets in a single file.
- Use the `File` menu to export packets.

## Export Objects (Files)
- Wireshark can extract files transferred through the wire. 
- Exporting objects are available only for selected protocol's streams such as DICOM, HTTP, IMF, SMB and TFTP.

## Time Display Format
- By default, Wireshark shows the time in "Seconds Since Beginning of Capture".
- The common usage is using the UTC Time Display Format for a better view.
- Use the `View --> Time Display Format` menu to change the time display format.

## Expert Info
- These are only suggestions and there are chances of false positives.

| Severity | Color  | Info                                                     |
| -------- | ------ | -------------------------------------------------------- |
| Chat     | Blue   | Information on usual workflow                            |
| Note     | Cyan   | Notable events like application error codes              |
| Warn     | Yellow | Warnings like unusual error codes and problem statements |
| Error    | Red    | Problems like malformed packets                          |

| Group      | Info                       |
| ---------- | -------------------------- |
| Checksum   | Checksum errors            |
| Comment    | Packet comment detection   |
| Deprecated | Deprecated protocol usage  |
| Malformed  | Malformed packet detection |


## Packet Filtering
- Wireshark has a powerful filter engine that helps analysts to narrow down the traffic and focus on the event of interest.
- Wireshark has two types of filtering approaches: capture and display filters. 
  - Capture filters are used for "capturing" only the packets valid for the used filter. 
  - Display filters are used for "viewing" the packets valid for the used filter. 
- Filters are only the option to investigate the event of interest.
- There are two different ways to filter traffic and remove the noise from the capture file
  - Using queries
  - Using right click menu

## Apply as Filter
- This is the most basic way of filtering traffic.
- Click on the field to be filtered and use the right click menu or `Analyse --> Apply as Filter`.
- Number of packets will be displayed in the status bar at the bottom right.

## Conversation Filter
- To view the specific packet number and all linked packets by focusing on IP addresses and port numbers.
- Click on the field to be filtered and use the right click menu or `Analyse --> Conversation Filter`.

## Colourise Conversation
- Similar to the "Conversation Filter" but it just highlights the linked packets without applying a display filter and decreasing the number of viewed packets.
- Click on the field to be filtered and use the right click menu or `Analyse --> Colorise Conversation`.

## Prepare as Filter
- Similar to "Apply as Filter", this option helps analysts create display filters using the right-click menu.
- Prepare as filter doesn't apply the filters after the selecting the option. It just adds the required query to the pane and waits for the execution command `enter` or another chosen filtering option by using the `.. and/or..` from the right-click menu.

## Apply Column
- Adds a property in details pane as columns to the packet list pane.
- To apply as a column, use the right-click menu or `Analyse --> Apply as Column`.

## Follow Stream
- Wireshark displays everything in packet portion size. 
- But it is also possible to reconstruct the streams and view the raw traffic as it is presented at the application level.
- Following the protocol, streams help analysts recreate the application-level data and understand the event of interest.
- Use the right-click menu or  `Analyse --> Follow TCP/UDP/HTTP Stream` menu to follow traffic streams.
- Streams are shown in a separate dialogue box; packets originating from the **server are highlighted with blue**, and those originating from the **client are highlighted with red**.