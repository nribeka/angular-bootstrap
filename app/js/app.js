'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$compileProvider', function($routeProvider, $compileProvider) {
        // adding the "file" to the white list
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file):/)

        $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: HomeController});
        $routeProvider.when('/cohorts', {templateUrl: 'partials/cohorts.html', controller: CohortController});
        $routeProvider.when('/settings', {templateUrl: 'partials/settings.html', controller: SettingController});
        $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: AboutController});
        $routeProvider.when('/patients/:uuid', {templateUrl: 'partials/patients.html', controller: PatientsController});
        $routeProvider.when('/patient/:uuid', {templateUrl: 'partials/patient.html', controller: PatientController});
        $routeProvider.when('/observation/:uuid', {templateUrl: 'partials/observation.html', controller: ObservationController});
        $routeProvider.when('/summary/:uuid', {templateUrl: 'partials/summary.html', controller: SummaryController});
        $routeProvider.when('/reminder/:uuid', {templateUrl: 'partials/reminder.html', controller: ReminderController});
        $routeProvider.when('/forms/:uuid', {templateUrl: 'partials/forms.html', controller: FormsController});
        $routeProvider.when('/form/:uuid|:formUuid', {templateUrl: 'partials/form.html', controller: FormController});
        $routeProvider.otherwise({redirectTo: '/home'});
  }]);
