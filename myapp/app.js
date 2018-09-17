var myApp = angular.module('myApp', ['ngRoute']);

myApp.run(function() {
    console.log("app run");
});

myApp.config( function($routeProvider) {
    console.log("app config");
    $routeProvider
    .when('/',{
      templateUrl : 'views/add.html',
      controller : 'addCtrl'
    })
    .when('/view',{
      templateUrl : 'views/view.html',
      controller : 'viewCtrl'
    });
});


myApp.controller('viewCtrl', function($scope,$http) {
    console.log("view controller");
      $(document).ready(function () {
        $http.get('api/athletes').then(function (response){
          $scope.projectdata=response.data;
        },function(error){
          console.log("error");
        });
      });

  });

myApp.controller('addCtrl', function($scope,$http) {
    console.log("add controller");
    $scope.sports=['Golf',
'Tennis',
'Cricket',
'Basketball',
'Baseball',
'American Football',
'Aquatics',
'Archery',
'Automobile Racing',
'Badminton',
'Beach Volleyball',
'Bobsleigh',
'Body Building',
'Boxing',
'Cross Country Running',
'Cross Country Skiing',
'Curling',
'Cycling',
'Darts',
'Decathlon',
'Down Hill Skiing',
'Equestrianism',
'eSports',
'Fencing',
'Field Hockey',
'Figure Skating',
'Gymnastics',
'Ice Hockey',
'Martial Arts',
'Mixed Martial Arts',
'Modern Pentathlon',
'Motorcycle Racing',
'Netball',
'Polo',
'Racquetball',
'Rowing',
'Rugby',
'Sailing',
'Softball',
'Shooting',
'Skateboarding',
'Skeet Shooting',
'Skeleton',
'Snow Boarding',
'Soccer (Football)',
'Squash',
'Surfing',
'Swimming',
'Track and Field'];

    $scope.submitData = function(){
      console.log("saving data");

      $http({
        method :'POST',
        url : 'api/athletes',
        data : $scope.projectdata
      }).then(function (success){
        window.location = '#/view'
      },
      function (error){
        alert('error');
      });
    };

    $(document).ready(function () {

    var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');
});
});
