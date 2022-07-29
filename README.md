# Coding Challenge "BikEEE"

1. Tasks
2. How to run this code in browser
3. Technology used
4. Points
5. For tests
6. Problem & Improvement
7. Future features
8. My thoughts...


## Tasks

(ref: Tech Trainee Coding Challenge BikEEE.pdf)
We just started a new online marketplace specialized on pedelec classified ads in the Berlin region called “BikEEE”. This is THE place where trusted private sellers and smart buyers meet for trading electric bikes. We already have a website and mobile apps for Android / iOS to upload and search for pedelecs.
Now we want to bring the next big feature to the marketplace, an overview of the models that are currently offered most often on BikEEE.

1. Develop a small application or service that lists the three pedelec models that are currently most frequently advertised on BikEEE. A CSV dump of the current stock database is listed in the appendix.

2. In case you did not start with it: write some tests to validate if your code for finding the most popular models works.

3. Optional bonus task: Sometimes our BikEEE users provided a slightly different model name for the same model. Adjust your service to properly aggregate these when counting.

4. We would love to hear your feedback about this challenge - it would be very helpful if you leave some comments in the readme!

5. After a maximum of seven days (the exact hour does not matter), hand in all your files and a readme with some instructions how to run your code in a single ZIP package.


## How to run this code in browser

In your terminal in this project,

1. install express

```
npm install express
```

2. run index.js

```
node index.js
```

and open http://localhost:8000/ in your blowser.


## Technology used

HTML, CSS, Bootstrap, JavaScript, Node.js, Express


## Points

The hardest point to implement was the part of creating counterArray(from line 133, app.js), push modelnames with counter to counterArray and then sort biggest to smallest counter numbers.

First I created an array only with counters and compared but couldn't find out what each model names were. I googled for long time and solved wtih creating an array of an ofject like {model: -- , counter: -- }. I wwould like to try to find simpler and easier approach to do this process.

Also, when I write this Readme, I noticed that I need to write the instructions how to run which I have never really had in my mind before when I work a project on my own. To do this, I added a index.js for Node.js, this was also hard for me.


## For tests

I am not really familier with JavaScript unit testing so far, I did testing manually with checking on my browser with VScode 'Live Server' extention which run the server automatically every time I save the data.


## Problem & Improvement

I wrote codes with skills what I have for now but I would like to find out if there are any better/simpler way to inplement to do the same function.
Also there is quite empty in the page. In short, I will add and implement:

- re-implement functions in better/simpler way
- The information of each popular bikes
- Other pages (Features, Pricing, About us)
- Testimonials
- More designs & make responsible


## My thoughts...

Why I chose JavaScript for this project because I have leaned JavaScript longer than any other programming languages and thought I could do my best with JavaScript.

And the reason why I like JavaScript is that there's many possibility, front-end and back-end, many frameworks, evolving and fun!! I feel that front-end is more interesting at this moment but I would like to learn a lot more about server side in the future as well.

This assignment was really challenging for me but I learned new things a lot and had so much fun. Hope I will get a fun and nice assignment like this again! :)

Thank you very much! 
