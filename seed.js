var mongoose = require('mongoose');
var Exercise = mongoose.model('exercises');

var exercisesSeed = [
  {
    name: 'Basic HTML',
    description: 'Beginner HTML',
    tags: ['html, css']
  },
  {
    name: 'CSS Card Flip',
    description: 'Overwhelming CSS for Beginners',
    tags: ['css']
  },
{
    name: 'JavaScript Browser Basics ',
    description: 'JS for noobs',
    tags: ['javascript, css']
  },
  {
    name: 'JavaScript Conditionals',
    description: 'Intro to conditionals',
    tags: ['javascript']
  },
  {
    name: 'JavaScript Loops- part 1',
    description: 'Intro to loops',
    tags: ['javascript']
  },
  {
    name: 'JavaScript Functions- part 1',
    description: 'Intro to functions',
    tags: ['javascript']
  },
  {
    name: 'JavaScript Functions- part 2',
    description: 'Continuation of functions',
    tags: ['javascript']
  },
  {
    name: 'JavaScript Iteration',
    description: 'Understanding iterations',
    tags: ['DOM, loops, javascript']
  },
  {
    name: 'JavaScript Match Maker',
    description: 'Matching up teachers and students in JS',
    tags: ['data structures, conditionals, booleans, functions, javascript']
  },
  {
    name: 'JavaScript- Deck of Cards',
    description: 'Making a deck of cards on the DOM',
    tags: ['algorithms, DOM, javascript, functions']
  },
  {
    name: 'CSS Grid System',
    description: 'Understanding bootstrap and css',
    tags: ['css, box model, display, position']
  },
  {
    name: 'CSS Exercises',
    description: 'Working with design',
    tags: ['css']
  },
   {
    name: 'CSS Bootstrap Exercise',
    description: 'Working with Bootstrap design',
    tags: ['css, bootstrap']
  },
  {
    name: 'JavaScript Tip Calculator',
    description: 'Doing math with JavaScript',
    tags: ['javascript, DOM']
  },
  {
    name: 'CSS Media Queries and Responsive Design',
    description: 'Bootstrap on various devices',
    tags: ['css, responsive']
  },
  {
    name: 'Boxes- jQuery Playground',
    description: 'Understanding jQuery on the DOM',
    tags: ['jquery, javascript']
  },
  {
    name: 'jQuery Calculator',
    description: 'Doing math with jQuery',
    tags: ['jquery']
  },
    {
    name: 'jQuery Page Analytics',
    description: 'Seeing user data anaylsis',
    tags: ['jquery']
  },
   {
    name: 'JavaScript Event Delegation',
    description: 'Understanding added items delegation',
    tags: ['javascript']
  },
   {
    name: 'JavaScript Conditionals, Loops, Testing',
    description: 'Adding testing to JavaScript',
    tags: ['javascript, loops, testing']
  },
   {
    name: 'jQuery Image Filtering',
    description: 'Working with selling cabins',
    tags: ['jquery']
  },
   {
    name: 'JavaScript Loops- part 2',
    description: 'More loop practice',
    tags: ['javascript, loops']
  },
   {
    name: 'JavaScript Loops- part 3',
    description: 'Even more loop practice',
    tags: ['javascript, loops, functional programming']
  },
   {
    name: 'JavaScript Functions- part 3',
    description: 'More and more functions',
    tags: ['javascript, functions']
  },
  {
    name: 'JavaScript Playlist',
    description: 'Working with music and OOP',
    tags: ['javascript, oop']
  },
    {
    name: 'JavaScript- OOP Basics',
    description: 'Intro to OOP',
    tags: ['javascript, oop']
  },
    {
    name: 'Methods, This, Constructors',
    description: 'Understanding methods and this in OOP',
    tags: ['javascript, oop']
  },
    {
    name: 'JavaScript- OOP Autoshop',
    description: 'Working with cars and OOP',
    tags: ['javascript, oop']
  },
    {
    name: 'JavaScript- OOP Zoo',
    description: 'Working with animals and OOP',
    tags: ['javascript, oop']
  },
    {
    name: 'JavaScript Tic-Tac-Toe',
    description: 'Create a playable Tic-Tac-Toe',
    tags: ['javascript, oop']
  },
    {
    name: 'Jasmine Review',
    description: 'Testing',
    tags: ['testing, jasmine']
  },
    {
    name: 'JavaScript Game Library',
    description: 'Organize games dynamically',
    tags: ['javascript, oop']
  },
    {
    name: 'learnyounode',
    description: 'Practice node in the terminal',
    tags: ['node, javascript']
  },
  {
    name: 'Node CSV to Markdown',
    description: 'Convert a CSV file to a Markdown file',
    tags: ['node, javascript']
  },
  {
    name: 'javascript Bubble Sort',
    description: 'Sorting numbers by its neighbors',
    tags: ['node, javascript']
  },
  {
    name: 'Node Signup Form',
    description: 'Use node to sign up users',
    tags: ['node, javascript']
  },
  {
    name: 'Node Shuffle Chunk',
    description: 'Use node to divide things into groups',
    tags: ['node, javascript']
  },
  {
    name: 'Node Form Validation',
    description: 'Use node for validating server-side',
    tags: ['node, javascript']
  },
  {
    name: 'expressworks',
    description: 'Practice express in the terminal',
    tags: ['node, javascript, express']
  },
  {
    name: 'Node Shopping List API',
    description: 'Create a usable list API',
    tags: ['node, express, javascript']
  },
  {
    name: 'Node Github Contest App',
    description: 'Head-to-head voting app',
    tags: ['node, express, mongo']
  },
   {
    name: 'Node Express Swig Mongo Primer',
    description: 'Intro to using Express and Swig with Mongo',
    tags: ['node, express, mongo, swig']
  },
   {
    name: 'Asynchronous JS - Nested Callbacks',
    description: 'Understanding callbacks',
    tags: ['callbacks, node, javascript']
  },
   {
    name: 'Intro to Mongo',
    description: 'Understanding Mongo',
    tags: ['mongo']
  },
   {
    name: 'Node Countries',
    description: 'CRUD app with countries',
    tags: ['mongoose, node, express, mongo, javascript']
  },
];

function databaseSeed() {
  Exercise.find({}, function(err, documents){
    if(!err && documents.length===0) {
      for (var i = 0; i < exercisesSeed.length; i++) {
        var newExercise = new Exercise(exercisesSeed[i]);
        newExercise.save(function(err, success){
          if(!err) {
            console.log('database seeded object!');
          }
        });
      }
    }
  });
}

module.exports = databaseSeed;

