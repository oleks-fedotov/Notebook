app.controller("mainController", function ($scope, dataService) {
    $scope.notes = [];
    dataService.getNotes().then(function (notes) {
        $scope.notes = notes.notes;
    });
        /*[
        { title: "1", mainText: "1", creationDate: new Date() },
        { title: "2", mainText: "1", creationDate: new Date() },
        { title: "3", mainText: "1", creationDate: new Date() },
        { title: "4", mainText: "1", creationDate: new Date() }
    ];*/

    $scope.selectedNote = {};

    
    //newNote : {title, mainText, date}
    $scope.addNote = function () {
        //if (angular.isDefined(newNote) && angular.isDefined(newNote.title) && angular.idDefined(newNote.mainText)) {
        //    $scope.notes.splice(0, 0, { title: newNote.title, mainText: newNote.mainText, creationDate: new Date() });
        //}
        $scope.notes.splice(0, 0, { mainText: "", creationDate: new Date() });
        $scope.selectedNote = $scope.notes[0];
    };

    $scope.removeNote = function (index) {
        if (index >= 0) {
            $scope.notes.splice(index, 1);
        }
        $scope.selectedNote = {};
    };
        
    $scope.calculateTitle = function (content) {
        if(content.length > 8)
            return content.substring(0, 10) + "..";
        return content;
    };

    $scope.selectNote = function (note) {
        $scope.selectedNote = note;
    }
});