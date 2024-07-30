angular.module('schoolApp').component('studentForm', {
    templateUrl: 'app/components/student-form/student-form.template.html',
    controller: function(StudentService) {
        var ctrl = this;
        ctrl.student = {
            name: '',
            email: '',
            phone: '',
            address: '',
            qualifications: {
                college: '',
                degree: '',
                year: ''
            }
        };

        ctrl.addStudent = function() {
            StudentService.addStudent(ctrl.student);
            ctrl.resetForm();
        };

        ctrl.resetForm = function() {
            ctrl.student = {
                name: '',
                email: '',
                phone: '',
                address: '',
                qualifications: {
                    college: '',
                    degree: '',
                    year: ''
                }
            };
        };
    }
});
