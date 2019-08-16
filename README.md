# 📰 All the News That's Fit to Scrape

### Overview
In this assignment, you'll create a web app that lets users view and leave comments on the latest news. But you're not going to actually write any articles; instead, you'll flex your Mongoose and Cheerio muscles to scrape news from another site.

---
### Installation and running locally
1. Open a terminal and navigate to your desired installation folder.
2. Run the following to clone the repository: 
```
git clone https://github.com/ahydorn/news-scraper.git
```
3. Navigate inside the newly created folder: 
```
cd ./news-scraper
```
4. Install the required dependencies using the following command:
```
npm i
```
5. Enter the following in the terminal window to start the server: 
```
node server.js
```
Note that you may also use `nodemon server.js` if the __Nodemon.js__ package is installed.  
6. The app may now be run by opening your browser and entering the following in the URL bar:
```
localhost:3000
```
---
### Usage
1. At the top of the page, click __Scrape__. 'Scrape finished' will be displayed at the top of the screen. 
2. Navigate back. At this point, you can click __Articles__ at the top of the page to see a JSON object view of the scraped articles, or click one of the articles listed in the center of the page.
2. Clicking a headline will bring up the __Note box__ on the right side of the screen.
3. Within the fields of this box, you can enter a note about the article. Clicking __Save Note__ will save the note to that article. Clicking the headline again will reveal the saved note.

*See below for example screenshots*
<img width="977" alt="Screen Shot 2019-07-23 at 8 18 56 PM" src="https://user-images.githubusercontent.com/40612623/61762921-65684300-ad88-11e9-891b-7ec76b693173.png">
<img width="534" alt="Screen Shot 2019-07-23 at 8 19 31 PM" src="https://user-images.githubusercontent.com/40612623/61762928-6ac58d80-ad88-11e9-8ef0-f7cff347bbd0.png">

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
