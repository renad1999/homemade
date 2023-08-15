# Homemade README

Description


I decided to build a recipe food blog called Homemade out of my passion for reading and exploring other people's recipes. I've always been fascinated by the opportunity to learn new techniques and cooking tips and tricks.  I wanted to create a space where friends and family can easily contribute and share their own recipes, creating a collective resource for everyone to learn from and refer back to in the future.

Deployment link

https://homemade-recipe-blog.fly.dev/

Getting Started/Code Installation

The website offers an option to log in using your Gmail account, which I have successfully implemented using OAuth. Once logged in, users will have the ability to add their own recipes and delete them as well.


Timeframe & Working Team (Solo/Pair/Group)

This was an independent project expected to be completed in a week.

Technologies Used

The technologies used include frontend and backend - Node.js, Express frameworks, CSS and HTML.

Brief

Overview This second project will be your first adventure into building a full-stack application. You'll be building a Node/Express/MongoDB app from the ground up yourself. This is exciting and by the end of this unit we will have given you the all of the tools needed to build your app. You get to decide what you want to build - as long as it meets the technical requirements outlined below. You will be working individually for this project. You'll be designing and coding the app yourself. However, you will have access to up to 3 fifteen-minute one-on-one sessions with your instructors. Additionally as part of the project's requirements, you'll be required to take and pass a Project Assessment.

Project Presentations - __________: You will have a maximum of 10 minutes to present your project following these guidelines: Introduce the Project: ☐ Intro your project by paraphrasing the README. Demonstrate the Project: ☐ Launch the deployed app by clicking the link in the README. ☐ Log out and back in to demonstrate that OAuth is working. ☐ Demonstrate the features of the app, including full-CRUD data operations. Show/discuss your code: ☐ Show the "main" Mongoose model. ☐ Show your favorite EJS template. ☐ Show the controller for the main model. Share the experience: ☐ What was your biggest challenge? ☐ What are your key learnings/takeaways? Q & A + Feedback

Technical Requirements Your App Must: ☐ Have at least 2 data entities (data resources) in addition to the User Model - one entity that represents the main functional idea for your app and another with a One:Many or Many:Many relationship with that main entity (embedded or referenced). ☐ Use OAuth authentication. ☐ Implement basic authorization that restricts access to features that need a logged in user in order to work (typically CUD data operations) by "protecting" those routes from anonymous users using the ensureLoggedIn middleware from the OAuth lesson. In addition, ensure that editing and deletion of a data resource can only be done by the user that created that data (this is done in the controller - refer to the Guide to User-Centric CRUD). ☐ Have full-CRUD data operations somewhere within the app's features. For example, you can have functionality that Creates & Updates a post and satisfy Delete functionality by implementing the ability to delete comments. ☐ Be styled such that the app looks and feels similar to apps we use on a daily basis - in other words, it should have a consistent and polished user interface. ☐ Be deployed online (Heroku). Optionally, Your App May: ☐ Consume a third-party API. If you choose to implement this option, it's likely that the data from the API will be a key data resource in your app, therefore it's important to consider how to implement whatever CRUD data operations will apply. For example, how will data from the API find its way into your database? Be sure to discuss with an instructor when planning your app's features. ☐ Expose its own API where it returns data resources as JSON.

Necessary Deliverables ☐ A working full-stack app that meets or exceeds the above technical requirements, built by you, and hosted on Heroku. A README.md file with these sections (here's a basic template): ☐ App Title: Contains a description of what the app does and optional background info. ☐ Screenshot(s): A screenshot of your app's landing page and any other screenshots of interest. ☐ Technologies Used: List of the technologies used. ☐ Getting Started: Include a link to the deployed app and your Trello board with the project's planning. ☐ Next Steps: Planned future enhancements (icebox items). Note: Don't underestimate the value of a well crafted README.md. The README.md introduces your project to prospective employers and forms their first impression of your

Planning


My ERD diagram showed the relationship between my data entities. 
 The relationship between the user and recipe was One:Many and between recipe and comments was one:Many

<img width="1145" alt="Screenshot 2023-06-01 at 11 42 33" src="https://github.com/renad1999/homemade/assets/112344006/3c11afc1-0725-4f32-9b78-c08b62609ffd">

I used trello boards to write down everything I needed to get done using icebox, MVP and completed. This screenshot was taken while I was doing my project. This helped me organize tasks.

<img width="1169" alt="Screenshot 2023-08-15 at 20 29 01" src="https://github.com/renad1999/homemade/assets/112344006/4626a8f4-a523-44fc-9470-b26813bcf17d">

Build Process


<% recipes.forEach(function(recipe){ %>
<% if (user?._id.equals(recipe.user)) { %>

<form action="/recipes/<%= recipe._id %>?_method=DELETE" method="POST" class="delete-form">
<button type="submit" class="delete-button">X</button>
   </form>
   <% } %>
<% }) %>


The code above was implemented to control the deletion of recipes, ensuring that only the user who posted a recipe can delete their own recipe. It checks if the current user matches the recipe's owner before displaying the delete button.
After confirming that this functionality works as intended, I found it really impressive and couldn't contain my excitement about it! It adds an extra layer of security and personal control to the recipe blog.



<img class="resize-pic" src="<%= recipe.imageUrl %>">



The impact of this single line of code cannot be understated—it brought the images in my recipe blog to life. When designing the recipe form, I wanted to give users the ability to include an image URL. However, implementing this feature worried me, as I had never done it before. But to my delight, this seemingly straightforward line of code worked like magic. It effortlessly transformed the image link into a vibrant, visually appealing picture on the blog. Witnessing this transformation was truly amazing and instantly made it one of my favorite pieces of code. It not only solved a challenging problem but also instilled a sense of accomplishment and confidence in my ability to tackle new features with simplicity and elegance.



recipeSchema.methods.deleteRecipe = async function (recipeId) {
    try {
      await this.model('Recipe').deleteOne({ _id: recipeId });
    } catch (error) {
      throw new Error('Failed to delete recipe');
    }
  };


The deleteRecipe method is added to a Mongoose schema. It takes a recipeId as input, which is the ID of the recipe to be deleted.
Using the Mongoose model for "Recipe," it deletes the recipe with the given recipeId from the MongoDB collection.
If there's an error during deletion, it throws an error with the message "Failed to delete recipe."



function formatBody(body){ return { ...body, ingredients: body.ingredients.trim().split(/\s*,\s*/), } }



Another simple code I found so useful was the code above. This bit of code sets up a function called formatBody in JavaScript. Imagine you have a bunch of information packed into an object, and you pass that object as input to this function. What the function does is it takes the list of "ingredients" from that object and tidies it up. First, it trims away any unnecessary spaces from the start or end of the ingredient list. Then, it splits the ingredients into separate parts, making sure to consider the commas and spaces around them. Once the ingredients are all separated, the function puts them into an array. Finally, the function creates a new version of the input object, keeping all the original stuff, but replacing the original messy ingredients with the nicely organized array of ingredients. The end result is that this function takes your messy ingredients, cleans them up, and returns the whole object with the organized ingredients.


const ensureLoggedIn = require('../config/ensureLoggedIn');

// Controllers
const commentsCtrl = require('../controllers/comments');

// staring endpoint: /

//POST route/recipes/:id/comments
router.post('/recipes/:id/comments', ensureLoggedIn, commentsCtrl.create);

This code above was very simple yet effective. First, it checks if someone trying to leave a comment is actually logged into the website. If they're not logged in, it won't let them leave a comment. If they are logged in, it goes to a special part of the code that's in charge of handling comments. This part knows how to create new comments and put them in the right place.

What I learned from this code is that it's important to make sure only the right people can have access to do certain things on a website. In this case, it's making sure only logged in users can leave comments. 



Challenges

One of the significant challenges I faced early on in the coding process was encountering an error that was crashing my entire website. The error message stated "user not defined," and despite meticulously reviewing my code line by line and making sure there were no mistakes, I couldn't figure out the root cause. I even went as far as rewriting portions of my code, but the issue persisted.
After spending over a day struggling with this error and reaching a point of frustration, I decided to seek help from my instructor. It turned out that the problem was related to the order of my code in the server.js file. Specifically, I had placed the following lines in the incorrect order:



require('./config/database'); 
('./config/passport');



It hadn't occurred to me that the order of middleware and configuration setup could have such a significant impact. When my instructor pointed out this simple mistake, it made perfect sense. I learned a valuable lesson about the importance of the order in which middleware and configurations are implemented.
This experience taught me the significance of careful organization and placement of code, especially when it comes to middleware and configuration setups. Even the simplest mistakes can have a profound impact on the functionality of the application. Moving forward, I now prioritise ensuring the correct order and placement of middleware and configurations to avoid similar issues in the future.



Wins


Throughout the development of this recipe blog project, I took on the task of completing it individually. This presented a unique opportunity for me to showcase my ability to manage the entire development process independently. Here is a more detailed elaboration on this accomplishment:


Project planning: I started by carefully planning the project, defining its scope, and identifying the key features and functionalities to be implemented.


Task organization: With the project plan in place, I organized the tasks into manageable units and prioritized them based on their dependencies and importance. Breaking down the project into smaller tasks helped me maintain focus and allowed for efficient progress tracking.


Setting realistic goals: During the planning phase, I set realistic goals for each task, considering factors such as complexity, time constraints, and available resources. By setting achievable goals, I ensured that I maintained a steady pace of progress and minimized the risk of burnout or missing deadlines.


Adherence to deadlines: Throughout the development process, I consistently adhered to the set deadlines and milestones. Meeting the deadline demonstrated my ability to work independently and deliver results in a timely manner.


Problem-solving and resourcefulness: Working independently allowed me to develop strong problem-solving skills. Whenever I encountered challenges or technical issues, I took ownership of finding solutions. This involved conducting research, seeking guidance from online resources and forums, and leveraging my knowledge and expertise to overcome obstacles.



I am very proud to have a fully functioning website.

Key Learnings/Takeaways

Through the process of creating a recipe blog using Mongoose and MongoDB, I have gained several key learnings and takeaways:
Data modeling with Mongoose: I learned how to design and structure my recipe data using Mongoose schemas. This involved defining the various fields, data types, and relationships between different entities, such as recipes, users, and categories.


Integrating MongoDB: By working with MongoDB as the database for my recipe blog, I gained hands-on experience in connecting to the database, performing CRUD (Create, Read, Update, Delete) operations.


User authentication and authorization: I implemented user authentication features using OAuth. I also learned how to enforce authorization rules to ensure that only authenticated users can add or delete their own recipes.

Handling and managing relationships between entities, this has taught me the importance of properly establishing and maintaining these connections in the database.


These key learnings and takeaways have provided me with valuable insights into working with Mongoose and MongoDB for developing my recipe blog. I can now apply this knowledge to future projects involving data modeling, database integration, and user authentication in the context of web development.


Bugs


Thankfully i have no apparent bugs

Future Improvements

 One aspect I'd like to focus on is perfecting the styling and enhancing the visual appeal. I want to ensure a visually appealing design that showcases my recipes in an inviting way, paying attention to details like color schemes, typography, and layout.

 Another enhancement I would like  is implementing meal categories such as breakfast, lunch, dinner, and desserts. This categorization would make it easier for readers to navigate and find recipes based on their specific mealtime needs and preferences.

 Integration of video content. Allowing users to add videos to their recipes would provide visual demonstrations of cooking techniques, tips, and tricks, making it more engaging and accessible for readers to follow along.

 By incorporating these improvements, I hope to create a food blog that offers a pleasant user experience and becomes a reliable resource for culinary inspiration and learning. Gathering feedback and adapting to the evolving needs of my readers will be crucial in refining the blog over time.

