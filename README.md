# Coding Challenge "BikEEE"

## Tasks

(ref: Tech Trainee Coding Challenge BikEEE.pdf)
For a new online marketplace specialized on pedelec classified ads in the Berlin region called “BikEEE”, bring the next big feature to the marketplace, an overview of the models that are currently offered most often on BikEEE.

1. Develop a small application or service that lists the three pedelec models that are currently most frequently advertised on BikEEE using given CSV.

2. In case you did not start with it: write some tests to validate if your code for finding the most popular models works.

3. Optional bonus task: Sometimes our BikEEE users provided a slightly different model name for the same model. Adjust your service to properly aggregate these when counting.

## Required environment

Node v16.15.0

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

and open http://localhost:8000/ in your browser.

## Technology used

HTML, CSS, Bootstrap, JavaScript, Node.js, Express, Googlefont

## Tests

I did testing manually with checking on my browser below and passed:

- Chrome
- Firefox
- Brave
- Opera
- Safari

## Points

The hardest point to implement was the part of creating counterArray(from line 133, app.js), push modelNames with counter to counterArray and then sort biggest to smallest counter numbers.

First, I created an array only with counters and compared but couldn't find out what each model names were. I tried out and googled for a long time and solved by creating an array of an object like {model: -- , counter: -- }. I would like to try to find simpler and easier approach to do this process.

Also, when I write this Readme, I noticed that I need to write the instructions how to run for the reader, which I have never really had in my mind before when I work a project on my own. To do this, I added an index.js for Node.js, this was also hard for me.

## Problem & Improvement

I noticed that there's more than one model as third popular which are searched twice. I couldn't implement to pick only one model of these two, such as by searching date, alphabetical order or something like this. If I had more time, I would improve to pick one when any models searched same number of times.

Also, I wrote codes with the skills what I have now, but I would like to find out if there is any better/simpler way. (E.g. the part I created the counter functions, I repeated the same function in different models but can be implemented with a loop, if I had more time.)

Additionally, there is quite empty in the page. In short, I would add and improve:

- The information of each popular bikes
- Other pages (Features, Pricing, About us)
- Testimonials
- More designs & make them responsible

## My thoughts...

Why I chose JavaScript for this project because I have learned JavaScript longer than any other programming languages and thought I could do my best with JavaScript.

And the reason why I like JavaScript is that there's many possibilities, front-end & back-end, many frameworks, evolving a lot and fun!! I feel that front-end is more interesting at this moment, but I would like to learn a lot more about the server side in the future as well.

This assignment was very challenging for me, but at the same time, I learned lots of new things and had so much fun. I imagined how the real works go, get errors, find solutions, fix and so on. This is really fun and exciting for me. :)

Thank you very much!

All the code by Yui Iida
