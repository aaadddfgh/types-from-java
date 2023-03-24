type javaclasss = {
    "name": string;
    "data": {
        "type": string;
        "name": string;
    }[];
};
declare function genType(javaData: javaclasss, map: any): string;
/**
 * If type not exist in map, will use type in source code
 * @param str:string    Java class(only one) code string.
 * @param map:K/V    K:Java Class Name, V:typescript type name.
 * @returns string:  typescript type code string.
 *
 */
export declare const getType: (str: string, map?: any) => string;
export declare const util: {
    /**
     * peg parser
     * @param input string
     * @returns struct of Java class(only data, without annotation or method)
     * e.g
     * ``` json
    * {
    *    "name": "MyClass",
    *    "data": [
    *       {
    *           "type": "Interger",
    *           "name": "varName"
    *       }
    *    ]
    *}
     * ```
     */
    parsejavaClass: any;
    genType: typeof genType;
};
export {};
