---
title: File Analysis
sidebar_position: 1
---


## File
- Displays basic information about the file song.mp3.
- Usage: `file song.mp3`.

## Exif Tool
- Displays information on file metadata.
- Usage: `exiftool song.mp3`.

## Steghide
- Hides or extracts hidden files from images.
- Usage: `steghide extract -sf <filename>`

## Stegsolve
- View images in different planes and colors to reveal hidden information.
- Install stegsolve using the below command
    ```
    #!/bin/bash -ex
    wget http://www.caesum.com/handbook/Stegsolve.jar -O stegsolve.jar
    chmod +x stegsolve.jar
    mkdir bin
    mv stegsolve.jar bin/
    ```

## Binwalk
- Find hidden files inside another file.
- To view the hidden files, use the below command.
    ```
    binwalk <FILENAME>
    ```
- To extract the hidden files, use the below command.
    ```
    binwalk -e <FILENAME>
    ```