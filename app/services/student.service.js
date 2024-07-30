angular.module('schoolApp').service('StudentService', function() {
    var students = [];

    this.addStudent = function(student) {
        students.push(student);
    };

    this.getStudents = function() {
        return students;
    };
});
