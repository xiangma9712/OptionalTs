type nonNullArg = Exclude<any, null | undefined>;

class Optional<T>{
    private value?: T;
    private get hasValue(){
        return this.value === null || this.value === undefined ? true : false;
    }

    public isEmpty(): boolean {
        return !this.hasValue;
    }

    public isPresent(): boolean {
        return this.hasValue;
    }

    public ifPresent(fn: Function): void{
        if(!this.hasValue){
            return;
        }
        fn(this);
    }

    public filter(fn: Function): Optional<T>{
        if(this.isEmpty()){
            return this;
        }
        if(fn(this.value)){
            return this;
        }
        return new Optional();
    }

    public map(fn: Function){
        if(this.isEmpty()){
            return this;
        }
        const maped = fn(this.value);
        if(maped === null || maped === undefined){
            return new Optional;
        }
        return Optional.of(maped);
    }

    public orElse(other: T): T{
        if(this.value === null || this.value === undefined){
            return other;
        }
        return this.value;
    }

    public orElseGet(fn: Function){
        if(this.isEmpty()){
            return fn();
        }
        return this.value;
    }

    public orElseThrow(message: string){
        if(this.isEmpty()){
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

    static empty(){
        return new Optional();
    }

    static of(value: nonNullArg){
        const n = new Optional();
        n.value = value;
        return n;
    }

    static ofNullable(value: any){
        if(value === null || value === undefined){
            return this.empty();
        }
        return this.of(value);
    }
}

module.exports = Optional;