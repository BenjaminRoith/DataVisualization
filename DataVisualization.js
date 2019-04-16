// An Array of Bubble objects
var artists;
var prices;
// A Table object
var table;

function preload() {
  table = loadTable("Data/Data - Average Hammer Prices.csv", "header");
}

function setup() {
  createCanvas(800, 800);
  loadData();
}

function loadData() {
  // Load CSV file into a Table object
  // "header" option indicates the file has a header row

  // The size of the array of Bubble objects is determined by the total number of rows in the CSV
  artists = []; 
  prices = []

  // You can access iterate over all the rows in a table
  for (var i = 0; i < table.getRowCount(); i++) {
    var row = table.getRow(i);
    // You can access the fields via their column name (or index)
    var artist = row.get("Name");
    var price = row.get("Price");
    // Make a Bubble object out of the data read
    artists[i] = artist;
    prices[i] = price;
  }

}

function draw() {
    background(255);

    var barWidth = 20;
    var barSpacing = 5;
    var numBarsPerCategory = 1;
    var categorySpacing = 50;
    var topMargin = 50;
    var plotHeight = 400;
    var leftMargin = 150;

    // X axis
    var xLen = leftMargin + 400 + barWidth; 
    line(leftMargin, topMargin + plotHeight, xLen, topMargin + plotHeight);
    // X axis label
    textAlign(LEFT);
    text('Artist', 335, topMargin + plotHeight + 40);
    
    // ----------------------------------------------

    // Y axis
    line(leftMargin, topMargin + plotHeight, leftMargin, topMargin);
    // Y axis label
    angleMode(DEGREES);
    rotate(-90);
    textAlign(CENTER);
    text('Average Hammer Price of Artwork ($)', 0 - (topMargin + plotHeight/2), leftMargin - 75);
    rotate(90);

    // Y axis ticks
        // ticks
    // bottom tick
    textAlign(RIGHT);
    var minPrice = topMargin + plotHeight;
    text(0, leftMargin - 10, minPrice+5); // + 5 to center text vertically
    line(leftMargin, minPrice, leftMargin + 5, minPrice);

    // top tick
    var maxPrice = topMargin + 30;
    text("$200K", leftMargin - 10, maxPrice+5);
    line(leftMargin -5, maxPrice, leftMargin + 5, maxPrice);

    var tickVal = 0;
    var tickHeight = minPrice;
    for(var i = 0; i<7; i++){
      tickHeight = tickHeight - 46.25;
      tickVal = tickVal + 25
      text("$" + tickVal + "K", leftMargin - 10, tickHeight + 5);

    }

    textAlign(LEFT);
    var pixelsPerDollar = (plotHeight - 30 * 2) / (200000);

    fill(0, 80, 0);
    var sisleyHeight = pixelsPerDollar * prices[0] + 10;
    var sisleyX = leftMargin + 75;
    rect(sisleyX, topMargin + plotHeight - sisleyHeight, barWidth, sisleyHeight);
    fill(0);
    text('Sisley', sisleyX - 5, topMargin + plotHeight + 20);

    fill(0, 128, 0);
    var pissaroHeight = pixelsPerDollar * prices[1] + 7;
    var pissaroX = leftMargin + 150;
    rect(pissaroX, topMargin + plotHeight - pissaroHeight, barWidth, pissaroHeight);
    fill(0);
    text('Pissaro', pissaroX - 5, topMargin + plotHeight + 20);
    
    fill(0x29, 0xc4, 0x63);
    var cezanneHeight = pixelsPerDollar * prices[2] + 17;
    var cezanneX = leftMargin + 225;
    rect(cezanneX, topMargin + plotHeight - cezanneHeight, barWidth, cezanneHeight);
    fill(0);
    text('Cezanne', cezanneX - 5, topMargin + plotHeight + 20);

    fill(0x29, 0xc4, 0x63);
    var gauguinHeight = pixelsPerDollar * prices[3] + 12;
    var gauguinX = leftMargin + 300;
    rect(gauguinX, topMargin + plotHeight - gauguinHeight, barWidth, gauguinHeight);
    fill(0);
    text('Gauguin', gauguinX - 5, topMargin + plotHeight + 20);

    fill(0);

    if (mouseX >= gauguinX && 
      mouseX <= gauguinX + barWidth &&
      mouseY >= topMargin + plotHeight - gauguinHeight && 
      mouseY <= topMargin + plotHeight) {

      text("$119,595.74", gauguinX+3, topMargin + plotHeight - gauguinHeight - 10);
  } else 
  if (mouseX >= cezanneX && 
      mouseX <= cezanneX + barWidth &&
      mouseY >= topMargin + plotHeight - cezanneHeight && 
      mouseY <= topMargin + plotHeight) {

      text("$175,906.51", cezanneX+3, topMargin + plotHeight - cezanneHeight - 10);
  } else 
  if (mouseX >= pissaroX && 
      mouseX <= pissaroX + barWidth &&
      mouseY >= topMargin + plotHeight - pissaroHeight && 
      mouseY <= topMargin + plotHeight) {

      text("$47,255", pissaroX+3, topMargin + plotHeight - pissaroHeight - 10);
  } else 
  if (mouseX >= sisleyX && 
      mouseX <= sisleyX + barWidth &&
      mouseY >= topMargin + plotHeight - sisleyHeight && 
      mouseY <= topMargin + plotHeight) {

      text("$99,023", sisleyX+3, topMargin + plotHeight - sisleyHeight - 10);
  }
  }
    




