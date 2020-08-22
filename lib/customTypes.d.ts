/**
 * arg type of filter method
 */
export type predicate<T> = (T) => boolean;

/**
 * arg type of ifPresent method
 */
export type consumer<T> = (T) => any;

/**
 * arg type of orElseGet method
 */
export type supplier<T> = (...any) => T;

/**
 * arg type of map method
 */
export type mapper<T, U> = (T) => U;