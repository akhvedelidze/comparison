

function whoIsOlder(person1, person2) {
  if (person1.age > person2.age) {
    console.log(person1.name + " is " + (person1.age - person2.age) + " year(s) older then " + person2.name);
  } else if (person1.age < person2.age) {
    console.log(person2.name + " is " + (person2.age - person1.age) + " year(s) older then " + person1.name);
  }
  else { console.log(person2.name + " and " + person1.name + " have same age"); }
}

function whoIsOldest(person1, person2, person3) {

  if (person1.age > person2.age && person1.age > person3.age) {
    console.log(person1.name + " is eldest");
  }
  if (person2.age > person1.age && person2.age > person3.age) {
    console.log(person2.name + " is eldest");
  }
  if (person3.age > person1.age && person3.age > person2.age) {
    console.log(person3.name + " is eldest");
  }

  else { console.log ("No one is eldest in this group"); } }


  var me = {
    name: 'Akaki',
    age: 38
  };


  var shota = {
    name: 'Shota',
    age: 41
  };


  var drini = {
    name: 'Drini',
    age: 41
  };


  whoIsOlder(me, shota);
  whoIsOlder(me, drini);
  whoIsOlder(drini, shota);
  whoIsOldest(me, shota, drini);
 