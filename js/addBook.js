   angular.module("myApp",[])
       .controller("bookManage",function($scope,$http){
        $scope.tips="";
        $scope.editEnable=false;
        $scope.insertBook=function(){
        $scope.editEnable=true;

        $http.post("myApp.php",{
        bookName:$scope.bookName,bookOri:$scope.bookOri,
         bookPrice:$scope.bookPrice,bookPub:$scope.bookPub,
    })
       .success(function(res){
       if(res.status==1){
       $scope.tips="添加书籍成功";
       $scope.editEnable=false;
       $scope.bookName="";
       $scope.bookOri="";
       $scope.bookPrice="";
    $scope.bookPub="";
        }
    })
 }
});