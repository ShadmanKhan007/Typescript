"use strict";
var Data;
(function (Data) {
    Data[Data["ADMIN"] = 0] = "ADMIN";
    Data[Data["MANAGER"] = 1] = "MANAGER";
    Data[Data["READ_ONLY"] = 2] = "READ_ONLY";
})(Data || (Data = {}));
console.log(Data.ADMIN);
