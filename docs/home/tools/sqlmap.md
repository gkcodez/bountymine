---
title: SQLMap
sidebar_position: 3
description: Automated sql injection finder tool.
---

## Introduction
- SQLMap is an automated tool for detecting and exploiting SQL injection vulnerabilities in web applications. 
- `sqlmap --help` command will list all available flags that can be used.
- `sqlmap --wizard` will guide you through each step if you don't want to manually add flags.
- `--dbs` flag extracts all the database names.
- `-D database_name --tables` flag extracts all the tables.
- `-D database_name -T table_name --dump` extracts the records from a table.
- The first step is to look for a possible vulnerable URL or request.
- If you see any web application using GET parameters in the URLs to retrieve data, you can test that URL with the -u flag in the SQLMap tool.