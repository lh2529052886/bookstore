angular.module("myApp",[])
		.controller("bookManage",function($scope,$http){
			$scope.editBooks=function(index){
				$scope.modIndex=index;
				var book=$scope.data[index];
				$scope.bookIdNew=book.bookId;
				$scope.bookNameNew=book.bookName;
				$scope.bookOriNew=book.bookOri;
				$scope.bookPriceNew=book.bookPrice;
				$scope.bookPubNew=book.bookPub;
				$scope.showBooks=true;
			};
			$scope.confirms=function(bookIdNew,bookNameNew,bookOriNew,bookPriceNew,bookPubNew){
				$http.post("../updatebook.php",{bookId:bookIdNew,bookName:bookNameNew,bookOri:bookOriNew,bookPrice:bookPriceNew,bookPub:bookPubNew})
				.success(function(data){
					if(data.status==1){
						$scope.data[$scope.modIndex].bookName=bookNameNew;
						$scope.data[$scope.modIndex].bookOri=bookOriNew;
						$scope.data[$scope.modIndex].bookPrice=bookPriceNew;
						$scope.data[$scope.modIndex].bookPub=bookPubNew;
						alert("更新成功");
						$scope.showBooks=false;
					}
				});
			}

		})
