export const MechServiceName = 'MechService';
export const MechService = [
  '$http',
  class MechService{

    constructor($http){
      this.$http = $http;
      this.endpoint = 'https://www.reddit.com/r/MechanicalKeyboards.json';
    }

    getPosts(){
      return this.$http.get(this.endpoint);
    }
  }
];