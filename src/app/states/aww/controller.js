export const AwwCtrl = ['$scope','AwwService', class AwwCtrl {
  constructor($scope, AwwService) {
    this.title = "Awwww";
    $scope.posts = [];
    AwwService.getPosts()
    .then( ({
      status,
      data : {
        data : {
          children
        }
      }
    }) => {
      if( status !== 200 ) {
        $scope.error = `Error fetching /r/aww.json\nStatus: ${res.status}`;
      }
      $scope.posts = children
        .filter( child => child.data.preview )
        .map( child => child.data );
    })
    .catch( err => console.error(err) );
  }
}];