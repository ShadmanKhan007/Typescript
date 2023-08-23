"use strict";
class Users {
    constructor() {
        this.name = 'anil'; // it show error because Property 'name' is private and only accessible within class 'Users'.
    }
}
const u1 = new Users();
console.warn(u1.name);
