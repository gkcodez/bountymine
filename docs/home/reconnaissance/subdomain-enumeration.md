---
title: Subdomain Enumeration
sidebar_position: 3
description: Subdomain enumeration notes.
---

## OSINT - SSL/TLS Certificates
- When an SSL/TLS (Secure Sockets Layer/Transport Layer Security) certificate is created for a domain by a CA (Certificate Authority), CA's take part in what's called "Certificate Transparency (CT) logs".
- Below sites a searchable database of certificates
  - https://crt.sh/ 
  - https://ui.ctsearch.entrust.com/ui/ctsearchui/

## OSINT - Search Engines
- Use google dorks to find the list of subdomains.
    ```
    site:*.example.com
    ```

## DNS Bruteforce
- Bruteforce DNS (Domain Name System) enumeration is the method of trying tens, hundreds, thousands or even millions of different possible subdomains from a pre-defined list of commonly used subdomains.
    ```
    dnsrecon -d example.com
    ```

## OSINT - Sublist3r
- Sublist3r tool is used to enumerate all the subdomains.
- Use the below command to start finding the subdomains.
    ```
    sublist3r.py -d example.com
    ```

## Virtual Hosts
- Some subdomains aren't always hosted in publically accessible DNS results, such as development versions of a web application or administration portals.
- Because web servers can host multiple websites from one server when a website is requested from a client, the server knows which website the client wants from the Host header. 
- We can utilise this host header by making changes to it and monitoring the response to see if we've discovered a new website.
    ```
    ffuf -w /usr/share/wordlists/SecLists/Discovery/DNS/namelist.txt -H "Host: FUZZ.acmeitsupport.thm" -u http://10.10.212.66
    ```
- Filter out the results based on size in ffuf using the -fs switch.
    ```
    ffuf -w /usr/share/wordlists/SecLists/Discovery/DNS/namelist.txt -H "Host: FUZZ.acmeitsupport.thm" -u http://10.10.212.66 -fs 2395
    ```