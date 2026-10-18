# LUME Projects Inc. - Business Website
A responsive website I'm developing for LUME Projects Inc., a company that offers two services: business consulting and decluttering.

**[View Live Demo](https://kristinabbbb.github.io/LUME-Website/)**

## About the Project
The goal of this project is to create a website that brings both of LUME's services together while still giving each one its own space.

The homepage acts as the entry point to the website. It introduces the company and displays two large panels, one for Business Consulting and one for Decluttering Services. Visitors can select either panel to navigate to the corresponding service website.

I'm building the website from scratch using HTML, CSS, and JavaScript, with a focus on making the layout reponsive and keeping the navigation simple.

## How It Works
The homepage uses a split-screen layout to display the two sevices side by side on larger screens. On smaller screens, the layout adjusts so that the panels remain easy to view and interact with.

Each panel contains a background image, the name of the sevice and a link to its corresponding page.

The individual service pages are still under development, so I've temporarily added a dialog that appears when either panel is clicked. This lets visitors know that a service isn't available yet without sending them to an unfinished page.

Once the service pages are ready, I'll remove the temporary dialog functionality and the esisting links will take visitors directly to those pages.

## Temporary Service Dialogs
Since the individual service pages aren't finished yet, I added interactive dialogs that appear when visitors click either service panel.

Instead of changing or removing the original navigation links, I used JavaScript to temporarily intercept clicks and display a native HTML `<dialog>` element. The script also updates the dialog's heading depending on which service was selected, so both panels can share the same dialog.

Visitors can close the dialog using the Close button, the Escape key, or by clicking outside it.

I also added ARIA attributes through JavaScript to identify the links as dialog triggers. This way, when the service pages are ready, I can simply disconnect the temporary JavaScript and CSS files, and the original links will work as intended again.

## Technologies Used
- **HTML**: Page structure and content
- **CSS**: Layout, responsive design, typography, and styling
- **JavaScript**: Temporary interactive dialogs for the service links
- **GitHub Pages**: Hosting the live website.

## Running the Project
You can view the current version through the [live website](https://kristinabbbb.github.io/LUME-Website/).

To run it locally, clone the repository and open `index.html` in your browser.
```bash
git clone https://github.com/KristinaBBBB/LUME-Website.git
```
No additional installations or dependencies are required.
