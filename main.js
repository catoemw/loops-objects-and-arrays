var people = [
	{
		firstName: "Amanda",
		lastName: "Harris",
		age: 42,
		gender: "F",
		children: [
			{
				firstName: "Ben",
				age: 18,
				gender: "M"
			},
			{
				firstName: "Lisa",
				age: 15,
				gender: "F"
			}
		]
	},
	{
		firstName: "Brian",
		lastName: "Bell",
		age: 36,
		gender: "M",
		children: [
			{
				firstName: "Erica",
				age: 11,
				gender: "F"
			},
			{
				firstName: "Jenny",
				age: 8,
				gender: "F"
			}
		]	
	},
	{
		firstName: "Terrence",
		lastName: "Smith",
		age: 49,
		gender: "M",
		children: [
			{
				firstName: "David",
				age: 17,
				gender: "M"
			},
			{
				firstName: "Alex",
				age: 23,
				gender: "F"
			},
			{
				firstName: "Joe",
				age: 25,
				gender: "M"
			}
		]	
	},
	{
		firstName: "Alyssa",
		lastName: "Ingram",
		age: 28,
		gender: "F",
		children: [
			{
				firstName: "Jamie",
				age: 3,
				gender: "F"
			},
			{
				firstName: "Lori",
				age: 2,
				gender: "F"
			}
		]	
	}
];

// EXERCISE 1

var newChild = [
	{
	firstName: "Larry",
	age: 10,
	gender: "M"
	},
	{
	firstName: "Curly",
	age: 11,
	gender: "M"
	},
	{
	firstName: "Moe",
	age: 12,
	gender: "M"
	},
	{
	firstName: "Shemp",
	age: 13,
	gender: "M"
	}	
];

for (var i = 0; i < newChild.length; i++) {
	people[i].children.push(newChild[i]);
}

// EXERCISE 2

for (var j = 0; j < people.length; j++) {
	if (people[j].gender === "M") {
		people[j].age += 5;
	}
}

// EXERCISE 3

var k = 0;
var sum = 0;
var avg;

while (k < people.length) {
	sum += people[k].age;
	k++;
}

avg = sum / people.length;
console.log("Parents average age: " + avg);

// EXERCISE 4

for (var l = 0; l < people.length; l++) {
	for (var m = 0; m < people[l].children.length; m++) {
		var child = people[l].children[m];
		console.log(child.firstName + " (" + child.age + ", " + child.gender + ")");
	}
}

// EXERCISE 5

var sumMale = 0;
var nMale = 0;
var avgMale;
var sumFem = 0;
var nFem = 0;
var avgFem;

for (var n = 0; n < people.length; n++) {
	for (var p = 0; p < people[n].children.length; p++) {
		var child = people[n].children[p];
		if (child.gender === "M") {
			sumMale += child.age;
			nMale++;
		} else if (child.gender === "F" && child.age < 12) {
			sumFem += child.age;
			nFem++;
		}
	}
}

avgMale = sumMale / nMale;
avgFem = sumFem / nFem;
console.log("Average age of male children: " + avgMale);
console.log("Average age of female children under 12: " + avgFem);











