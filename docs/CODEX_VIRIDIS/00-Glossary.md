# 📚 Glossary

> *"Every unfamiliar word is only knowledge waiting to be claimed."*

This glossary contains the programming and development terms introduced while building **Nurgle's Garden**.

The entries are arranged alphabetically so they are easier to find and review.

---

## Accessibility

Designing software so it can be used by as many people as possible, including people who use screen readers, keyboard navigation, or other assistive technology.

---

## addEventListener

A method that attaches a listener to an element, so a function runs automatically when a specific event occurs.

```javascript
sanctuaryLink.addEventListener("click", function () {
  console.log("You clicked the Sanctuary link!");
});
```

---

## Argument

The actual value supplied to a function when it is called.

```javascript
announceChamber("The Forge");
```

`"The Forge"` is the argument.

---

## Attribute

Additional information placed inside an HTML opening tag.

Example:

```html
<a href="#sanctuary" class="navigation-link">
```

In this example, `href` and `class` are attributes.

---

## Boolean

A data type that can only ever be `true` or `false`.

```javascript
const isSanctuaryActive = true;
```

---

## Browser

A program that reads and displays websites.

Examples include Microsoft Edge, Google Chrome, Firefox, and Safari.

The browser is where HTML, CSS, and JavaScript are executed.

---

## Class

A reusable name assigned to one or more HTML elements.

Classes are commonly used by CSS and JavaScript.

Example:

```html
<a class="navigation-link">
```

A class is selected in CSS with a period:

```css
.navigation-link {
    text-decoration: none;
}
```

---

## classList

A property that provides access to an element's CSS classes, so they can be added or removed with JavaScript.

```javascript
link.classList.add("active");
otherLink.classList.remove("active");
```

---

## Concatenation

Joining two strings together using `+`.

```javascript
chamberName + " has been entered."
```

---

## Console

A tool inside the browser's Developer Tools where developers can view messages, errors, and debugging information.

Example:

```javascript
console.log("🌿 The Garden awakens...");
```

---

## const

A keyword used to declare a variable whose value cannot be reassigned after it is set.

```javascript
const gardenerName = "The Cheeky Nurgling";
```

---

## CSS

CSS stands for **Cascading Style Sheets**.

It controls the appearance and layout of a webpage, including colors, fonts, spacing, borders, and responsive behavior.

---

## Developer Tools

A collection of tools built into a web browser for inspecting and debugging websites.

Developer Tools can be opened by pressing **F12 inside the browser**.

Common panels include:

- Elements
- Console
- Sources
- Network
- Issues

---

## DOM

Short for **Document Object Model**. The live structure a browser builds in memory from an HTML file, which JavaScript can select and change.

---

## Element

A complete piece of HTML, usually consisting of an opening tag, content, and a closing tag.

Example:

```html
<h1>Nurgle's Garden</h1>
```

---

## Event

Something that happens on a webpage, such as a click, a key press, or a mouse movement, that JavaScript can listen for and react to.

---

## File Name

The name of a specific file.

Example:

```text
app.js
```

This is different from a file path.

---

## File Path

The route used to locate a file or folder.

Example:

```text
js/app.js
```

This path means:

1. Enter the `js` folder.
2. Find the file named `app.js`.

---

## for...of loop

A loop that visits every item in a list, one at a time, running the same block of code for each one.

```javascript
for (const link of allLinks) {
  console.log(link.textContent);
}
```

---

## Function

A named, reusable block of instructions that only runs when it is called.

```javascript
function announceGarden() {
  console.log("The Garden stirs...");
}
```

---

## Git

A version-control system used to record changes to files over time.

Git allows developers to create commits, inspect history, compare changes, and restore earlier versions.

---

## GitHub

An online platform used to store and share Git repositories.

Git runs locally on the computer.

GitHub stores a remote copy of the repository online.

---

## HTML

HTML stands for **HyperText Markup Language**.

It provides the structure and meaning of a webpage.

---

## ID

A unique name assigned to one HTML element.

Example:

```html
<main id="sanctuary">
```

An ID is selected in CSS with a hash symbol:

```css
#sanctuary {
    min-height: 100vh;
}
```

IDs can also be used as link destinations:

```html
<a href="#sanctuary">Sanctuary</a>
```

---

## JavaScript

A programming language used to add behavior and interaction to a webpage.

JavaScript can respond to clicks, update content, store information, and change the page while it is running.

---

## let

A keyword used to declare a variable whose value can be reassigned later.

```javascript
let plagueCount = 3;
plagueCount = 7;
```

---

## Live Server

A VS Code extension that runs a local development server and automatically reloads the browser after saved changes.

The current project runs at an address similar to:

```text
127.0.0.1:5500
```

---

## Markdown

A lightweight formatting language used for documentation files such as `README.md`.

Markdown supports headings, lists, links, tables, quotes, task lists, and code blocks.

---

## NodeList

A list of elements returned by `querySelectorAll()`, numbered starting at `0`.

```text
NodeList(6)
0: a.navigation-link.active
1: a.navigation-link
length: 6
```

---

## Number

A data type for numeric values, written without quotation marks.

```javascript
const chamberCount = 6;
```

---

## Parameter

A placeholder listed inside a function's parentheses, filled in with an argument when the function is called.

```javascript
function announceChamber(chamberName) {
  console.log(chamberName + " has been entered.");
}
```

`chamberName` is the parameter.

---

## querySelector

A method that finds the first element on a page matching a CSS selector.

```javascript
const sanctuaryLink = document.querySelector(".navigation-link.active");
```

---

## querySelectorAll

A method that finds every element on a page matching a CSS selector, returned as a `NodeList`.

```javascript
const allLinks = document.querySelectorAll(".navigation-link");
```

---

## Relative Path

The location of one file compared with another file.

From the root-level `index.html`, this path:

```text
js/app.js
```

points to `app.js` inside the `js` folder.

---

## Repository

A project folder tracked by Git.

A repository contains project files and the history of changes made to them.

---

## Responsive Design

Designing a website so it adapts to different screen sizes, including desktop computers, tablets, and phones.

---

## Semantic HTML

Using HTML elements according to their meaning instead of using `<div>` for everything.

Examples include:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

Semantic HTML improves organization, accessibility, and maintainability.

---

## Source Code

The human-readable instructions written by a developer.

HTML, CSS, JavaScript, and Markdown files are all forms of source code in this project.

---

## String

A data type for text, written inside quotation marks.

```javascript
const forgeName = "The Forge";
```

---

## typeof

An operator that reports the data type of a value.

```text
typeof forgeName
```

Returns `"string"`.

---

## Variable

A named place to store a value.

```javascript
const gardenerName = "The Cheeky Nurgling";
```

---

## VS Code

Visual Studio Code is the code editor used to create and manage Nurgle's Garden.

VS Code is where the code is written.

The browser is where the website runs.

---

## Viewport

The visible area of a webpage inside the browser.

This HTML setting helps the page display correctly on mobile devices:

```html
<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>
```