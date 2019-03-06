/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes = [
  {
    quote:"We all make choices, but in the end, our choices make us.",
    source:'Andrew Ryan',
    citation:'Bioshock',
    year:'2007',
    tags:"'iconic'"
  },
  {
    quote:"Like great works, deep feelings always mean more than " +
      "they are conscious of saying.",
    source:'Albert Camus',
    citation:'The Myth of Sisyphus',
    year:'1942',
    tags:"'wisdom'"
  },
  {
    quote:"Oh, no, it wasn't the airplanes. It was Beauty " +
      "that killed the beast!",
    source:'Carl Denham',
    citation:'King Kong',
    year:'1933',
    tags:"'iconic'"
  },
  {
    quote:"It's a weapon! It's really powerful. Especially " +
      "against living things.",
    source:'Barry Burton',
    citation:'Resident Evil',
    year:'1996',
    tags:"'humor'"
  },
  {
    quote:"All our dreams can come true — if we have the courage to " +
      "pursue them.",
    source:'Walt Disney',
    citation:'How to Be Like Walt: Capturing the Magic Every Day of Your Life',
    year:'2004',
    tags:"'inspirational'"
  },
  {
    quote:"On my business card, I am a corporate president. In my mind, " +
      "I am a game developer. But in my heart, I am a gamer.",
    source:'Satoru Iwata',
    citation:'2005 GDC Keynote',
    year:'2005',
    tags:"'passion'"
  },
  {
    quote:"Whoever saves one life, saves the world entire.",
    source:'Itzhak Stern',
    citation:"Schindler's List",
    year:'1993',
    tags:"'kindness'"
  },
  {
    quote:"WITH GREAT POWER THERE MUST ALSO COME--GREAT RESPONSIBILITY!",
    source:'Stan Lee',
    citation:'Amazing Fantasy #15',
    year:'1962',
    tags:"'inspirational'"
  },
  {
    quote:"The heart of Man is not compound of lies," +
      "but draws some wisdom from the only Wise.",
    source:'J.R.R. Tolkien',
    citation:'Mythopoeia',
    year:'1931',
    tags:"'wisdom'"
  },
  {
    quote:"I hated every minute of it. But I said to myself, " +
      "'Suffer now, and live the rest of your life as a champion'.",
    source:'Muhammad Ali',
    citation:'"Ali: Born Again!" Newsweek',
    year:'1978',
    tags:"'inspirational'"
  },
]

//test the array 'quotes' in the console
console.log(quotes);

//function to generate a random index value between 0 and the length of the
//array of quotes
function getRandomIndex () {
  return Math.floor(Math.random() * quotes.length);
}

//test the function getRandomIndex() in the console
console.log(getRandomIndex());

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote () {
  var randomNum = getRandomIndex();
  return quotes[randomNum];
}

//test the function getRandomQuote() in the console
console.log(getRandomQuote());


/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote () {
  var randomQuote = getRandomQuote();
  var html = '';
  //HTML template obtained from
  //https://teamtreehouse.com/projects/a-random-quote-generator
  //generate HTML for quote and source properties
  html += '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;
  //the conditionals check if the citation, year and tags properties exist
  //if they do, the necessary HTML is generated
  if (randomQuote.citation) {
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year) {
    html += '<span class="year">' + randomQuote.year + '</span>';
  }
  if (randomQuote.tags) {
    html += '<span class="tags">' + randomQuote.tags + '</span>';
  }
  //closes the <p> element in the HTML
  html += '</p>';
  //test the function printQuote() in the console
  console.log(html);
  //change the 'innerHTML' of the div with class 'quote-box'
  //to the generated html
  document.getElementById('quote-box').innerHTML = html;
}


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
