import { predicate, consumer, supplier, mapper } from "./customTypes";
export default class Optional<T> {
    private value?;
    private get hasValue();
    isEmpty(): boolean;
    isPresent(): boolean;
    ifPresent(fn: consumer<T>): any;
    filter(fn: predicate<T>): Optional<T>;
    flatMap<U>(fn: (arg: T) => Optional<U>): Optional<U>;
    map<U>(fn: mapper<T, U>): Optional<U>;
    orElse(other: T): T;
    orElseGet(fn: supplier<T>): T;
    orElseThrow(message: string): T;
    get(): T;
    static empty<T>(): Optional<T>;
    static of<T>(value: NonNullable<T>): Optional<T>;
    static ofNullable<T>(value: T): Optional<T>;
}
