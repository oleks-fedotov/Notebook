app.factory("dataService", function ($q, $resource, routeToWebsite) {
    var resource = $resource(routeToWebsite + "Home/GetNotes");
    return {
        getNotes: function () {
            var deferred = $q.defer();
            resource.get({}, function (notes) {
                deferred.resolve(notes);
            },
            function (error) {
                deferred.reject(error);
            })
            return deferred.promise;
        }
    }
});