/*
* Jacob Knecht
* Treehouse Full-Stack JavaScript Development Techdegree
* Project 1 - Random Quote Generator
*/

/*
* This creates an array of quote objects (10 in total)
* each quote object contains a quote, the source of the quote, the quote's
* citation, the year of the quote's origin, and tags to categorize the quote
*/
var quotes = [
  {
    quote:"We all make choices, but in the end, our choices make us.",
    source:'Andrew Ryan',
    citation:'Bioshock',
    year:2007,
    tags:"'iconic'"
  },
  {
    quote:"Like great works, deep feelings always mean more than " +
      "they are conscious of saying.",
    source:'Albert Camus',
    citation:'The Myth of Sisyphus',
    year:1942,
    tags:"'wisdom'"
  },
  {
    quote:"Oh, no, it wasn't the airplanes. It was Beauty " +
      "that killed the beast!",
    source:'Carl Denham',
    citation:'King Kong',
    year:1933,
    tags:"'iconic'"
  },
  {
    quote:"It's a weapon! It's really powerful. Especially " +
      "against living things.",
    source:'Barry Burton',
    citation:'Resident Evil',
    year:1996,
    tags:"'humor'"
  },
  {
    quote:"All our dreams can come true — if we have the courage to " +
      "pursue them.",
    source:'Walt Disney',
    citation:'How to Be Like Walt: Capturing the Magic Every Day of Your Life',
    year:2004,
    tags:"'inspirational'"
  },
  {
    quote:"On my business card, I am a corporate president. In my mind, " +
      "I am a game developer. But in my heart, I am a gamer.",
    source:'Satoru Iwata',
    citation:'2005 GDC Keynote',
    year:2005,
    tags:"'passion'"
  },
  {
    quote:"Whoever saves one life, saves the world entire.",
    source:'Itzhak Stern',
    citation:"Schindler's List",
    year:1993,
    tags:"'kindness'"
  },
  {
    quote:"WITH GREAT POWER THERE MUST ALSO COME--GREAT RESPONSIBILITY!",
    source:'Stan Lee',
    citation:'Amazing Fantasy #15',
    year:1962,
    tags:"'inspirational'"
  },
  {
    quote:"The heart of Man is not compound of lies, " +
      "but draws some wisdom from the only Wise.",
    source:'J.R.R. Tolkien',
    citation:'Mythopoeia',
    year:1931,
    tags:"'wisdom'"
  },
  {
    quote:"I hated every minute of it. But I said to myself, " +
      "'Suffer now, and live the rest of your life as a champion'.",
    source:'Muhammad Ali',
    citation:'"Ali: Born Again!" Newsweek',
    year:1978,
    tags:"'inspirational'"
  },
]

//creates a function to generate a random index value between 0 and the length
// of the array of quotes - not required but a good idea for a function
function getRandomIndex () {
  return Math.floor(Math.random() * quotes.length);
}

//creates a function to pick a random quote from the array of quotes
function getRandomQuote () {
  var randomNum = getRandomIndex();
  return quotes[randomNum];
}

//creates a function to generate a random color for the background color
//random color generation code inspired by answers at Stack Overflow:
//https://stackoverflow.com/questions/23095637/how-do-you-do-a-random-rbg-in-javascript
function getRandomColor () {
  var topValue = 256;
  //generate random red, green and blue values
  var redValue  = Math.floor(Math.random() * topValue);
  var greenValue = Math.floor(Math.random() * topValue);
  var blueValue = Math.floor(Math.random() * topValue);
  //generate and return random color
  return 'rgb('+ redValue + ',' + greenValue + ',' + blueValue + ')';
}

//creates a function to generate the necessary HTML to print the quote to
//the web browser
function printQuote () {
  var randomQuote = getRandomQuote();
  var html = '';
  //HTML template obtained from Team Treehouse:
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
    html += '<br><span class="tags">' + 'tags: ' + randomQuote.tags + '</span>';
  }
  //closes the <p> element in the HTML
  html += '</p>';
  //change the 'innerHTML' of the div with class 'quote-box'
  //to the generated html
  document.getElementById('quote-box').innerHTML = html;
  //change the background color of the web page and 'Show another quote' button
  //each time a new quote is generated
  var randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  document.getElementById('loadQuote').style.backgroundColor = randomColor;
}

//this function provides functionality to the 'Show another quote' button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
