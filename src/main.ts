import {SocialNetwork, Person} from './interfaces';

import * as _ from 'lodash';

class App implements SocialNetwork {
  title = "Suoqin";
  getUsers():Person[] {
    return [{name:"John"}];
  }
}

console.log('the main app returns an array? ', _.isArray(new App().getUsers()));