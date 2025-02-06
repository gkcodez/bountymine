---
title: REMnux VM
sidebar_position: 2
description: Specialised Linux distro for dissecting potentially malicious software without risking your primary system.
---

## Introduction
- The REMnux VM is a specialised Linux distro. It already includes tools like Volatility, YARA, Wireshark, oledump, and INetSim. It also provides a sandbox-like environment for dissecting potentially malicious software without risking your primary system.
  
## File Analysis

### OLEDump
- Oledump.py is a Python tool that analyzes OLE2 files, commonly called Structured Storage or Compound File Binary Format.
- **OLE** stands for **Object Linking and Embedding**.
- OLE is a proprietary technology developed by Microsoft.
- OLE2 files are typically used to store multiple data types, such as documents, spreadsheets, and presentations, within a single file.
- To run oledump on a file use the below command.
    ```
    oledump.py <FILE_NAME>
    ```
- We should be aware of the data stream with the capital letter M. This means there is a Macro.
- Select the datastream with the macro type using the below command.
    ```
    oledump.py <FILE_NAME> -s <DATASTREAM_NUMBER>
    ```
- Make it more readable using the below command.
    ```
    oledump.py <FILE_NAME> -s <DATASTREAM_NUMBER> --vbadecompress
    ```

## Fake Network To Aid Analysis

### INetSim
- During dynamic analysis, it is essential to observe the behaviour of potentially malicious software—especially its network activities.
- Inetsim helps to set a fake network to analyse the activity of the malware.
- Before we start, we must configure the tool INetSim inside our REMnux VM.
- Open the file `sudo nano /etc/inetsim/inetsim.conf`.
- Uncomment `#dns_default_ip  0.0.0.0` and change the ip address to the ip of the REMnux VM.
- Save the file and confirm the change using the command `cat /etc/inetsim/inetsim.conf | grep dns_default_ip`.
- Start the tool using the command `sudo inetsim`. 
- Execute the malware and close it once done.
- Stop inet server to generate report which can be viewed using the command `sudo cat /var/log/inetsim/report/<FILE_NAME>.txt`.

## Memory Investigation: Evidence Preprocessing
- One of the most common investigative practices in Digital Forensics is the preprocessing of evidence.
- This involves running tools and saving the results in text or JSON format.

### Preprocessing With Volatility
- Volatility tool is used when dealing with memory images as evidence.
- Volatility helps to identify and extract specific artefacts from memory images.
- Here are some of the parameters or plugins we will use. We will focus on Windows plugins.
    - **windows.pstree.PsTree** -  Lists processes in a tree based on their parent process ID.
    - **windows.pslist.PsList** -  Lists all currently active processes in the machine.
    - **windows.cmdline.CmdLine** - Lists process command line arguments.
    - **windows.filescan.FileScan** - Scans for file objects in a particular Windows memory image. 
    - **windows.dlllist.DllList** - Lists the loaded modules in a particular Windows memory image. 
    - **windows.malfind.Malfind** - Lists process memory ranges that potentially contain injected code. 
    - **windows.psscan.PsScan** - Scans for processes present in a particular Windows memory image.
- To investigate a file with Volatility plugin use the below command.
    ```
    vol3 -f <FILE_NAME> <PLUGIN_NAME>
    ```
    ```
    vol3 -f wcry.mem windows.pstree.PsTree
    ```
- To run all plugins at once, use the below command
    ```
    for plugin in windows.malfind.Malfind windows.psscan.PsScan windows.pstree.PsTree windows.pslist.PsList windows.cmdline.CmdLine windows.filescan.FileScan windows.dlllist.DllList; do vol3 -q -f wcry.mem $plugin > wcry.$plugin.txt; done
    ```

### Preprocessing with Linux Strings Utility
- Linux strings utility can extract the ASCII, 16-bit little-endian, and 16-bit big-endian strings.
- The `-e l` option tells strings to extract 16-bit little endian strings. 
- The `-e b` option tells strings to extract 16-bit big endian strings. 