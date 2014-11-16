angular.module('starter.services', [])

    .factory('JobService', function($q) {

        var intereted_jobs = [
            { id: 1, location: 'Tulum', description: "Mesero", pic: "rene.jpg", interested: true, 

            manager: { id: 1, name: "John Doe", email: 'example@mail.com' }
        },
            { id: 2, location: 'Cancún', description: "Traductor ingles-español", pic: "rene.jpg", interested: true, 
            manager: { id: 1, name: "John Doe", email: 'example@mail.com' }
        },
            { id: 3, location: 'Isla Mujeres', description: "Delivery guy", pic: "rene.jpg", interested: true, 
            manager: { id: 1, name: "John Doe", email: 'example@mail.com' }
        }];

        var jobs = [
            { id: 1, location: 'Tulum', description: "Mesero", pic: "rene.jpg", interested: true, 
            
            manager: { id: 1, name: "John Doe", email: 'example@mail.com' }
        },
            { id: 2, location: 'Cancún', description: "Traductor ingles-español", pic: "rene.jpg", interested: true, 
            manager: { id: 1, name: "John Doe", email: 'example@mail.com' }
        },
            { id: 3, location: 'Isla Mujeres', description: "Delivery guy", pic: "rene.jpg", interested: true, 
            manager: { id: 1, name: "John Doe", email: 'example@mail.com' }
        }];

        // We use promises to make this api asynchronous. This is clearly not necessary when using in-memory data
        // but it makes this service more flexible and plug-and-play. For example, you can now easily replace this
        // service with a JSON service that gets its data from a remote server without having to changes anything
        // in the modules invoking the data service since the api is already async.

        return {

            interestedById: function(jobId) {
                var deferred = $q.defer();
                var employee = intereted_jobs[jobId - 1];
                deferred.resolve(employee);
                return deferred.promise;
            },

            allInterested: function() {
                var deferred = $q.defer();
                deferred.resolve(intereted_jobs);
                return deferred.promise;
            },

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
                        return parseInt(managerId) === element.manager.id;
                    });
                deferred.resolve(results);
                return deferred.promise;
            }

        }

    })

    .factory('ManagerService', function($q) {

        var managers = [
            { 
                id: 1, name: "René Gilberto Burgos", pic: "pompilogo.jpg", email: 'rene_burgos@mail.com', business_name: "Casa Pompidou", 
                location: "Mérida Yucatán", country: "México", description: "Bar, Galería de Arte"
            }
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

        var profile = { id: 1, name: "John Doe", pic: "rene.jpg", email: 'traveler@gmail.com',
            skills: [
            {id: 1, name: "Tocar guitarra"}, {id: 2, name: "Hablar ingles-español"}
            ],
            past_jobs: [
                        { id: 1, title: 'Tulum', description: "Mesero", pic: "rene.jpg" , manager: { id: 1, name: "John Doe", email: 'example@mail.com' }},
                        { id: 2, title: 'Cancún', description: "Traductor ingles-español", pic: "rene.jpg", manager: { id: 1, name: "John Doe", email: 'example@mail.com' }},
                        { id: 3, title: 'Isla Mujeres', description: "Delivery guy", pic: "rene.jpg", manager: { id: 1, name: "John Doe", email: 'example@mail.com' }}
                    ] } ;

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