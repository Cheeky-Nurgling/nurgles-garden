# 🪲 Bestiary

The Bestiary records every bug encountered while building Nurgle's Garden.

Every bug defeated makes the fortress stronger.

---

# Bug 001

## Name

The Missing Backticks

## Symptoms

The Markdown preview looked broken.

Most of the document appeared as one giant code block.

## Cause

A Markdown code fence was opened but never closed.

Incorrect:

```markdown
```html

<h1>Hello</h1>
```

Correct:

````markdown
```html
<h1>Hello</h1>
```

---

## Bug 002

## name
The Missing Console

## Problem

Pressed F12 in VS Code instead of the browser.

## Cause

Developer Tools belong to the browser, not the editor.

## Solution

Open the website first.
Press F12 inside the browser window.

## Lesson Learned

VS Code is where code is written.

The browser is where code is executed.