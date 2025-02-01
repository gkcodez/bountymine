---
title: Web Applications
sidebar_position: 1
description: Web application notes.
---

## Front End
- **HTML** - Hyper Text Markup Language
- **CSS** - Cascading Style Sheets
- **JS** - JavaScript

## Back End
- Database
- Web Servers
- Application Servers
- Web Application Firewall (WAF)

## Uniform Resource Locator (URL)
- Web address that let's you access the content on the web.

### Anatomy of a URL
- A URL can contain the following parts

#### Scheme
- Protocol used to access the website.
    - **HTTP** - Hyper Text Transfer Protocol
    - **HTTPS** -  Hyper Text Transfer Protocol Secure

#### User
- Some websites includes username and password in the format `<username>:<password>` for authentication.

#### Host / Domain
- Most important part of the URL.
- It tells the user which website they are accessing.
- Registering similar misspelt variations of domains for phishing attacks is called **Typosquatting**.

#### Port
- Port number helps to direct your browser to the right service on the web server.
- Port numbers range from **1 to 65535**.
- Standard for HTTP is **80** and for HTTPS it is **443**.

#### Path
- Path points to the specific file or page on the server.

#### Query String
- Often used to pass data for search terms and form inputs.
- Query string starts with a question mark (?).
- Users can modify this data and hence it needs to be handled securely.

#### Fragment
- Points to a specific section of a webpage.
- Starts with Hash symbol (#).

## HTTP Messages
- Packets of data exchanged between client and server.
- Two types of HTTP messages
    - **HTTP Request:** Sent by user to trigger actions.
    - **HTTP response:** Sent by server as a response to the request.

### HTTP Message Format
- **Start Line:** Tells what kind of message is been sent. i.e. Request or Response.
- **Headers:** Key-value pairs with extra information about the HTTP message.
- **Empty Line:** Separates header from body.
- **Body:** Actual data needed for the message will be stored in the body.
