

## Browser Tools
- Built in browser tools helps to manually review a website for security issues.
- Most used built in browser tools are as below.
    - **View Source** - Use your browser to view the human-readable source code of a website.
    - **Inspector** - Learn how to inspect page elements and make changes to view usually blocked content.
    - **Debugger** - Inspect and control the flow of a page's JavaScript
    - **Network** - See all the network requests a page makes.

### View Source
- The following are the three methods for viewing the page source of a webpage.
  - Right-click on the page, and you'll see an option on the menu that says View Page Source.
  - Add view-source: in front of the URL for example, view-source:https://www.google.com/
  - In your browser menu or submenu, you'll find an option to view the page source.

### Developer Tools - Inspector
- The page source doesn't always represent what's shown on a webpage.
- This is because CSS, JavaScript and user interaction can change the content and style of the page.
- Inspector can be used to view the current state of the page and make changes to it.

### Developer Tools - Debugger
- Developer tools is intended for debugging JavaScript.
- For penetration testers, it gives us the option of digging deep into the JavaScript code.
- In Firefox and Safari, this feature is called Debugger, but in Google Chrome, it's called Sources.
- Use the **pretty print {}** option to make the code readable.

### Developer Tools - Network
- The network tab can be used to keep track of every external request a webpage makes.
- Click on the Network tab and then refresh the page, you'll see all the files the page is requesting.