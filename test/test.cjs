
const mod =require("../dist/index.cjs");

const gg =mod.getType;

import { getType } from "../dist/index.mjs";

/**
 * class MyClass{

boolean	boolean0;
char	string1;
byte	number2;
short	number3;
int	number4;
long	string5;
float	number6;
double	number7;
Boolean	boolean8;
Character	string9;
Byte	number10;
Short	number11;
Integer	number12;
Long	string13;
Float	number14;
Double	number15;
String	string16;
Object	any17;


f (){dss}
}
 */
const tt = "class MyClass{      boolean	boolean0;     char	string1;     byte	number2;     short	number3;     int	number4;     long	string5;     float	number6;     double	number7;     Boolean	boolean8;     Character	string9;     Byte	number10;     Short	number11;     Integer	number12;     Long	string13;     Float	number14;     Double	number15;     String	string16;     Object	any17;               f (){dss}     }";

let rr = pp.getType(tt)===getType(tt)===gg(tt);


console.log(rr);
