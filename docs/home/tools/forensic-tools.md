---
title: Forensic Tools
sidebar_position: 5
---

## Forensic Tools

### File
- Displays basic information about the file song.mp3.
- Usage: `file song.mp3`.

### Exif Tool
- Displays information on file metadata.
- Usage: `exiftool song.mp3`.

### Steghide
- Hides or extracts hidden files from images.
- Usage: `steghide extract -sf <filename>`

### CyberChef
- For encoding and decoding.
- Link: https://gchq.github.io/CyberChef

### ELK (Elastic Search, Logstash, Kibana)
- For log analysis.

### Splunk
- For log analysis and extraction.

## Frida
- Frida is a powerful instrumentation tool that allows us to analyze, modify, and interact with running applications. Frida creates a thread in the target process; that thread will execute some bootstrap code that allows the interaction. This interaction, known as the agent, permits the injection of JavaScript code, controlling the application's behaviour in real-time.

