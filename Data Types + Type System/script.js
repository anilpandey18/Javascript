// data types
//data ka types

//primitives -> aise saari values jinko copy karne par tumhe ek real copy mil jaaye
// string, number, boolean, null, undefined, symbol, bigint


//reference -> inko copy karne par real copy nahi milegi but aapko  reference milega parent ka 
// arrays, objects, functions

// string, number, boolean, null, undefined, symbol, bigint 

  //  string
// '' - single quotes 
// "" - double quotes
// `` - backticks

  // number
// 12 - number
// 12.3 - number

  // Boolean means true or false 
// let a = true;
// let b = false;

//Null ka matlab hai aapne jaan boojh kar koi value nahi di

// let selectedStudents = null;

// undefined ka matlab ki aapne ek variable banaya aur usey value nahi di to jo value by default mili wo hai undefined
// let a;   

  // future mein hum koi libraries use karege ab it case mein un libraries mein kai baar kuch fields hoti hai jinse 
  // similar hum bhi banaa deta ha aur galti se humaari baanaai hui fields us library ki original fields ko chnage kar deta hai  
//symbol -> unique immutable value

    //  let u1 = Symbol("uid");  yin ka value same nahi hota  
     // let u2 = Symbol("uid");

  //bigint

// let a = 9007199254740991n;
// a + 12n bigint ma k hunca vane kunai pane Number add garna paro vanne hami le last ma a sanga kunai pane number add gare last ma n lini

    // arrays, objects, functions

// let a = {
//     name:"anil",
// };
// let b = a;    auta ma change gare sabai maa change hunxa jastai b ma change gare a ma pane change hunca

// b.name = "kenzo";


// Dynamic typing -> js mein static typing nahi hai yaha par hai dynamic typing jiska matlab hai aap data ko change 
// kr skte ho kyukli yaha par dynamic data types hai 

// let a = 12;
// a = true;
// a = "anil";
// a = [];
// a = null;
// a = undefined; yes bata k bujen xa vane hami le a ko value jati choti change gare pane tes lai farak pardai na

// typeof quirks (e.g., typeof null === 'object')

// Type coercion (== vs ==)
// Truthy vs falsy values 

// type coercion -> concept jismein aapka ek type automatically convert hojayaaga

// 0 false "" null undefined NaN document.all  -- yaa sari values false he hoti haa
// rest all -> true  
  