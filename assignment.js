// https://github.com/ashiqdev/ph-assignment-03

function kilometerToMeter(km) {
  if (km < 0) return 'distance can not be negative!';
  return km * 1000;
}

function budgetCalculator(numOfClock, numOfMobile, numOfLaptop) {
  // handle negative values
  if (numOfClock < 0 || numOfMobile < 0 || numOfLaptop < 0) {
    return 'it is quite impossible to buy negative number of products!';
  }

  // in case any floating value is given, round it
  var costOfClock = Math.round(numOfClock) * 50;
  var costOfMobile = Math.round(numOfMobile) * 100;
  var costOfLaptop = Math.round(numOfLaptop) * 500;

  var totalBudget = costOfClock + costOfMobile + costOfLaptop;

  return totalBudget;
}

function hotelCost(numOfDays) {
  if (numOfDays <= 0)
    return 'You can not stay zero or negative number of days!';

  var totalCost = 0;

  if (numOfDays <= 10) {
    totalCost = numOfDays * 100;
  } else if (numOfDays <= 20) {
    var initialCost = 10 * 100;
    var remaining = numOfDays - 10;
    var costAfterDiscount = remaining * 80;
    totalCost = initialCost + costAfterDiscount;
  } else {
    var initialCost = 10 * 100;
    var secondaryCost = 10 * 80;
    var remaining = numOfDays - 20;
    var costAfterDiscount = remaining * 50;
    totalCost = initialCost + secondaryCost + costAfterDiscount;
  }

  return totalCost;
}

function megaFriend(friends) {
  // handle number values
  for (var i = 0; i < friends.length; i++) {
    if (typeof friends[i] === 'number') {
      return 'friend name can not be a number';
    }
  }

  // This will remove all whitespace on the left of the friend name
  function removeWhiteSpace(friend) {
    for (var i = 0; i < friend.length; i++) {
      if (friend.charAt(i) !== ' ') {
        return friend.slice(i);
      }
    }
  }

  var trimmedFriends = [];

  //   trim friends name
  for (var i = 0; i < friends.length; i++) {
    trimmedFriends.push(removeWhiteSpace(friends[i]));
  }

  var biggest = trimmedFriends[0];

  for (var i = 0; i < trimmedFriends.length; i++) {
    if (trimmedFriends[i].length > biggest.length) {
      biggest = trimmedFriends[i];
    }
  }

  return biggest;
}
