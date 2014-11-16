angular.module('starter.services', [])

    .factory('JobService', function($q) {

        var jobs = [
            { 
                id: 1, location: "Mérida Yucatán, México", description: "DJ", 
                pic: "pompilogo.jpg", interested: true, 
                date: "A partir de 01/11/2014",
                details: "DJ nocturno, especificaciones a tratar",
                skills: "Indiferente",
                manager: { id: 1}
            },
            { 
                id: 2, location: "Mérida Yucatán, México", description: "Artista", 
                pic: "pompilogo.jpg", interested: true, 
                date: "A partir de 01/11/2014",
                details: "Artistas enfocados al muralismo, especificaciones a tratar",
                skills: "Pintores muralistas",
                manager: { id: 1}
            },
            { 
                id: 3, location: "Mérida Yucatán, México", description: "Músico", 
                pic: "coyote.jpg", interested: true, 
                date: "Abierto",
                details: "Especificaciones a tratar",
                skills: "Acústica Jazz",
                manager: { id: 2}
            },
            { 
                id: 4, location: "Mérida Yucatán, México", description: "Jardinero", 
                pic: "coyote.jpg", interested: false, 
                date: "Abierto",
                details: "Especificaciones a tratar",
                skills: "Indiferente",
                manager: { id: 2}
            },
            { 
                id: 5, location: "Mérida Yucatán, México", description: "Diseñador Gráfico", 
                pic: "coyote.jpg", interested: false, 
                date: "Abierto",
                details: "Especificaciones a tratar",
                skills: "Indiferente",
                manager: { id: 2}
            },
            { 
                    id: 6, location: "Tulum", description: "Guitarrista acústico", 
                    pic: "coyote.jpg", interested: false, 
                    date: "Abierto",
                    details: "Especificaciones a tratar",
                    skills: "Indiferente",
                    manager: { id: 2 }
            }
        ];

        // We use promises to make this api asynchronous. This is clearly not necessary when using in-memory data
        // but it makes this service more flexible and plug-and-play. For example, you can now easily replace this
        // service with a JSON service that gets its data from a remote server without having to changes anything
        // in the modules invoking the data service since the api is already async.

        return {

            allInterested: function() {
                var deferred = $q.defer();

                var intereted_jobs = jobs.filter(function(element) {
                    return element.interested == true;
                });

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
                id: 1, name: "René Gilberto Burgos", pic: "pompilogo.jpg", email: 'rene_burgos@gmail.com', business_name: "Casa Pompidou", 
                location: "Mérida Yucatán", country: "México", description: "Bar, Galería de Arte"
            },
            {
                id: 2, name: "Leonardo Torres", pic: "coyote.jpg", email: 'golde_coyote@hotmail.com', business_name: "Golde Coyote", 
                location: "Mérida Yucatán", country: "México", description: "Restaurant Bar"
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

        var profile = { 
            id: 1, name: "Juan Viajero", pic: "stevens.jpg", email: 'traveler@gmail.com',
            skills: [
            {id: 1, name: "Tocar guitarra"}, {id: 2, name: "Enseñanza"}
            ],
            languages:[
                { id: 1, name: "Ingles" },
                { id: 1, name: "Español" }
            ],
            past_jobs: [
                { 
                    id: 6, location: "Tulum", description: "Guitarrista acústico", 
                    pic: "coyote.jpg", interested: false, 
                    date: "Abierto",
                    details: "Especificaciones a tratar",
                    skills: "Indiferente",
                    manager: { id: 2 }
                }
            ]
        };

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