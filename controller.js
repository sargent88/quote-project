angular.module('quotesPage').controller('mainController', function($scope, mainService) {

    $scope.quotes = mainService.showQuotes();

    $scope.deleteMe = function(removeQuote) {
        mainService.deleteQuotes(removeQuote);
    }

    $scope.addQuote = function() {
        var newQuote = {
            text: $scope.newQuoteText,
            author: $scope.newQuoteAuthor
        }
        if (mainService.addQuotes(newQuote)) {
            $scope.newQuoteText = '';
            $scope.newQuoteAuthor = '';
        }
    }
})