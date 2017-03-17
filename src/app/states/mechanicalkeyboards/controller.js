export const MechCtrl = ['$scope','MechService', class MechCtrl {
  constructor($scope, MechService) {
    this.title = "Mech";
    $scope.posts = [];
    MechService.getPosts()
    .then( ({
      status,
      data : {
        data : {
          children
        }
      }
    }) => {
      if( status !== 200 ) {
        $scope.error = `Error fetching /r/mechanicalKeyboards.json\nStatus: ${res.status}`;
      }
      $scope.posts = children
        .filter( child => child.data.preview )
        .map( child => child.data );
    })
    .catch( err => console.error(err) );
  }
}];