"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.util = exports.getType = void 0;
var JavaParser = require("./parserJava1");
var parsejavaClass = JavaParser.parse;
function createTypeMap(map) {
    var _map = {};
    for (var key in map) {
        _map[key] = map[key];
    }
    _map["boolean"] = _map["boolean"] || "boolean";
    _map["char"] = _map["char"] || "string";
    _map["byte"] = _map["byte"] || "number";
    _map["short"] = _map["short"] || "number";
    _map["int"] = _map["int"] || "number";
    _map["long"] = _map["long"] || "string";
    _map["float"] = _map["float"] || "number";
    _map["double"] = _map["double"] || "number";
    _map["Boolean"] = _map["Boolean"] || "boolean";
    _map["Character"] = _map["Character"] || "string";
    _map["Byte"] = _map["Byte"] || "number";
    _map["Short"] = _map["Short"] || "number";
    _map["Integer"] = _map["Integer"] || "number";
    _map["Long"] = _map["Long"] || "string";
    _map["Float"] = _map["Float"] || "number";
    _map["Double"] = _map["Double"] || "number";
    _map["String"] = _map["String"] || "string";
    _map["Object"] = _map["Object"] || "any";
    return _map;
}
function genType(javaData, map) {
    var _type_str = "type ";
    _type_str = _type_str.concat(javaData.name);
    _type_str = _type_str.concat("={");
    javaData.data.forEach(function (e) {
        _type_str = _type_str.concat("\"");
        _type_str = _type_str.concat(e.name);
        _type_str = _type_str.concat("\":");
        var _type = map[e.type] || e.type;
        _type_str = _type_str.concat(_type);
        _type_str = _type_str.concat(",");
    });
    _type_str = _type_str.concat("};");
    return _type_str;
}
/**
 * If type not exist in map, will use type in source code
 * @param str:string    Java class(only one) code string.
 * @param map:K/V    K:Java Class Name, V:typescript type name.
 * @returns string:  typescript type code string.
 *
 */
var getType = function (str, map) {
    var javaData = parsejavaClass(str);
    var _map = createTypeMap(map);
    return genType(javaData, _map);
};
exports.getType = getType;
exports.util = {
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
    "parsejavaClass": parsejavaClass,
    genType: genType,
};
