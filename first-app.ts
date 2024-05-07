let userName = 'Max'; // variable with inference type safety 
let var_str: string;  // variable with explicit typescript 
let var_any; // variable without type safety
let var_overkill: string = 'Max'; // this is overkill
let var_boolean = true;
let var_num = 11;
// string, number, boolean 

// type save examples
var_str = 'this is a string'
var_boolean = true
var_num = 12 

let var_mix: string | number // either a string ot number
var_mix = 123
var_mix = 'abc'

let var_loose_object: object; // this is a object with naything

var_loose_object = {
    name: 'max',
    age: 34,
    isAdmin: true,
    id: 'abc'
}

var_loose_object = {
    name: 'max',
    age: 34,
    isAdmin: true,
}

let var_strict_object: {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number;
};

var_strict_object = {
    name: 'max',
    age: 34,
    isAdmin: true,
    id: 'abc'
}

let var_array_str: Array<string>; // needs the related value types
let var_alt_array_str: string[] // this is the shortcut and more commonly used


// example of a complex function: function add (a:number, b:{value: number})

// the function "add" takes two inputs and and b with the specified types to yield an expected output
function my_add (a:number, b:number) :any {
    const result = a + b;
    console.log(result);
}

// this is a function which will return no results
function my_add_void (a:number, b:number) : void {
    const result = a + b;
    console.log(result);
}


// lets create an alias type / create custom types
type addFN = (a:number, b:number) => number; 

function my_calc(
    a:number, 
    b:number, 
    // rather than stroring this janky code: calcFn: (a: number, b: number) => number 
    // we can use this instead
    calcFn: addFN // lets use the type "addFN"
    ) {
    calcFn(a,b)
}

my_calc(2,5,my_add)

// const == forced key value

// lets define and object with the following pattern note here we use the word interface rather than type
// note you can redefine interface declaration merging without extra work and error of redeclaring a variable
interface Credentials {
    email: string
    password: string;// for creatting objects
}

let creds: Credentials;

creds = {
    email: 'test@a.a',
    password: 'password'
}

// here the class AuthCredentials uses the contract Credentials that was defined above
class AuthCredentials implements Credentials {
    email: string;
    password: string;
}


// lets create a log in function that uses the defined credentials
function login(credentials: Credentials) {

}

login(creds) // no class
login(new AuthCredentials()) //this is class


// -- start: how can we merge two types? we need to use "&"" --
type Type_Admin = {
    permission: string[];
}

type Type_AppUser = {
    userName: string;
}

// this is now a union of two 
type Type_AppAdmin = Type_Admin & Type_AppUser
// -- end --


//-- start: how can we merge two interfact? --
// first we define the main interface contracts
interface Admin {
    permissions:string[]
}
interface AppUser {
    userName: string;
}
// now we combin the interface contracts
interface AppAdmin extends Admin, AppUser{}

// now lets declare the contract of admin
let admin: AppAdmin;

// now lets define admin
admin = {
    permissions: ['read', 'write'],
    userName: 'mary'
}
//-- end --

// -- start: how can we define a list of valid values --
type role: 'admin' | 'read-only' | 'read-write';
// role = 'test'; this is invalid because test is not part of the type role
let role = 'admin';
// -- end --

// -- start: how to execute a function when the value is X
function performAction (action: string, role: role) {
    if (role === 'admin' && typeof action ==='string') {
        // function when role = admin and the action = 'string'
    }
}
// -- end --