# types-from-java
generate typescript type definion from java data class

useage

``` js 
import getType from "types-from-java";

/*class MyClass{
Interger var;
}*/
var typeString=getType("class MyClass{Interger var;}")
/*type MyClass = {"var":number, }; */
```