# types-from-java
generate typescript type definion from java data class

## useage

``` js 
import getType from "types-from-java";

/*class MyClass{
Interger var;
}*/
var typeString=getType("class MyClass{Interger var;}")
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

github: https://github.com/aaadddfgh/types-from-java