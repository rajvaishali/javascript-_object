// object destructure
const course = {
 coursename : "js in hindi",
 price: "999",
 courseInstructor: "vaishali"
}
// console.log(course.coursename);  when we want to print these many times then this code looks ugly


const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

