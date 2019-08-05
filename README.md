# Random Quote Generator

Purpose:
  This application in this project creates a simple web page that displays a
  random quote to the screen.

Functionality:
  The web page will display a random quote, along with the source of the quote.
  Additionally, if available, the citation for the quote, year of origin, and
  categorization tags are displayed. Users can display a new quote if they click
  the 'Show another quote' button. The web page will auto-refresh with a new
  quote every 20 seconds.

  Implementation:
    The program creates an array of quote objects, each object contains quote
    and source properties, and may additionally contain citation, year and tags
    qualities. A function generates a random quote, and another function prints
    the quote to the screen by generating the necessary HTML, conditionally
    checking for optional properties. Functions to generate random numbers and
    random colors were included to enhance the web page and provide additional
    robustness. Code was also included which allowed for the web page to auto-
    refresh with a new quote every 20 seconds.
