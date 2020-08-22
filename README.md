# Optional.ts

Optional.ts emulate [Optional](https://docs.oracle.com/javase/8/docs/api/java/util/Optional.html) class of Java lang. It brings null-safety to TypeScript.

## Instllation

To install Optinal.ts, use npm.  
```
$ npm i @xiangma9712/optional.ts
```

Then import to your project.
```index.js
import Optional from "@xiangma9712/optional.ts";
```

### Dependency
TypeScript: >=2.8.1  

## Method Summery

|Modifier and Type|Method|Description|
|:-|:-|:-|
|static Optional\<T\>|empty\<T\>()|Returns an empty Optional.| 
|Optional\<T\>|filter(predicate: (T)=> boolean)|If value is present, and the value matches the given predicate, return an Optional describing the value, otherwise return an empty Optional.| 
|Optional\<U\>|flatmap(mapper: (T) => Optional\<U\>)|If a value is present, apply the provided Optional-bearing mapping function to it, return that result, otherwise return an empty Optional.|
|T|get()|If a value is present, returns the value, otherwise throws 'No Such Element'|
|any|ifPresent(consumer: (T) => any)|If a value is present, invoke the specified consumer with the value, otherwise do nothing.|
|boolean|isPresent()|Return true if there is a value present, otherwise false.|
|Optional\<U\>|map(mapper: (T) => U)|If a value is present, apply the provided mapping function to it, and if the result is non-null, return an Optional describing the result.|
|Optinal\<T\>|of(value: NonNullable<T>)|Returns an Optional with the specified present non-null value.|
|Optinal\<T\>|ofNullable(value: T)|Returns an Optional describing the specified value, if non-null, otherwise returns an empty Optional.|
|T|ofElse(other: T)|Return the value if present, otherwise return other.|
|T|orElseGet(supplier: (...any) => T)|Return the value if present, otherwise invoke supplier and return the result of that invocation.|
|T|orElseThrow(message: string)|Return the contained value, if present, otherwise throw an error with the message|

### Note

- `of(null)` doesn't throw an error  
Unlike Java Optional, `Optional.of(null)` doesn't throw an error. Since the argument of `of()` is defined as `NonNullable<T>`, you will see the following error message in coding.  
```
Argument of type 'null' is not assignable to parameter of type 'never'. ts(2345)
```

- `ifPresnt()` can return value  
In Optional.ts, you can use function which returns value as a argument of `ifPresent()` method.
