function addAge(age) {
  return function (targetClass) {
    return class {
      name = new targetClass().name
      age = age;
    }
  }
}

@addAge(30)
export class Person2 {
  name = "John";
}