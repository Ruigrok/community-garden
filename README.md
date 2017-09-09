# Community Garden
My family operates a CSA (community supported agriculture) business in the mountains of North Carolina, and it gave me inspiration for this project. This app allows users to make and manage weekly vegetable orders.

[Check out this app on Heroku](https://community-garden-app.herokuapp.com/ "Community Garden on Heroku")

---

## New Technologies Used

### MySQL and Sequelize
All of the vegetables (the routes to their images and their available quantities), users, and their associated orders are stored in MySQL. This was my first time using MySQL in a Node application, and I decided to use Sequelize for the ORM layer. This was also my first time routing to different pages and performing CRUD operations on user data. I'm pleased with the funcionality and the user-flow, but I'd like to revisting my routing code to clean it up a bit.

### Materialize and Handlebars
Handlebars turned out to be incredibly useful for generating the orders content. I even used it for displaying the vegetable images, and I was able to use a helper function to make them display properly in Materialize's row/column grid format. I enjoyed working with Materialize. It has the same basic grid structure as Bootstrap, and it has a lot of components and JS plugins.

### Demo
![Demo Gif](public/images/demo.gif)
