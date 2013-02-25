'use strict';

/* Controllers */

var cohorts = [
    {
        "uuid": "c1",
        "name": "Cohort A"
    },
    {
        "uuid": "c2",
        "name": "Cohort B"
    },
    {
        "uuid": "c3",
        "name": "Cohort C"
    },
    {
        "uuid": "c4",
        "name": "Cohort D"
    }
];

var patients = {
    "p1": {
        "identifier": "99KT-4",
        "givenName": "Testarius",
        "middleName": "Paul",
        "familyName": "Kungu",
        "birth": "16-04-1984",
        "gender": "Male",
        "uuid": "p1"
    },
    "p2": {
        "identifier": "757KT-5",
        "givenName": "Testarius",
        "middleName": "Kapkiyei",
        "familyName": "Bowen",
        "birth": "10-04-1988",
        "gender": "Male",
        "uuid": "p2"
    },
    "p3": {
        "identifier": "2857KT-9",
        "givenName": "Testarius",
        "middleName": "Ambote",
        "familyName": "Indakasi",
        "birth": "15-10-1982",
        "gender": "Female",
        "uuid": "p3"
    },
    "p4": {
        "identifier": "243KT-3",
        "givenName": "Nyoman",
        "middleName": "Winardi",
        "familyName": "Ribeka",
        "birth": "16-04-1990",
        "gender": "Male",
        "uuid": "p4"
    }
};

var cohort_members = {
    "c1": ["p1", "p2", "p3"],
    "c2": ["p2", "p4"],
    "c3": ["p3", "p4"],
    "c4": ["p2"]
};

var observations = [
    {
        "name": "CD4 COUNT",
        "value": "300",
        "datetime": "10-12-2009"
    },
    {
        "name": "PREGNANCY STATUS",
        "value": "UNKNOWN",
        "datetime": "10-12-2009"
    },
    {
        "name": "WEIGHT (KG)",
        "value": "80",
        "datetime": "10-12-2009"
    },
    {
        "name": "HEIGHT (CM)",
        "value": "189",
        "datetime": "10-12-2009"
    }
];

var forms = [
    {
        "uuid": "f1",
        "name": "Form A"
    },
    {
        "uuid": "f2",
        "name": "Form B"
    },
    {
        "uuid": "f3",
        "name": "Form C"
    },
    {
        "uuid": "f4",
        "name": "Form D"
    },
    {
        "uuid": "f5",
        "name": "Form E"
    }
];

function HomeController($scope) {
    $scope.user = {
        givenName: 'Super',
        familyName: "User"
    };
}

function CohortController($scope) {
    $scope.cohorts = cohorts;
}

function SettingController($scope) {
    $scope.message = "This message is sent from the setting controller, not from the html.";
}

function AboutController($scope) {
    $scope.message = "This message is sent from the setting controller, not from the html.";
}

function PatientsController($scope, $routeParams) {
    var uuid = $routeParams.uuid;
    angular.forEach(cohorts, function(cohort) {
        if (angular.equals(uuid, cohort.uuid)) {
            $scope.name = cohort.name;
            var cohortPatients = [];
            angular.forEach(cohort_members[uuid], function(patientUuid) {
                cohortPatients.push(patients[patientUuid])
            });
            $scope.patients = cohortPatients;
        }
    });
}

function PatientController($scope, $routeParams) {
    var uuid = $routeParams.uuid;
    $scope.patient = patients[uuid];
}

function ObservationController($scope, $routeParams) {
    var uuid = $routeParams.uuid;
    $scope.patient = patients[uuid];
    $scope.observations = observations;
}

function SummaryController($scope, $routeParams) {
    var uuid = $routeParams.uuid;
    $scope.patient = patients[uuid];
    $scope.message = "You should see summary data here.";
}

function ReminderController($scope, $routeParams) {
    var uuid = $routeParams.uuid;
    $scope.patient = patients[uuid];
    $scope.message = "You should see reminder data here.";
}

function FormsController($scope, $routeParams) {
    var uuid = $routeParams.uuid;
    $scope.patient = patients[uuid];
    $scope.forms = forms;
}

function FormController($scope, $routeParams) {
    var uuid = $routeParams.uuid;
    $scope.patient = patients[uuid];
    var formUuid = $routeParams.formUuid;
    $scope.form = forms[formUuid];
}
