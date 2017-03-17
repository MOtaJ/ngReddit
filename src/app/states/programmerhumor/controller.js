export const ProgCtrl = ['$scope','ProgService', class ProgCtrl {
  constructor($scope, ProgService) {
    this.title = "Prog";
    $scope.posts = [];
    ProgService.getPosts()
    .then( ({
      status,
      data : {
        data : {
          children
        }
      }
    }) => {
      if( status !== 200 ) {
        $scope.error = `Error fetching /r/programmerHumor.json\nStatus: ${res.status}`;
      }
      $scope.posts = children
        .filter( child => child.data.preview )
        .map( child => child.data );
    })
    .catch( err => console.error(err) );
  }
}];