const students = [
   {
      id: 1,
      username: "Anar",
      gender: "Male",
      age: "20"

   },
   {
      id:2,
      username:"Narmin",
      gender: "Female",
      age:"20"
   },
]

// console only female
// console only age greater than 22
// console sum of all students 
// console index of students whole id is equal 3
// console youngest student in group 




 
 const femaleStudents = students.filter(student => student.gender === "Female");
 console.log("Female Students:", femaleStudents);
 




 const olderStudents = students.filter(student => student.age > 22);
 console.log("Students older than 22:", olderStudents);
 

 const sumOfAges = students.reduce((total, student) => total + student.age, 0);
 console.log("Sum of all students' ages:", sumOfAges);
 


 const studentWithId3Index = students.findIndex(student => student.id === 3);
 console.log("Index of student with id 3:", studentWithId3Index);

 const ages = students.map(student => student.age);
 const minAge = Math.min(...ages);
 const youngestStudent = students.find(student => student.age === minAge);
 console.log("Youngest Student:", youngestStudent);




 