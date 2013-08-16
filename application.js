function Dice() {
  this.side_facing = 0;
}

Dice.prototype.roll = function () {
  this.side_facing = Math.floor((Math.random()*6)+1);
};

function Board() {
  this.dice = [];
}

Board.prototype.addDice = function() {
  this.dice.push(new Dice());
};

Board.prototype.renderNewDice = function() {
  $('.dice').append("<div class='die'>0</div>");
};

Board.prototype.rollAllDice = function() {
  for (var i = 0; i < this.dice.length; i++){
    console.log(this.dice[i].roll());
  }
};

Board.prototype.renderAfterRoll = function() {
  $(this.dice).each(function(index, element){
    $(".dice .die:nth-child(" + (index + 1) + ")").text(element.side_facing);
  });
};



$(document).ready(function() {
  game = new Board;
  $('.add').on('click', function() {
    game.addDice();
    game.renderNewDice();
  });

  $('.roll').on('click', function() {
    game.rollAllDice();
    game.renderAfterRoll();
  });
});
