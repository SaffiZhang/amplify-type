"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const saffi_first_type_script_package_1 = require("saffi-first-type-script-package");
exports.handler = async (event = {}) => {
    const greeter = saffi_first_type_script_package_1.Greeter('Everyone');
    console.log(greeter);
    const response = JSON.stringify(event, null, 2);
    return response;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90c2Mtc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUZBQXdEO0FBQzNDLFFBQUEsT0FBTyxHQUFHLEtBQUssRUFBRSxRQUFhLEVBQUUsRUFBZ0IsRUFBRTtJQUMzRCxNQUFNLE9BQU8sR0FBRSx5Q0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hELE9BQU8sUUFBUSxDQUFDO0FBQ3BCLENBQUMsQ0FBQSJ9