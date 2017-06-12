function phoneCtrl() {
    var vm = this;
    vm.test = 'Some word 1';
}

angular.module('phoneBook', []).controller('phoneCtrl', [phoneCtrl])
