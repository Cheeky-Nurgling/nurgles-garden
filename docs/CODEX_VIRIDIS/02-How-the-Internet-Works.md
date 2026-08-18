# Chapter II — How the Internet Works

> *"Before the Garden could speak, it first had to learn how messages travel."*

---

## 📚 What You Will Learn

In this chapter, you will learn:

- What the internet is.
- The difference between the internet and the web.
- What a server is.
- What a client is.
- What happens when you open a website.
- What a domain name is.
- What an IP address is.
- What DNS does.
- What HTTP and HTTPS mean.
- How your browser receives HTML, CSS, and JavaScript.
- How Live Server fits into your current project.

---

## 🌿 Why This Matters

When building websites, it is easy to focus only on the code visible inside VS Code.

However, the code must travel through several systems before it appears as a webpage.

Understanding that journey helps you diagnose problems such as:

- A webpage not loading.
- A CSS file not appearing.
- A JavaScript file not running.
- A broken file path.
- A server not responding.
- A browser showing an old version of a file.

You do not need to become a network engineer before building websites.

You only need a clear mental model of how the pieces communicate.

---

## 1. What Is the Internet?

The internet is a worldwide network of connected computers and devices.

These devices communicate by sending information to one another.

That information may include:

- Webpages
- Emails
- Images
- Videos
- Messages
- Files
- Game data
- Software updates

The internet is the infrastructure that allows these devices to communicate.

Think of it as a massive system of roads connecting cities around the world.

The roads do not decide what travels across them.

They simply provide the routes.

---

## 2. The Internet and the Web Are Not the Same Thing

The terms **internet** and **web** are often used as though they mean the same thing, but they are different.

### The Internet

The internet is the network connecting computers and devices.

### The Web

The World Wide Web is one service that uses the internet.

Websites, webpages, and browsers are part of the web.

Other services also use the internet, including:

- Email
- Online games
- Cloud storage
- Video calls
- File transfers
- Messaging applications

A simple way to remember the difference is:

```text
The internet is the road system.

The web is one type of traffic using those roads.
```

---

## 3. Clients and Servers

Most web communication involves two sides:

- A client
- A server

### Client

A client requests information.

In web development, the browser is usually the client.

Examples of browsers include:

- Microsoft Edge
- Google Chrome
- Firefox
- Safari

When you enter a website address, the browser asks a server for the files needed to display the site.

### Server

A server stores information and responds to requests.

A web server may send:

- HTML files
- CSS files
- JavaScript files
- Images
- Videos
- Data

The basic conversation looks like this:

```text
Browser:
"Please send me the webpage."

Server:
"Here are the files."
```

The browser then reads those files and builds the page.

---

## 4. What Happens When You Open a Website?

When you enter a website address into a browser, several steps occur.

Imagine entering:

```text
example.com
```

The process looks roughly like this:

```text
1. You enter the website address.

2. The browser looks for the website's server.

3. The browser sends a request.

4. The server receives the request.

5. The server sends back the required files.

6. The browser reads the HTML.

7. The browser loads the CSS.

8. The browser runs the JavaScript.

9. The completed webpage appears on the screen.
```

This can happen extremely quickly, but many systems are working together behind the scenes.

---

## 5. Domain Names

A domain name is the human-readable address of a website.

Examples include:

```text
github.com
google.com
wgu.edu
```

Domain names are easier for people to remember than long numerical addresses.

A domain name points toward the server where a website is hosted.

---

## 6. IP Addresses

Computers connected to a network use numerical addresses called **IP addresses**.

IP stands for **Internet Protocol**.

An example of an IPv4 address might look like:

```text
192.0.2.1
```

You usually do not need to memorize a website's IP address because domain names provide a more readable alternative.

A domain name is for people.

An IP address is used by computers and networks.

---

## 7. DNS

DNS stands for **Domain Name System**.

DNS translates domain names into IP addresses.

Think of DNS as the internet's contact list.

You know the name:

```text
example.com
```

DNS helps locate the numerical address associated with that name.

The simplified process is:

```text
Browser:
"Where can I find example.com?"

DNS:
"Here is the server's IP address."

Browser:
"Now I know where to send the request."
```

Without DNS, people would need to remember IP addresses for every website they visited.

---

## 8. Requests and Responses

Communication between a browser and server usually follows a request-and-response pattern.

### Request

The client asks for something.

Examples:

```text
Send me the homepage.

Send me garden.css.

Send me app.js.

Send me an image.
```

### Response

The server sends back a result.

The response may contain:

- The requested file
- Data
- A success message
- An error message

The cycle looks like this:

```text
Client Request
      ↓
Server Processes Request
      ↓
Server Response
      ↓
Browser Displays Result
```

This request-and-response model is one of the most important ideas in web development.

---

## 9. HTTP

HTTP stands for **Hypertext Transfer Protocol**.

A protocol is a set of rules for communication.

HTTP defines how browsers and web servers exchange information.

You can think of it as the shared language used during the request-and-response process.

For example:

```text
Browser sends an HTTP request.

Server sends an HTTP response.
```

---

## 10. HTTPS

HTTPS stands for **Hypertext Transfer Protocol Secure**.

HTTPS protects information while it travels between the browser and server.

It uses encryption to make the communication more difficult for others to read or alter.

You will commonly see a lock icon in the browser when a website uses HTTPS.

HTTPS is especially important when websites handle:

- Passwords
- Payment information
- Personal information
- Private messages
- Account details

The difference can be remembered like this:

```text
HTTP
Communication

HTTPS
Protected communication
```

---

## 11. Status Codes

When a server responds to a browser, it often includes a status code.

A status code helps explain what happened.

Some common examples include:

| Status Code | Meaning |
|-------------|---------|
| 200 | The request succeeded |
| 301 | The resource moved permanently |
| 403 | Access is forbidden |
| 404 | The requested resource was not found |
| 500 | The server encountered an error |

You may already recognize:

```text
404 Not Found
```

In your project, a `404` could appear if the browser requests:

```text
js/app.js
```

but the file does not exist at that location.

This is one reason file paths matter.

---

## 12. How the Browser Builds a Webpage

After receiving the files, the browser gives each technology a different responsibility.

### HTML

HTML provides structure and meaning.

Examples:

- Headings
- Paragraphs
- Navigation
- Sections
- Articles
- Buttons
- Links

### CSS

CSS controls presentation.

Examples:

- Colors
- Fonts
- Spacing
- Borders
- Layout
- Responsive behavior

### JavaScript

JavaScript adds behavior.

Examples:

- Responding to clicks
- Updating content
- Opening menus
- Saving information
- Changing classes
- Loading data

The browser combines all three:

```text
HTML
Structure

CSS
Appearance

JavaScript
Behavior
```

---

## 13. How Nurgle's Garden Loads

Your current project contains files such as:

```text
nurgles-garden/
├── index.html
├── css/
│   └── garden.css
└── js/
    └── app.js
```

When the browser opens `index.html`, it reads this line:

```html
<link rel="stylesheet" href="css/garden.css">
```

That tells the browser:

```text
Enter the css folder.

Find garden.css.

Load the stylesheet.
```

Near the bottom of the page, it reads:

```html
<script src="js/app.js"></script>
```

That tells the browser:

```text
Enter the js folder.

Find app.js.

Load and execute the JavaScript.
```

These are relative file paths.

The browser uses them to locate the connected files.

---

## 14. What Live Server Does

During development, you are using the Live Server extension in VS Code.

Live Server creates a small local web server on your computer.

Your browser may display an address similar to:

```text
http://127.0.0.1:5500
```

This address refers to a server running locally on your machine.

### Localhost

A local server is only being used on your own computer unless you intentionally expose it to a network.

The address:

```text
127.0.0.1
```

refers back to your own machine.

It is commonly called a loopback address.

The number:

```text
5500
```

is the port being used by Live Server.

A port helps identify a particular service running on a computer.

You do not need to memorize the technical details yet.

For now, remember:

```text
127.0.0.1:5500
```

means that your project is being served locally from your own computer.

---

## 15. Why Live Server Is Helpful

Live Server helps because it:

- Runs your project through a local web server.
- Refreshes the browser after saved changes.
- Makes development faster.
- Behaves more like a hosted website.
- Helps avoid some problems caused by opening files directly.

When the console displays:

```text
Live reload enabled.
```

that message means Live Server is watching the project for saved changes.

---

## 16. VS Code and the Browser Have Different Jobs

This was one of the first important lessons learned while connecting JavaScript.

### VS Code

VS Code is where the source code is written.

You use it to:

- Create files
- Edit code
- Organize folders
- Use the terminal
- Run Git commands

### Browser

The browser is where the website runs.

You use it to:

- View the webpage
- Test JavaScript
- Inspect HTML
- Inspect CSS
- Read console messages
- Diagnose network errors

A useful mental model is:

```text
VS Code is the workshop.

The browser is the testing ground.
```

Pressing **F12 in the browser** opens the browser's Developer Tools.

Pressing F12 while focused on VS Code does not open the browser console.

---

## 17. The Browser Console

The Console is part of the browser's Developer Tools.

It can display:

- JavaScript messages
- Errors
- Warnings
- Test values
- Debugging information

Your first JavaScript message was:

```javascript
console.log("🌿 The Garden awakens...");
```

The browser displayed:

```text
🌿 The Garden awakens...
```

It also showed:

```text
app.js:1
```

That means the message came from line 1 of `app.js`.

This confirmed that:

- The JavaScript file existed.
- The file path was correct.
- The HTML loaded the file.
- The browser executed the code.

---

## 18. A Simple Model of the Current Project

The current development flow can be pictured like this:

```text
You write code in VS Code
          ↓
You save the files
          ↓
Live Server serves the project
          ↓
The browser requests the files
          ↓
The browser receives index.html
          ↓
The browser loads garden.css
          ↓
The browser loads app.js
          ↓
The page appears and JavaScript runs
```

This is a simplified model, but it is accurate enough for the current stage of the project.

---

## 🏰 Example From Nurgle's Garden

The browser opens:

```text
index.html
```

The HTML requests:

```text
css/garden.css
```

and:

```text
js/app.js
```

The JavaScript file contains:

```javascript
console.log("🌿 The Garden awakens...");
```

The browser executes that instruction and displays the message in Developer Tools.

That single message proved that the browser successfully completed the entire chain.

---

## ⚠️ Common Mistakes

### Mistake 1: Confusing a filename with a path

Filename:

```text
app.js
```

Relative path:

```text
js/app.js
```

The filename identifies the file.

The path describes where to find it.

---

### Mistake 2: Creating a duplicated folder

If the `js` folder is already selected and you create:

```text
js/app.js
```

VS Code may produce:

```text
js/
└── js/
    └── app.js
```

When creating the file inside the selected `js` folder, type only:

```text
app.js
```

---

### Mistake 3: Opening Developer Tools in the wrong place

The browser console belongs to the browser.

To inspect the website:

1. Open the webpage.
2. Click inside the browser window.
3. Press **F12**.
4. Select **Console**.

---

### Mistake 4: Forgetting to save

Live Server usually reloads after a file is saved.

An unsaved change may not appear in the browser.

Use:

```text
Ctrl + S
```

to save the current file.

---

### Mistake 5: Looking only at the visible webpage

`console.log()` does not place text directly on the webpage.

It sends text to the browser console.

---

## ✅ Best Practices

- Keep project folders organized.
- Use clear filenames.
- Check relative paths carefully.
- Save files before testing.
- Use Live Server during development.
- Open Developer Tools in the browser.
- Read console errors instead of ignoring them.
- Test one small change at a time.
- Confirm that a file loaded before adding more code.

---

## 🧠 Learning Check

Can you answer these questions?

- What is the difference between the internet and the web?
- What is a client?
- What is a server?
- What does DNS do?
- What is the difference between HTTP and HTTPS?
- What does a `404` status code mean?
- What role does HTML play?
- What role does CSS play?
- What role does JavaScript play?
- What does Live Server do?
- What is the difference between `app.js` and `js/app.js`?
- Where should you press F12 to open browser Developer Tools?

---

## 📝 Practice Challenge

Without looking at the earlier sections, explain this path:

```text
css/garden.css
```

Your answer should identify:

- The folder name
- The filename
- The file type
- Why `index.html` uses the path

Then explain the difference between:

```text
app.js
```

and:

```text
js/app.js
```

---

## 🌱 Nurgling Notes

I learned that:

- The internet and the web are related, but they are not the same thing.
- A browser acts as a client.
- A server responds to browser requests.
- DNS connects readable domain names to numerical IP addresses.
- HTML, CSS, and JavaScript are separate files with different responsibilities.
- Live Server runs the project from my own computer.
- VS Code is where I write code.
- The browser is where the website runs.
- Developer Tools must be opened inside the browser.
- `app.js` is a filename.
- `js/app.js` is a relative file path.
- A missing or incorrect path can cause a `404` error.
- The console helped prove that JavaScript was working.

---

## Quick Review

```text
Internet
The worldwide network connecting devices.

Web
A system of websites and webpages using the internet.

Client
A program that requests information, such as a browser.

Server
A computer or program that responds to requests.

DNS
Translates domain names into IP addresses.

HTTP
Rules for exchanging web information.

HTTPS
Encrypted and protected HTTP communication.

HTML
Structure.

CSS
Appearance.

JavaScript
Behavior.

Live Server
A local development server used to run the project.

Console
A browser tool for messages, errors, and debugging.

Relative Path
A file location described from another file's position.
```

---

## Chronicle Reference

This chapter corresponds with the lore entry:

**The Garden Awakens**

It records the technical knowledge behind the moment Nurgle's Garden successfully executed its first JavaScript instruction.