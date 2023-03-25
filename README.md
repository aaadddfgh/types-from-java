# types-from-java
generate typescript type definion from java data class  
can only generate one class in one time, can not parse `import`,  
can parse Annotion and Method, but without any effect.

npm: https://www.npmjs.com/package/types-from-java  
online: [gitpage](https://aaadddfgh.github.io/types-from-java/)  


## useage

``` js 
const {getType} = require("types-from-java");
//or es
//import {getType} from "types-from-java";

/*class MyClass{
Interger var;
}*/
var typeString=getType("class MyClass{Integer var;}")
/*type MyClass = {"var":number, }; */
```

## map 
defualt map, you can change second parm of `getType` to overwrite or add new
| java | typescript |
| --- | --- |
|  boolean  |	boolean|
|char	|string|
|byte	|number|
|short	|number|
|int	|number|
|long	|string|
|float	|number|
|double	|number|
|Boolean |	boolean|
|Character|	string|
|Byte|	number|
|Short|	number|
|Integer|	number|
|Long|	string|
|Float|	number|
|Double|	number|
|String|	string|
|Object|	any|

peg grammar defined in parser fold.
github: https://github.com/aaadddfgh/types-from-java