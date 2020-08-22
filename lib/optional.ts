import { predicate, consumer, supplier, mapper } from "./customTypes";

export default class Optional<T>{
    private value?: T;
    private get hasValue(){
        return (this.value === null || this.value === undefined) ? false : true;
    }

    public isEmpty(): boolean {
        return !this.hasValue;
    }

    public isPresent(): boolean {
        return this.hasValue;
    }

    public ifPresent(fn: consumer<T>): any{
        if(!this.hasValue){
            return;
        }
        return fn(this.value);
    }

    public filter(fn: predicate<T>): Optional<T>{
        if(this.isEmpty()){
            return Optional.empty<T>();
        }
        if(fn(this.value)){
            return this;
        }
        return new Optional();
    }

    public flatMap<U>(fn: (arg: T) => Optional<U>): Optional<U>{
        if(this.value === null || this.value === undefined){
            return Optional.empty<U>();
        }
        return fn(this.value);
    }

    public map<U>(fn: mapper<T, U>): Optional<U>{
        if(this.isEmpty()){
            return Optional.empty<U>();
        }
        const maped = fn(this.value);
        return Optional.ofNullable(maped);
    }

    public orElse(other: T): T{
        if(this.value === null || this.value === undefined){
            return other;
        }
        return this.value;
    }

    public orElseGet(fn: supplier<T>): T{
        if(this.value === null || this.value === undefined){
            return fn();
        }
        return this.value;
    }

    public orElseThrow(message: string): T{
        if(this.value === null || this.value === undefined){
            throw message;
        }
        return this.value;
    }

    public get(): T{
        if(this.value === null || this.value === undefined){
            throw 'No Such Element';
        }
        return this.value;
    }

    static empty<T>(): Optional<T>{
        return new Optional();
    }

    static of<T>(value: NonNullable<T>): Optional<T>{
        const n = new Optional<T>();
        n.value = value;
        return n;
    }

    static ofNullable<T>(value: T): Optional<T>{
        if(value === null || value === undefined){
            return this.empty<T>();
        }
        return this.of(<NonNullable<T>>value);
    }
}