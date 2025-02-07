---
title: Content Discovery
sidebar_position: 1
description: Content discovery.
---

## Manual Discovery - Robots.txt
- The robots.txt file is a document that tells search engines which pages they are and aren't allowed to show on their search engine results.
- This file gives us a great list of locations on the website that the owners don't want us to discover as penetration testers.
- The `robots.txt` file resides in the root of the website and hence could be accessed on `https://[WEBSITE_BASE_URL]/robots.txt/`

## Manual Discovery - Favicon
- The favicon is a small icon displayed in the browser's address bar or tab used for branding a website.
- If the website developer doesn't replace the default favicon with a custom one, this can give us a clue on what framework is in use.
- OWASP host a database of common framework icons that you can use to check against the targets favicon https://wiki.owasp.org/index.php/OWASP_favicon_database/.
- Download the favicon and get the md5hash of it using the below command.
    ```
    <FAVICON_ICON_PATH> | md5sum
    ```
- Use the md5hash to find the framework in the owasp favicon database.

## Manual Discovery - Sitemap
- Unlike the robots.txt file, which restricts what search engine crawlers can look at, the sitemap.xml file gives a list of every file the website owner wishes to be listed on a search engine.
- Sitemap can be accessed on `https://<WEBSITE_BASE_URL>/sitemap.xml/`

## Manual Discovery - HTTP Headers
- When we make requests to the web server, the server returns various HTTP headers. 
- These headers can sometimes contain useful information such as the webserver software and possibly the programming/scripting language in use.
- Use one of the below methods to view the headers.
  - View the response headers in network tab of developer tools in browser.
  - Using an api client such as postman. 
  - Using the curl command `curl http://10.10.127.198 -v`

## Manual Discovery - Documentation
- Read through the framework documentation to gather more information.

## OSINT - Google Hacking / Dorking
- Google hacking / Dorking utilizes Google's advanced search engine features, which allow you to pick out custom content. 
  - **site** - returns results only from the specified website address
  	- Example: `site:tryhackme.com`
  - **inurl** - returns results that have the specified word in the URL
  	- Example: `inurl:admin`
  - **filetype** - returns results which are a particular file extension
  	- Example: `filetype:pdf`
  - **intitle** - returns results that contain the specified word in the title
  	- Example: `intitle:admin`



## OSINT - Wappalyzer
- Wappalyzer (https://www.wappalyzer.com/) is an online tool and browser extension that helps identify what technologies a website uses.

## OSINT - WaybackMachine
- The Wayback Machine (https://archive.org/web/) is a historical archive of websites that dates back to the late 90s. 
- You can search a domain name, and it will show you all the times the service scraped the web page and saved the contents.

## OSINT - GitHub
- Git is a version control system that tracks changes to files in a project.
- GitHub (https://github.com/) is a hosted version of Git Repositories on the internet.

## OSINT - S3 Buckets
- S3 Buckets are a storage service provided by Amazon AWS.
- The format of the S3 buckets is http(s)://{name}.s3.amazonaws.com where {name} is decided by the owner.
- The S3 buckets can be identified manually from the page source or github or even by automation.
-  One common automation method is by using the company name followed by common terms such as {name}-assets, {name}-www, {name}-public, {name}-private, etc.

## Automated Discovery
- Automated discovery is the process of using tools to discover content rather than doing it manually. This process is automated as it usually contains hundreds, thousands or even millions of requests to a web server. 

### Using FFUF
```
ffuf -w /usr/share/wordlists/SecLists/Discovery/Web-Content/common.txt -u http://10.10.127.198/FUZZ
```

### Using Dirb
```
dirb http://10.10.127.198/ /usr/share/wordlists/SecLists/Discovery/Web-Content/common.txt
```

### Using Gobuster
```
gobuster dir --url http://10.10.127.198/ -w /usr/share/wordlists/SecLists/Discovery/Web-Content/common.txt
```