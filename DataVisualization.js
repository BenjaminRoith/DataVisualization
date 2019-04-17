// An Array of Bubble objects
var artists;
var prices;
// A Table object
var table;
var numberPerGallery;

function preload() {
  table = loadTable("Data/Data - Average Hammer Prices.csv", "header");
  numberPerGallery = loadTable("Data/Number Sold Per Gallery.csv", "header");
}

function setup() {
  createCanvas(950, 650);
  loadData();
}

function loadData() {
  // Load CSV file into a Table object
  // "header" option indicates the file has a header row

  // The size of the array of Bubble objects is determined by the total number of rows in the CSV
  artists = []; 
  prices = [];
  galleries = [];
  cezanneSold =[];
  gauguinSold =[];
  monetSold = [];
  pissaroSold = [];
  sisleySold = [];

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
  for (var i = 0; i < numberPerGallery.getRowCount(); i++) {
    var row = numberPerGallery.getRow(i);
    print(row);
    // You can access the fields via their column name (or index)
    var gallery = row.get("Gallery");
    var cezanne = row.get("Cezanne");
    var gauguin = row.get("Gauguin");
    var monet = row.get("Monet");
    var pissaro = row.get("Pissaro");
    var sisley = row.get("Sisley");
    // Make a Bubble object out of the data read
    galleries[i] = gallery;
    cezanneSold[i] = cezanne;
    gauguinSold[i] = gauguin;
    print(gauguin);
    monetSold[i] = monet;
    pissaroSold[i] = pissaro;
    sisleySold[i] = sisley;
  }
  print(galleries);

}

function draw() {
    background(216, 148, 21);

    var barWidth = 20;
    var barSpacing = 5;
    var numBarsPerCategory = 1;
    var categorySpacing = 50;
    var topMargin = 50;
    var plotHeight = 400;
    var leftMargin = 150;

    // X axis
    var xLen = leftMargin + 450 + barWidth; 
    line(leftMargin, topMargin + plotHeight, xLen, topMargin + plotHeight);
    // X axis label
    textAlign(LEFT);
    text('Artist', leftMargin + 220, topMargin + plotHeight + 50);
    text('Impressionist Artists Whose Works Fell Victim to Nazi Looting, and Their Re-emergence Across Post-war Markets (1945-1985)', leftMargin -75, topMargin + plotHeight + 100);
    
    // ----------------------------------------------

    // Y axis
    line(leftMargin, topMargin + plotHeight, leftMargin, topMargin);
    // Y axis label
    angleMode(DEGREES);
    rotate(-90);
    textAlign(CENTER);
    text('Average Hammer Price of Artwork (USD)', 0 - (topMargin + plotHeight/2), leftMargin - 75);
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

    fill(19, 247, 34);
    var sisleyHeight = pixelsPerDollar * prices[0] + 5;
    var sisleyX = leftMargin + 375;
    rect(sisleyX, topMargin + plotHeight - sisleyHeight, barWidth, sisleyHeight);
    fill(0);
    text('Sisley', sisleyX - 5, topMargin + plotHeight + 20);

    fill(20, 183, 216);
    var pissaroHeight = pixelsPerDollar * prices[1] + 2;
    var pissaroX = leftMargin + 300;
    rect(pissaroX, topMargin + plotHeight - pissaroHeight, barWidth, pissaroHeight);
    fill(0);
    text('Pissarro', pissaroX - 9, topMargin + plotHeight + 20);
    
    fill(90, 88, 226);
    var cezanneHeight = pixelsPerDollar * prices[2] + 20;
    var cezanneX = leftMargin + 75;
    rect(cezanneX, topMargin + plotHeight - cezanneHeight, barWidth, cezanneHeight);
    fill(0);
    text('Cézanne', cezanneX -10, topMargin + plotHeight + 20);

    fill(232, 84, 25);
    var gauguinHeight = pixelsPerDollar * prices[3] + 12;
    var gauguinX = leftMargin + 150;
    rect(gauguinX, topMargin + plotHeight - gauguinHeight, barWidth, gauguinHeight);
    fill(0);
    text('Gauguin', gauguinX - 7, topMargin + plotHeight + 20);

    fill(0, 80, 0);
    var monetHeight = pixelsPerDollar * prices[4] + 20;
    var monetX = leftMargin + 225;
    rect(monetX, topMargin + plotHeight - monetHeight, barWidth, monetHeight);
    fill(0);
    text('Monet', monetX - 5, topMargin + plotHeight + 20);

    fill(0);

    if (mouseX >= monetX && 
      mouseX <= monetX + barWidth &&
      mouseY >= topMargin + plotHeight - monetHeight && 
      mouseY <= topMargin + plotHeight) {

      text("Average Hammer Price: $209,876.18", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 125);
      text(galleries[0] + ": " + monetSold[0] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 100);
      text(galleries[1] + ": " + monetSold[1] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 85);
      text(galleries[2] + ": " + monetSold[2] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 70);
      text(galleries[3] + ": " + monetSold[3] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 55);
      text(galleries[4] + ": " + monetSold[4] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 40);
      text(galleries[5] + ": " + monetSold[5] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 25);
      }else 

    if (mouseX >= gauguinX && 
      mouseX <= gauguinX + barWidth &&
      mouseY >= topMargin + plotHeight - gauguinHeight && 
      mouseY <= topMargin + plotHeight) {

      text("Average Hammer Price: $119,595.74", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 125);
      text(galleries[0] + ": " + gauguinSold[0] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 100);
      text(galleries[1] + ": " + gauguinSold[1] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 85);
      text(galleries[2] + ": " + gauguinSold[2] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 70);
      text(galleries[3] + ": " + gauguinSold[3] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 55);
      text(galleries[4] + ": " + gauguinSold[4] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 40);
      text(galleries[5] + ": " + gauguinSold[5] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 25);
  } else 
  if (mouseX >= cezanneX && 
      mouseX <= cezanneX + barWidth &&
      mouseY >= topMargin + plotHeight - cezanneHeight && 
      mouseY <= topMargin + plotHeight) {

      text("Average Hammer Price: $175,906.51", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 125);
      text(galleries[0] + ": " + cezanneSold[0] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 100);
      text(galleries[1] + ": " + cezanneSold[1] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 85);
      text(galleries[2] + ": " + cezanneSold[2] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 70);
      text(galleries[3] + ": " + cezanneSold[3] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 55);
      text(galleries[4] + ": " + cezanneSold[4] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 40);
      text(galleries[5] + ": " + cezanneSold[5] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 25);
  } else 
  if (mouseX >= pissaroX && 
      mouseX <= pissaroX + barWidth &&
      mouseY >= topMargin + plotHeight - pissaroHeight && 
      mouseY <= topMargin + plotHeight) {

        text("Average Hammer Price: $47,255.68", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 125);
        text(galleries[0] + ": " + pissaroSold[0] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 100);
        text(galleries[1] + ": " + pissaroSold[1] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 85);
        text(galleries[2] + ": " + pissaroSold[2] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 70);
        text(galleries[3] + ": " + pissaroSold[3] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 55);
        text(galleries[4] + ": " + pissaroSold[4] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 40);
        text(galleries[5] + ": " + pissaroSold[5] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 25);
  } else 
  if (mouseX >= sisleyX && 
      mouseX <= sisleyX + barWidth &&
      mouseY >= topMargin + plotHeight - sisleyHeight && 
      mouseY <= topMargin + plotHeight) {

      text("Average Hammer Price: $99,023.70", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 125);
      text(galleries[0] + ": " + sisleySold[0] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 100);
      text(galleries[1] + ": " + sisleySold[1] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 85);
      text(galleries[2] + ": " + sisleySold[2] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 70);
      text(galleries[3] + ": " + sisleySold[3] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 55);
      text(galleries[4] + ": " + sisleySold[4] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 40);
      text(galleries[5] + ": " + sisleySold[5] + " Pieces Sold", sisleyX + 100, topMargin + plotHeight - sisleyHeight - 25);
  }
  }
    




