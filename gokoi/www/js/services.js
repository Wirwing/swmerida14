angular.module('starter.services', [])

    .factory('JobService', function($q) {

        var jobs = jobs = [
            { id: 1, title: 'Tulum', description: "Mesero", pic: "1.jpg" , manager: { id: 1, name: "John Doe", email: 'example@mail.com' }},
            { id: 2, title: 'Cancún', description: "Traductor ingles-español", pic: "1.jpg", manager: { id: 1, name: "John Doe", email: 'example@mail.com' }},
            { id: 3, title: 'Isla Mujeres', description: "Delivery guy", pic: "1.jpg", manager: { id: 1, name: "John Doe", email: 'example@mail.com' }}
        ];

        // We use promises to make this api asynchronous. This is clearly not necessary when using in-memory data
        // but it makes this service more flexible and plug-and-play. For example, you can now easily replace this
        // service with a JSON service that gets its data from a remote server without having to changes anything
        // in the modules invoking the data service since the api is already async.

        return {
            findAll: function() {
                var deferred = $q.defer();
                deferred.resolve(jobs);
                return deferred.promise;
            },

            findById: function(employeeId) {
                var deferred = $q.defer();
                var employee = jobs[employeeId - 1];
                deferred.resolve(employee);
                return deferred.promise;
            },

            findByName: function(searchKey) {
                var deferred = $q.defer();
                var results = jobs.filter(function(element) {
                    var fullName = element.firstName + " " + element.lastName;
                    return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
                });
                deferred.resolve(results);
                return deferred.promise;
            },

            findByManager: function (managerId) {
                var deferred = $q.defer(),
                    results = jobs.filter(function (element) {
                        return parseInt(managerId) === element.managerId;
                    });
                deferred.resolve(results);
                return deferred.promise;
            }

        }

    })

    .factory('ManagerService', function($q) {

        var managers = [
            { id: 1, name: "John Doe", pic: "1.jpg", email: 'example@mail.com', jobs:  [
            { id: 1, title: 'Tulum', description: "Mesero", pic: "1.jpg" , manager: { id: 1, name: "John Doe", email: 'example@mail.com' }},
            { id: 2, title: 'Cancún', description: "Traductor ingles-español", pic: "1.jpg", manager: { id: 1, name: "John Doe", email: 'example@mail.com' }},
            { id: 3, title: 'Isla Mujeres', description: "Delivery guy", pic: "1.jpg", manager: { id: 1, name: "John Doe", email: 'example@mail.com' }}
        ] }
        ];

        // We use promises to make this api asynchronous. This is clearly not necessary when using in-memory data
        // but it makes this service more flexible and plug-and-play. For example, you can now easily replace this
        // service with a JSON service that gets its data from a remote server without having to changes anything
        // in the modules invoking the data service since the api is already async.

        return {
            findAll: function() {
                var deferred = $q.defer();
                deferred.resolve(managers);
                return deferred.promise;
            },
            findById: function(managerId) {
                var deferred = $q.defer();
                var employee = managers[managerId - 1];
                deferred.resolve(employee);
                return deferred.promise;
            }
        }
    })


    .factory('ProfileService', function($q) {

        var profile = { id: 1, name: "John Doe", pic: "1.jpg", email: 'traveler@gmail.com' } ;

        // We use promises to make this api asynchronous. This is clearly not necessary when using in-memory data
        // but it makes this service more flexible and plug-and-play. For example, you can now easily replace this
        // service with a JSON service that gets its data from a remote server without having to changes anything
        // in the modules invoking the data service since the api is already async.

        return {
            get: function() {
                var deferred = $q.defer();
                deferred.resolve(profile);
                return deferred.promise;
            }
        }
    });