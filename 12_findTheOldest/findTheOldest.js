const findTheOldest = function(people) {
    return people.reduce(
        (currentOldest, nextPerson) => 
                getAge(currentOldest) > getAge(nextPerson) ?
                currentOldest : nextPerson
        ,people[0]
    );
};

function getAge(person) {
    return person.hasOwnProperty("yearOfDeath") ?
            person.yearOfDeath - person.yearOfBirth :
            new Date().getFullYear() - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
