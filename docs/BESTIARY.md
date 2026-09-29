# 🪲 Bestiary

>*"Every bug defeated becomes another lesson remembered."*

---

The Bestiary records every bug encountered while building Nurgle's Garden.

Every bug defeated makes the fortress stronger.

---

# 🐛 Bug 001

## Name

The Missing Backticks

## Symptoms

The Markdown preview looked broken.

Most of the document appeared as one giant code block.

## Cause

A Markdown code fence was opened but never closed.

Incorrect:

`````html
````html

<h1>Hello</h1>
````

Correct:

````html
```html
<h1>Hello</h1>
```
````
`````

---

# 🐛 Bug 002 — The Missing Console

## Problem

The JavaScript console message did not appear.

## Investigation

JavaScript was correctly linked.

The browser loaded `app.js`.

The issue was that Developer Tools were opened inside VS Code instead of the web browser.

## Solution

Open the website in the browser.

Press **F12** inside the browser.

Select the **Console** tab.

## Lesson Learned

VS Code is where code is written.

The browser is where JavaScript runs.

---

# 🐛 Bug #003 — The Mysterious Git Editor

## Problem

Git opened a strange text editor instead of asking for a commit message.

## Cause

The commit was started without using the `-m` flag.

Git launched Vim to allow the commit message to be written manually.

## Solution

Either:

git commit -m "Your message"

or

Learn the basic Vim commands.

## Lesson Learned

Git isn't broken.

It was waiting for a commit message.

---

# 🐛 Bug #004 — The Fence That Returned

## Problem

The Lore chapter rendered as one long code block on GitHub.

## Cause

A code fence around a `console.log` line was opened but never closed.

The same mistake as Bug 001, in a different file.

## Solution

Add the closing three backticks below the code line.

Check Markdown preview (`Ctrl+Shift+V`) before pushing.

## Lesson Learned

A bug defeated once can still return elsewhere.

Check the preview before every push, not just after being told something looks wrong.

---

# 🐛 Bug #005 — Standing in the Wrong Room

## Problem

`git status` returned `fatal: not a git repository (or any of the parent directories): .git`.

## Cause

The terminal was open in `C:\Dev\Projects`, one folder above the project.

Git only works from inside the exact folder that holds `.git`.

## Solution

Run `dir` to see what's in the current folder.

`cd` into the correct one, then try again.

## Lesson Learned

When Git says it can't find a repository, check location first.

---

# 🐛 Bug #006 — The Fortress Built on Cloud

## Problem

The project folder went missing, and Windows Search couldn't find it either.

## Cause

The project lived inside a OneDrive-synced Documents folder.

OneDrive was syncing Git's internal files, including `FETCH_HEAD`.

## Solution

Move the whole project folder, `.git` included, to a plain local folder outside OneDrive.

Confirm with `git status` and `git remote -v`.

## Lesson Learned

Git doesn't care where a folder lives.

Cloud-sync tools do, and they can interfere without any visible error.

---