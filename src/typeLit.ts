// TypeScriptの基本の型

// bool
let bool: boolean = true;

// number
let num: number = 0;

// string
let str: string = "文字";

// array
let arr1: Array<number> = [0,1,2];
let arr2: number[] = [0,1,2];

// tuple
let tuple:[number, string] = [0, "A"];

// any(極力使わない)
let any1:any = false;
let any2:any = 1;

// void
const funcA = ():void => {
    const test = "Test";
}

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object
let obj1: object = {};
let obj2: {id : number, name: string} = {id:0, name:"A"};

