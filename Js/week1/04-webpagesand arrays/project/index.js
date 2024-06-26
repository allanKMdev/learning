let people = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'Chicago' },
    { name: 'Charlie', age: 35, city: 'New York' },
    { name: 'Dave', age: 40, city: 'Chicago' }
];

let groupedByCity = groupBy(people, 'city');
console.log(groupedByCity);
