---
title: Nmap
sidebar_position: 3
description: Nmap notes.
---

## Introduction
- Nmap is an open-source network scanner that was first published in 1997.
- Nmap can be used to perform the following tasks.
  - Discover live hosts
  - Find running services on the live hosts
  - Distinguish the different types of port scans
  - Detect the versions of the running services
  - Control the timing
  - Format the output

## Host Discovery - Find Live Hosts
- Nmap uses multiple ways to specify its targets.
  - **IP range**: To scan from 192.168.1.1 to 192.168.1.10, write `192.168.0.1-10`.
  - **IP subnet**: To scan a subnet, write `192.168.0.1/24` which is equivalent to `192.168.1.0-255`, .
  - **Hostname**: Hostname can also be used. For example `example.thm`.
- Ping scan is used to discover the online hosts in the network.
- To perform a ping scan, use the below command
    ```
    nmap -sn 192.168.66.0/24
    ```
- To lists the hosts before scanning, use the below command.
    ```
    nmap -sL 192.168.0.1/24
    ```

## Port Scanning
- After discovering the live hosts in the network, we have to find all running network services.
- A network service listens for incoming connections on a TCP or UDP port.
- By design TCP has 65535 ports which is same for UDP as well.
- Common ports are` 80 and 443` for DNS servers and `53` for TCP and UDP ports.
  
### Connect Scan
- Connect scan tries to perform a TCP three way handshake with every target TCP port. The port is open when the connection is successful.
- Connect Scan can be performed by using the below command.
    ```
    nmap -sT 192.168.124.148
    ```

### SYN Scan (Stealth)
- It only performs the first step of TCP three way handshake. It only sends the TCP SYN packet. 
- Fewer logs since the connection is not really established.
- Stealth Scan can be performed by using the below command.
    ```
    nmap -sS 192.168.124.148
    ```

### Scanning UDP Ports
- UDP Scan can be performaed using the below command
    ```
    nmap -sU 192.168.124.148
    ```

### Limiting the Target Ports
- Nmap scans most common 1000 ports by default.
- Few more options that nmap offers are
  - `-F` - Fast Mode. Scans most common 100 ports.
  - `-p[range]` - Specifies the range of ports to scan. For example:
    - `-p10-1024` scans ports from 1 to 1024
    - `-p-25` scans ports from 1 to 25.
    - `-p-` scans all ports from 1 to 65535.
  
## Version Detection

### OS Detection
- Detect host os using the below command.
    ```
    nmap -sS -O 192.168.124.211
    ```

### Service and Version Detection
- Detect service and version using the below command.
    ```
    nmap -sV -O 192.168.124.211
    ```

### Forcing a Scan
- Treat hosts which are down during host discovery as online and perform a port scan.
    To force a scan, use the below command.
    ```
    nmap -Pn -O 192.168.124.211
    ```

## Timing and Scan Speed
- Timing can be specified using the name or number.
- There are 6 timing templates in nmap scanning.
  - T0 - paranoid
  - T1 - sneaky
  - T2 - polite
  - T3 - normal
  - T4 - aggressive
  - T5 - insane
- T3 is the default timing.
- To set the timing using the number notation, use any one of the below commands.
    ```
    nmap -sS  -T4 10.10.76.189 -F
    ```
    ```
    nmap -sS  -T 4 10.10.76.189 -F
    ```
- To set the timing using the name notation, use the below command.
    ```
    nmap -sS  -T aggressive 10.10.76.189 -F
    ```
- To set the number of parallel probes use `--min-parallelism <numprobes>` and `--max-parallelism <numprobes>`.
- To set the rate at which nmap sends packets use `--min-rate <number>` and `--max-rate <number>`.
- To specify the maximum timeout, use `--host-timeout`.

## Output

### Verbosity
- Nmap supports the following verbosity levels `-v`, `-vv`, `-vvv`, `-vvvv`. This can also be written as `-v1`, -`v2`, `-v3`, `-v4`.
- If verbosity did not help, consider `-d` for debugging level output.
- Debugging level output supports levels upto `-d9`.

### Saving Scan Report
- Nmap supports output in various formats.
- `-oN <filename>` - Normal output
- `-oX <filename>` - XML output
- `-oG <filename>` - grep-able output (useful for grep and awk)
- `-oA <basename>` - Output in all three formats

## Summary
- It is best to run nmap as **sudo** to make use of all its features.

### Host Discovery 	
- `-sL` - List scan – list targets without scanning
- `-sn` - Ping scan – host discovery only

### Port Scanning 	
- `-sT` - TCP connect scan – complete three-way handshake
- `-sS` - TCP SYN – only first step of the three-way handshake
- `-sU` - UDP Scan
- `-F` - Fast mode – scans the 100 most common ports
- `-p[range]` - Specifies a range of port numbers – -p- scans all the - `ports
- `-Pn` - Treat all hosts as online – scan hosts that appear to be down

### Service Detection - 
- `-O` - OS detection
- `-sV` - Service version detection
- `-A` - OS detection, version detection, and other additions

### Timing - 
- `-T<0-5>` - Timing template – paranoid (0), sneaky (1), polite (2), normal (3), aggressive (4), and insane (5)
- `--min-parallelism <numprobes> and --max-parallelism <numprobes>` - - Minimum and maximum number of parallel probes
- `--min-rate <number> and --max-rate <number> - Minimum and maximum` - rate (packets/second)
- `--host-timeout` - Maximum amount of time to wait for a target host

### Real-time output - 
- `-v` - Verbosity level – for example, -vv and -v4
- `-d` - Debugging level – for example -d and -d9

### Report - 
- `-oN <filename>` - Normal output
- `-oX <filename>` - XML output
- `-oG <filename>` - grep-able output
- `-oA <basename>` - Output in all major formats