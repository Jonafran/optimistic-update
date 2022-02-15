import {combineLatest, map, Observable} from "rxjs";

export function sum(a: number, b: number) {
    return a + b;
}

export function sum$(source$: Observable<number>, source2$: Observable<number>) {
    return combineLatest([source$, source2$]).pipe(
        map(([s1, s2]) => s1 + s2)
    )
}
