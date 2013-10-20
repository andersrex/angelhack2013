// Generated by CoffeeScript 1.6.2
(function() {
  var services;

  services = angular.module('app.services', []);

  services.factory('geocoder', function($q, $rootScope) {
    var geocoder;

    geocoder = new google.maps.Geocoder();
    return {
      geocode: function(address) {
        var deferred;

        deferred = $q.defer();
        geocoder.geocode({
          address: address
        }, function(results, status) {
          var location;

          if (status === google.maps.GeocoderStatus.OK) {
            location = results[0].geometry.location;
          } else {
            location = null;
          }
          deferred.resolve(location);
          return $rootScope.$apply();
        });
        return deferred.promise;
      }
    };
  });

}).call(this);