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