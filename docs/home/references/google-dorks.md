---
title: Google Dorks
sidebar_position: 2
description: Collection of google dorks.
---

## Basics

- `site:` – Restrict results to a specific website or domain
- `inurl:` – Find pages with a certain word or phrase in the URL
- `intitle:` – Find pages with a certain word or phrase in the title tag
- `intext:` – Find pages containing a certain word or phrase in the text
- `filetype:` – Search for files of a specific extension, like .pdf or .txt
- `"word"` – Find pages containing an exact phrase match
- `*` – Acts as a wildcard, matching any word or phrase
- `-` – Exclude a word or site from the search results
- `|` – Search for pages matching one query or another

## Find Bug Bounty Programs

### Find Main Bug Bounty Pag

```
inurl:security
inurl:responsible-disclosure
"vulnerability disclosure program"
"powered by bugcrowd" -site:bugcrowd.com
"submit vulnerability report"
```

### Find Scope and rules

```
inurl:bugbounty intext:"rules"
inurl:bugbounty intext:"scope"
inurl:security ext:pdf
"out of scope" intext:bounty
```

### Reward Information 
```
inurl:security intext:"reward"
inurl:bugbounty intext:"hall of fame"
inurl:security "swag"
inurl:bugbounty intext:"$" -inurl:hackerone -inurl:bugcrowd
```

### Technology Specific
```
inurl:bugbounty intext:wordpress
inurl:security intext:php
inurl:responsible-disclosure intext:apache
```

### Platform Specific
```
"bug bounty" site:hackerone.com
"bug bounty" site:bugcrowd.com
"vulnerability disclosure program" site:hackerone.com
```

## Find based on extensions
```
site:example.com ext:php inurl:?
```

## Find API Endpoints
```
site:example.com inurl:api | site:*/rest | site:*/v1 | site:*/v2 | site:*/v3
```

## Find Sensitive Files

### Based on extensions
```
site:'example.com' ext:log | ext:txt | ext:conf | ext:cnf | ext:ini | ext:env | ext:sh | ext:bak | ext:backup | ext:swp | ext:old | ext:~ | ext:git | ext:svn | ext:htpasswd | ext:htaccess | ext:json
```

### Based on URL
```
site:example.com inurl:conf | inurl:env | inurl:cgi | inurl:bin | inurl:etc | inurl:root | inurl:sql | inurl:backup | inurl:admin | inurl:php
```


## Sensitive Functionalities

### File upload
```
site:example.com 'choose file'
```

### Login
```
site:example.com inurl:login | inurl:signin | intitle:login | intitle:signin | inurl:secure
```

### Environments
```
site:example.com inurl:test | inurl:env | inurl:dev | inurl:staging | inurl:sandbox | inurl:debug | inurl:temp | inurl:internal | inurl:demo
```

### Files
```
site:example.com ext:txt | ext:pdf | ext:xml | ext:xls | ext:xlsx | ext:ppt | ext:pptx | ext:doc | ext:docx
```

### Confidential docs
```
site:example.com intext:'confidential' | intext:'Not for Public Release' | intext:'internal use only' | intext:'do not distribute'
```


## Find Vulnerable Parameters
```
site:example.com inurl:q= | inurl:s= | inurl:search= | inurl:query= | inurl:keyword= | inurl:lang= inurl:&
```

```
site:example.com inurl:url= | inurl:return= | inurl:next= | inurl:redirect= | inurl:redir= | inurl:ret= | inurl:r2= | inurl:page= inurl:& inurl:http
```

```
site:example.com inurl:id= | inurl:pid= | inurl:category= | inurl:cat= | inurl:action= | inurl:sid= | inurl:dir= inurl:& 
```

```
site:example.com inurl:http | inurl:url= | inurl:path= | inurl:dest= | inurl:html= | inurl:data= | inurl:domain= | inurl:page= inurl:&
```

```
site:example.com inurl:include | inurl:dir | inurl:detail= | inurl:file= | inurl:folder= | inurl:inc= | inurl:locate= | inurl:doc= | inurl:conf= inurl:&
```

```
site:example.com inurl:cmd | inurl:exec= | inurl:query= | inurl:code= | inurl:do= | inurl:run= | inurl:read= | inurl:ping= inurl:&
```

```
 site:example.com inurl:email= | inurl:phone= | inurl:password= | inurl:secret= inurl:&
```

## Cloud Storage

### AWS
```
site:s3.amazonaws.com 'example.com'
```
```
site:s3-external-1.amazonaws.com 'example.com'
```
```
site:s3.dualstack.us-east-1.amazonaws.com 'example.com'
```

### Google
```
site:googleapis.com 'example.com'
```
```
site:drive.google.com 'example.com'
```
```
site:docs.google.com inurl:'/d/' 'example.com'
```

### Firebase
```
site:firebaseio.com 'example.com'
```

### Windows

```
site:blob.core.windows.net 'example.com'
```
```
site:onedrive.live.com 'example.com'
```

### Azure
```
site:dev.azure.com 'example.com'
```

### Digitalocean
```
site:digitaloceanspaces.com 'example.com'
```

### Sharepoint
```
site:sharepoint.com 'example.com'
```

### Dropbox
```
site:dropbox.com/s 'example.com'
```

### Box
```
site:box.com/s 'example.com'
```

### Jfrog
```
site:jfrog.io 'example.com'
```

## Code and Documentation

### Pastebin
```
site:pastebin.com 'example.com'
```

### JSfiddle
```
site:jsfiddle.net 'example.com'
```

### Codebeautify
```
site:codebeautify.org 'example.com'
```

### Codepen
```
site:codepen.io 'example.com'
```

### Swagger
```
inurl:apidocs | inurl:api-docs | inurl:swagger | inurl:api-explorer site:'example.com'
```

### Openbugbounty
```
site:openbugbounty.org inurl:reports intext:'example.com'
```

## Error Pages and Exceptions
```
site:example.com inurl:'error' | intitle:'exception' | intitle:'failure' | intitle:'server at' | inurl:exception | 'database error' | 'SQL syntax' | 'undefined index' | 'unhandled exception' | 'stack trace'
```