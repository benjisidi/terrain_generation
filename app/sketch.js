let cols, rows, terrainHeights;
let scale = 20;
let flying = 0;

function setup() {
  createCanvas(800, 600, WEBGL);
  let w = 800;
  let h = 600;
  cols = w / scale;
  rows = h / scale;
  terrainHeights = [];
}

function draw() {
  background(0);
  stroke(200);
  noFill();
  rotateX(PI / 3);
  translate(-width / 2, -height / 2 + 100);

  flying += -0.09
  let yoff = flying;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    terrainHeights[y] = []
    for (let x = 0; x < cols; x++) {
      terrainHeights[y].push(map(noise(xoff, yoff), 0, 1, -150, 150));
      xoff += 0.1;
    }
    yoff += 0.1;
  }

  beginShape(TRIANGLE_STRIP);
  for (let y = 0; y < rows - 1; y++) {
    for (let x = 0; x < cols; x++) {
      vertex(x * scale, y * scale, terrainHeights[y][x]);
      vertex(x * scale, (y + 1) * scale, terrainHeights[y + 1][x]);
    }
    endShape();
  }
}