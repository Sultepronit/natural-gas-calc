import { Hc0C } from "./Hc0C";
import { Ms } from "./Ms";
import { names } from "./names";

export const componentConsts = names.map((name, index) => {
    // console.log(index, name);
    return {
        name,
        M: Ms[index],
        Hc0C: Hc0C[index]
    }
});