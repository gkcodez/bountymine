---
title: FFUF
sidebar_position: 1
description: Enumeration and fuzzing tool.
---

## Basic Usage

### Fuzz File Paths
```
ffuf -w wordlist.txt -u https://example.com:PORT/FUZZ
```

### Fuzz File Extensions
```
ffuf -w wordlist.txt -u https://example.com/index.FUZZ
```

### File names
```
ffuf -w wordlist.txt -u https://example.com/blog/FUZZ.php
```

### Use command output as a word list, for example fuzz user IDs with seq command
```
ffuf -c -w <(seq 1 1000) -u https://example.com/api/users/FUZZ
```

### Generate wordlists of numbers with leading zeros
```
ffuf -c -w <(seq -f "%04g" 1 1000) -u https://example.com/api/users/FUZZ
```
Note: `%04g` generates numbers with 4 digits with leading zeros.

### Recursive Fuzzing
```
ffuf -recursion -recursion-depth 3 -w wordlist.txt -u https://example.com/FUZZ
```

### Set Cookies
```
ffuf -b "NAME1=VALUE1; NAME2=VALUE2" -w wordlist.txt -u https://example.com/FUZZ
```

## Multiple Wordlists

### Try different usernames and passwords (Clusterbomb)
```
ffuf -w users.txt:USER -w passwords.txt:PASS -u https://example.com/login?username=USERFUZZ&password=PASSFUZZ --mode clusterbomb
```

### Try different usernames and passwords (Pitchfork)
```
ffuf -w users.txt:USER -w passwords.txt:PASS -u https://example.com/login?username=USERFUZZ&password=PASSFUZZ --mode pitchfork
```

### Fuzz multiple parts of the JSON request
```
ffuf -w usernames.txt:U -w passwords.txt:P -X POST -d '{"username":"USERFUZZ","password":"PASSFUZZ"}' -H 'Content-Type: application/json' -u https://example.com/api/login
```

### Fuzz both directory and filenames
```
ffuf -w dirs.txt:DIR -w files.txt:FILE -u https://example.com/DIR/FILE
```

### Fuzz with request file
```
ffuf -request request.txt -request-proto http -mode clusterbomb -w usernames.txt:USERFUZZ -w passwords.txt:PASSFUZZ -mc 200
```

## Subdomains and Vhosts

### Subdomains
```
ffuf -w wordlist.txt -u https://FUZZ.example.com/
```

### VHosts
```
ffuf -w wordlist.txt -u http://example.com/ -H 'Host: FUZZ.example.com'
```


## HTTP Parameters

### Parameter names - GET
```
ffuf -w wordlist.txt -u http://example.com/index.php?FUZZ=key
```

### Parameter names - POST
```
ffuf -w wordlist.txt -u https://example.com/index.php -X POST -d 'FUZZ=key' -H 'Content-Type: application/x-www-form-urlencoded' 
```

### Parameter value - POST
```
ffuf -w ids.txt -u https://example.com/index.php -X POST -d 'id=FUZZ' -H 'Content-Type: application/x-www-form-urlencoded'
```

### Fuzzing JSON Post data
```
ffuf -X POST -H "Content-Type: application/json" -d '{"username": "admin", "password": "FUZZ"}' -w /path/to/wordlist.txt -u http://example.com/api/login
```

## Headers

### Change the user agents
```
ffuf -w wordlist.txt -u https://example.com/FUZZ -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0"
```

### Set Content-type header
```
ffuf -w wordlist.txt -u https://example.com/FUZZ -H "Content-Type: application/json" -X POST
```

### Setting Authorization header
```
ffuf -w /path/to/wordlist.txt -u https://example.com/FUZZ -H "Authorization: Bearer mytoken"
```

### Bearer token value
```
ffuf -w tokens.txt -H "Authorization: Bearer FUZZ" -u https://example.com/api/resource
```

### Header value
```
ffuf -w /path/to/wordlist.txt -u http://example.com -H "X-Forwarded-For: FUZZ"
```

## Rate limits

### Rate limit to 50 rq/s
```
ffuf -rate 50 -w wordlist.txt -u https://example.com/FUZZ
```


### Set Number of threads
```
ffuf -t 5 -w wordlist.txt -u https://example.com/FUZZ
```

### Delays
```
ffuf -w wordlist.txt -u https://example.com/FUZZ -t 2 -p 1
```

## Filters

### Filter 301 and 302 HTTP codes
``` 
ffuf -fc 301,302 -w wordlist.txt -u https://example.com/FUZZ
```

### Filter 403 HTTP codes with Regex
```
ffuf -u https://example.com/FUZZ -w /usr/share/seclists/Discovery/Web-Content/raft-medium-files-lowercase.txt -fr '/\..*'
```

### Filter by response size of 2003 bytes
``` 
ffuf -fs 2003 -w wordlist.txt -u https://example.com/FUZZ
```

### Filter by response size in range between 2000 and 3000 bytes
``` 
ffuf -fs 2000-3000 -w wordlist.txt -u https://example.com/FUZZ
```

### Filter by lines
``` 
ffuf -fl 5 -w wordlist.txt -u https://example.com/FUZZ
```

### Filter by word count
``` 
ffuf -fw 10 -w wordlist.txt -u https://example.com/FUZZ
```

### Automatically calibrate filtering options
```
ffuf -ac -w wordlist.txt -u https://example.com/FUZZ
```

## Matchers

### Matching Status Code
```
ffuf -u https://example.com/FUZZ -w wordlist.txt -mc 200
```

### Matching Response Size
```
ffuf -u https://example.com/FUZZ -w wordlist.txt -ms 1000
```

### You can also match a range of response sizes:
```
ffuf -u https://example.com/FUZZ -w wordlist.txt -ms 900-1100
```

### Matching on Word Count
```
ffuf -u https://example.com/FUZZ -w wordlist.txt -mw 50
```

### Matching by Response Lines
```
ffuf -u https://example.com/FUZZ -w wordlist.txt -ml 10
```

### Regex Matching
```
ffuf -w /path/to/wordlist.txt -u https://example.com/F
```

## Output Options

### Save results in JSON
```
ffuf -w /path/to/wordlist.txt -u https://example.com/FUZZ -o results.json -of json
```

### Save results in CSV
```
ffuf -w wordlist.txt -u https://example.com/FUZZ -o results.csv -of csv
```

### Save output in all supported formats:
```
ffuf -w wordlist.txt -u https://example.com/FUZZ -o results -of all
```
