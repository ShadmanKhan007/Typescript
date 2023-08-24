class Users
{
     private name='anil';// it show error because Property 'name' is private and only accessible within class 'Users'.
     // read only work opposite of private
}
const u1= new Users();
console.warn (u1.name)