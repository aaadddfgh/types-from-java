import * as pp from "../dist/index"; 

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

const rr = pp.getType(tt);

type MyClass = { "boolean0": boolean, "string1": string, "number2": number, "number3": number, "number4": number, "string5": string, "number6": number, "number7": number, "boolean8": boolean, "string9": string, "number10": number, "number11": number, "number12": number, "string13": string, "number14": number, "number15": number, "string16": string, "any17": any, };

console.log(rr);
