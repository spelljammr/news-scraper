# 📰 All the News That's Fit to Scrape

### Overview
In this assignment, you'll create a web app that lets users view and leave comments on the latest news. But you're not going to actually write any articles; instead, you'll flex your Mongoose and Cheerio muscles to scrape news from another site.

---
### Installation and running locally
1. Open a terminal and navigate to your desired installation folder.
2. Run the following to clone the repository: `git clone https://github.com/ahydorn/news-scraper.git`
3. Navigate inside the newly created folder: `cd ./news-scraper`
4. Run `npm install` or simply `npm i` to install the required dependencies.
5. Enter the following in the terminal window to start the server: `node server.js`. Note that you may also use `nodemon server.js` if the __Nodemon.js__ package is installed. 
6. The app may now be run 

---
### Usage
1. At the bottom of the page, click __'Scrape'__. 'Scrape finished' will be displayed at the top of the screen.
2. Navigate back. At this point, you can click __'Articles'__ at the bottom of the page to see a JSON object view of the scraped articles, or click one of the articles listed in the center of the page.
2. Clicking a headline will bring up the __'Note box'__ at the bottom of the screen.
3. Within the fields of this box, you can enter a note about the article. Clicking __'Save'__ will save the note to that article. Clicking the headline again will reveal the saved note. 


---
### Technologies Used
* HTML
* Bootstrap
* Javascript
* jQuery
* Node
* Express
* Handlebars
* Mongoose
* Cheerio
* Axios
