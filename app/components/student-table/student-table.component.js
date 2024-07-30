angular.module('schoolApp').component('studentTable', {
    templateUrl: 'app/components/student-table/student-table.template.html',
    controller: function(StudentService) {
        var ctrl = this;
        ctrl.students = StudentService.getStudents();
    }
});
