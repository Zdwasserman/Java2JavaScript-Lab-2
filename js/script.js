" use strict ";

var Pet = function(name)
{
	this.name = name;
  this.getName = function getName()
  {
  	return this.name;
  }
  this.setName = function setName(name)
  {
		this.name = name;
	}
  this.speak = function speak()
  {
  	return "-happy pet noises-";
  }
}

var Cat = function(name)
{
	this.name = name;
}
Cat.prototype = new Pet();
Cat.prototype.speak = function speak()
{
	return "Meow!";
}


var Dog = function(name)
{
	this.name = name;
}
Dog.prototype = new Pet();
Dog.prototype.speak = function speak()
{
	return "Bork!";
}

var Bird = function(name)
{
	this.name = name;
}
Bird.prototype = new Pet();
Bird.prototype.speak = function speak()
{
	return "BWAWK!";
}


function PetChat(){
  var display = document.getElementById("display");
  var numPets = null;

  var askHowMany = function(){
    return prompt("How many pets do you have?");
  };



  var askPetInfo = function()
  {
    var pets = [];
    for(var i=0; i<numPets; i++)
    {
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, bird)");
      var name = prompt("What is pet #" + (i+1) + "'s name'?");
      if(type == "dog")
      {
        var pet = new Dog(name);
        pets.push(pet);
      }
      if(type == "cat")
      {
        var pet = new Cat(name);
        pets.push(pet);
      }
      if(type == "bird")
      {
        var pet = new Bird(name);
        pets.push(pet);
      }

    }
    var textOut = "";
    for(var i = 0; i < pets.length; i++){
      textOut += pets[i].getName() +" "+pets[i].speak()+"<br/ >";
    }
    display.innerHTML = textOut;

  };

  this.init = function(){
    while(numPets === null){
      numPets = askHowMany();
    }

    askPetInfo();
  }
};

var chat = new PetChat();
chat.init();
