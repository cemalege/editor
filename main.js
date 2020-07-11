function setup() {
  var canvas = createCanvas( 640, 480 );
  canvas.parent( 'container' );
  background( 100 );
  noStroke();
  var world = new World( height, width, 2 );
  world.printInfo();
}

function draw() {

}

function World( height, width, unit ) {
  this.height = height;
  this.width = width;
  this.unit = unit;
  this.unitCount = ( height / unit ) * ( width / unit );
  this.minValue = 1;
  this.maxValue = this.unitCount;

  this.draw() {
    
  }

  this.printInfo = function() {
    print( 'World size height..: ' + this.height + 'px width..: ' + this.width + 'px' );
    print( 'World unit..: ' + this.unit );
    print( 'World unitCount..: ' + this.unitCount );
    print( 'Word unit selection max value..: ' + this.minValue );
    print( 'Word unit selection min value..: ' + this.maxValue );
  }
}
