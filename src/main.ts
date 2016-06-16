import {SocialNetwork, Person} from './interfaces';

class App implements SocialNetwork {
  title = "Suoqin";
  getUsers():Person[] {
    return [{name:"John"}];
  }


}

new App();