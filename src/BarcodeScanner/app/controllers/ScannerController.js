

app.controller('ScannerController', function ($scope, $cordovaBarcodeScanner) {

    $scope.Data = {};
    $scope.Data.Message = 'Scan Ready!';

    $scope.Scan = function () {

        $scope.Data.Message = 'Clicked Scan!';

        $cordovaBarcodeScanner
        .scan()
        .then(function (barcodeData) {
            
            $scope.Data.Barcode = barcodeData.text;
            $scope.Data.Message = 'Ready!';

        }, function (error) {
            
            $scope.Data.Message = error;

        });


    };

});

