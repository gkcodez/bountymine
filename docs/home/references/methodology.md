---
title: Methodology
sidebar_position: 1
description: Bug bounty hunting methodology.
---

## Choosing a Target

### Pick a Bug Bounty Platform
Choose a platform where you want to hunt:
- **Public Programs:** HackerOne, Bugcrowd, Intigriti, YesWeHack, Synack
- **Private Programs:** Invite-only programs on the same platforms
- **Self-Hosted:** Companies with security.txt or bounty pages

### Filter Based on Scope and Experience
- **Beginner-Friendly Targets:** Look for programs that accept duplicates and provide good responses.
- **Technology-Based Selection:** Choose a target using familiar technologies (AngularJS, AWS, etc.).
**Scope Consideration:**
- Wide scope = More assets to test
- Narrow scope = Focused, but more competition

### Check Program Activity
- Look at past reports (HackerOne/Bugcrowd disclose some reports).
- Avoid inactive programs with low response rates.

## Reconnaissance & Asset Discovery

### Enumerate Subdomains
```bash
# Passive subdomain enumeration
subfinder -d target.com -silent -all -recursive | tee passive_subs.txt
assetfinder --subs-only target.com | tee -a passive_subs.txt

# Active subdomain enumeration
amass enum -d target.com -active | tee active_subs.txt

# Bruteforce subdomains
# Wordlists:
# /SecLists/Discovery/DNS/subdomains-top1million-5000.txt
# /SecLists/Discovery/DNS/dns-Jhaddix.txt
gobuster dns -d target.com -w /SecLists/Discovery/DNS/subdomains-top1million-5000.txt -t 50 | tee brute_subs.txt
```

### Process Subdomains
```bash
# Merge and filter unique subdomains
cat *_subs.txt | sort -u | anew all_subs.txt

# Resolve subdomains to filter dead ones
cat all_subs.txt | dnsx -silent | tee resolved_subs.txt

### Find live subdomains
cat resolved_subs.txt | httpx -silent -o live_subs.txt

### Find live subdomain details
cat live_subs.txt | httpx -silent -status-code -title -tech-detect | tee live_subs_details.txt

# Identify technologies
whatweb -i live_subs.txt | tee techs.txt

### Get screenshots of subdomain pages [OPTIONAL]
cat live_subs.txt | xargs -I{} gowitness scan single -u "{}"
```

### Explore the target assets

```bash

# Look for Exposed Files

# Use gau for finding exposed files from various sources like Wayback Machine, Common Crawl, AlienVault, etc.
gau target.com | grep -E "\.php|\.env|\.json|\.log|\.backup" | tee exposed_files.txt

# Use GitHub Dorks for finding exposed files
site:github.com "target.com" password

# Find hidden directories and files

# Wordlists: 
# /usr/share/seclists/Discovery/Web-Content/common.txt (General use)
# /usr/share/seclists/Discovery/Web-Content/big.txt (For deeper scans)
# /usr/share/seclists/Discovery/Web-Content/raft-large-directories.txt (For exhaustive scans)

ffuf -u https://target.com/FUZZ -w ~/Wordlists/Seclists/Discovery/Web-Content/common.txt -mc 200

# Find API endpoints

# Katana is a fast web crawler that helps you discover URLs, JavaScript files, parameters, and endpoints from a target website.
katana -u https://api.target.com -d 3 -silent -jc -o urls.txt # Single target
katana -list live_subdomains.txt -d 3 -silent -jc -o urls.txt # List of targets

# Arjun is designed to find hidden GET & POST parameters in web applications, which can help in identifying injection points for vulnerabilities like XSS, SQLi, and SSRF.
arjun -u https://target.com/page.php # Page GET request
arjun -u https://target.com/api/login # API GET request
arjun -u https://target.com/api/login -m POST # API POST request
arjun -u "https://target.example.com" -m GET,POST --stable -o params.json


```

### Vulnerability Scan

```bash
# Low hanging fruits
nuclei -l live_subdomains.txt -t cves/ -o nuclei_results.txt

# SQL Injection
sqlmap -u "https://target.com?id=1" --dbs

```
