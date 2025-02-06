---
title: Flare VM
sidebar_position: 3
description: Collection of Forensics, Logic Analysis, and Reverse Engineering tools.
---

## Introduction
- Flare VM - Forensics, Logic Analysis, and Reverse Engineering VM.
- Crafted by FLARE Team at FireEye.

## Reverse Engineering

- Reverse engineering is like solving a puzzle backward: you take a finished product apart to understand how it works. Debugging is identifying errors, understanding why they happen, and correcting the code to prevent them.
  - **Ghidra** - NSA-developed open-source reverse engineering suite.
  - **x64dbg** - Open-source debugger for binaries in x64 and x32 formats.
  - **OllyDbg** - Debugger for reverse engineering at the assembly level.
  - **Radare2** - A sophisticated open-source platform for reverse engineering.
  - **Binary Ninja** - A tool for disassembling and decompiling binaries.
  - **PEiD** - Packer, cryptor, and compiler detection tool.

## Disassemblers and Decompilers
- Disassemblers and Decompilers are crucial tools in malware analysis. They help analysts understand malicious software’s behaviour, logic, and control flow by breaking it into a more understandable format. The tools mentioned below are commonly used in this category.
  - **CFF Explorer** - A PE editor designed to analyze and edit Portable Executable (PE) files.
  - **Hopper Disassembler** - A Debugger, disassembler, and decompiler.
  - **RetDec** - Open-source decompiler for machine code.

## Static and Dynamic Analysis
- Static analysis involves inspecting the code without executing it. 
- Dynamic analysis involves observing its behaviour as it runs. 
  - **Process Hacker** - Sophisticated memory editor and process watcher.
  - **PEview** - A portable executable (PE) file viewer for analysis.
  - **Dependency Walker** - A tool for displaying an executable’s DLL dependencies.
  - **DIE (Detect It Easy)** - A packer, compiler, and cryptor detection tool.

## Forensics and Incident Response
- Digital Forensics involves the collection, analysis, and preservation of digital evidence from various sources like computers, networks, and storage devices. 
- Incident Response focuses on the detection, containment, eradication, and recovery from cyberattacks.
  - **Volatility** - RAM dump analysis framework for memory forensics.
  - **Rekall** - Framework for memory forensics in incident response.
  - **FTK Imager** - Disc image acquisition and analysis tools for forensic use.

## Network Analysis
- Network Analysis includes different methods and techniques for studying and analysing networks to uncover patterns, optimize performance, and understand the underlying structure and behaviour of the network.
  - **Wireshark** - Network protocol analyzer for traffic recording and examination.
  - **Nmap** - A vulnerability detection and network mapping tool.
  - **Netcat** - Read and write data across network connections with this helpful tool.

## File Analysis
- File Analysis is a technique used to examine files for potential security threats and ensure proper file permissions.
  - **FileInsight** - A program for looking through and editing binary files.
  - **Hex Fiend** - Hex editor that is light and quick.
  - **HxD** - Binary file viewing and editing with a hex editor.

## Scripting and Automation
- Scripting and Automation involve using scripts such as PowerShell and Python to automate repetitive tasks and processes, making them more efficient and less prone to human error.
  - **Python** - Mainly automation-focused on Python modules and tools.
  - **PowerShell Empire** - Framework for PowerShell post-exploitation.

## Sysinternals Suite
- The Sysinternals Suite is a collection of advanced system utilities designed to help IT professionals and developers manage, troubleshoot, and diagnose Windows systems.
  - **Autoruns** - Shows what executables are configured to run during system boot-up.
  - **Process Explorer** - Provides information about running processes.
  - **Process Monitor** - Monitors and logs real-time process/thread activity.

## Tools For Initial Investigation
- **PEStudio** - Static analysis or studying executable file properties without running the files.
- **FLOSS** - FLARE Obfuscated String Solver extracts and de-obfuscates all strings from malware programs using advanced static analysis techniques.
- **CFF Explorer**  - Can generate file hashes for integrity verification, authenticate the source of system files, and validate their validity.
- **Process Explorer** - Allows you to see the Process of the Parent-child relationship, DLLs loaded, and its path.
- **Procmon** - A helpful tool for tracking system activity, especially regarding malware research, troubleshooting, and forensic investigations.
- **HxD** - Malicious files can be examined or altered via hex editing.
- **Wireshark** - Observing and investigating network traffic to look for unusual activity.

