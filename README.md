# Assignment 5 — JavaScript Basics

A simple student project about DOM manipulation and events. Built with HTML, CSS and plain JavaScript, without frameworks or extra packages.

## Student

Before submitting, replace `Your Full Name` and `Your Group` in `assets/student.js`. This information appears on every page and is printed in the console on the first page.

## Run

Open `index.html` in a browser. No installation or build is needed. Use the navbar to move between the four separate pages. The first page shows the required greeting alert; close it to use the page. Open Developer Tools → Console to see the variables and arithmetic results.

## Tasks

| Task | Page | Script | Behavior |
| --- | --- | --- | --- |
| 0 | index.html | assets/basics.js | Name and group in console; greeting alert |
| 1 | index.html | assets/basics.js | String, number, boolean, arithmetic and concatenation |
| 2 | dom.html | assets/dom.js | Button changes paragraph text |
| 3 | dom.html | assets/dom.js | Buttons change background and font size |
| 4 | dom.html | assets/dom.js | Add an li; remove the last li |
| 5 | events.html | assets/events.js | Mouseover changes color; mouseout restores it |
| 6 | events.html | assets/events.js | Keyup displays current input value |
| 7 | events.html | assets/events.js | Addition, subtraction, multiplication and division |
| 8 | todo.html | assets/todo.js | Array of tasks; add, delete and complete |

## Publish with GitHub Pages

1. Create a GitHub repository and upload the contents of this folder to its root, including the `.github` folder. Use the `main` branch.
2. Open repository Settings → Pages → Build and deployment → Source → GitHub Actions.
3. Open Actions → Publish GitHub Pages → Run workflow. Future pushes to main also deploy automatically.
4. After deployment succeeds, copy the website URL from the workflow or Settings → Pages.
5. Add your repository and published website links below, then submit the repository link to Moodle by the course deadline.

Repository link: add after creating the repository.

Published website link: add after deployment.

Alternatively, in Settings → Pages choose Deploy from a branch, main, / (root), and Save. The workflow file is not needed with that option.

## Alternative publication with Netlify

Import the GitHub repository in Netlify, leave the build command empty, and set the publish directory to `.`. Deploy the project, then add its URL above. Keep the GitHub repository accessible to the instructor.

## Manual checks before submission

- First page: greeting text is exactly “Hello, JavaScript World!”. Console contains the correct student name and group, arithmetic results and concatenated string.
- DOM page: change paragraph, background and font size; add several items; remove them all; pressing Remove Item on an empty list does not throw an error.
- Events page: move the mouse in and out; type and erase text; calculate 12 + 4 = 16, 12 - 4 = 8, 12 * 4 = 48 and 12 / 4 = 3. Division by zero displays an explanation.
- To-do page: add a task with Enter or the button; mark it complete; uncheck it; delete it. Whitespace-only input is rejected. Reloading clears tasks as required.
- Test navigation on each page and check the layout on a small screen.

## Defense

Be ready to explain or modify your own code during the practice lesson. The assignment includes an individual defense and an in-class live coding challenge.
