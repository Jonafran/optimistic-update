import {sum, sum$} from "./index";
import {of} from "rxjs";

describe("sum", () => {
    it("sums two numbers", () => {
        expect(sum(1, 2)).toEqual(3);
    });

    it("sum$ two source streams", () => {
        const s1$ = of(1)
        const s2$ = of(2)
        sum$(s1$, s2$).subscribe(result => expect(result).toBe(3))
    })
});
