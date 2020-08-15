"use strict";
var Optional = /** @class */ (function () {
    function Optional() {
    }
    Object.defineProperty(Optional.prototype, "hasValue", {
        get: function () {
            return this.value === null || this.value === undefined ? true : false;
        },
        enumerable: false,
        configurable: true
    });
    Optional.prototype.isEmpty = function () {
        return !this.hasValue;
    };
    Optional.prototype.isPresent = function () {
        return this.hasValue;
    };
    Optional.prototype.ifPresent = function (fn) {
        if (!this.hasValue) {
            return;
        }
        fn(this);
    };
    Optional.prototype.filter = function (fn) {
        if (this.isEmpty()) {
            return this;
        }
        if (fn(this.value)) {
            return this;
        }
        return new Optional();
    };
    Optional.prototype.map = function (fn) {
        if (this.isEmpty()) {
            return this;
        }
        var maped = fn(this.value);
        if (maped === null || maped === undefined) {
            return new Optional;
        }
        return Optional.of(maped);
    };
    Optional.prototype.orElse = function (other) {
        if (this.value === null || this.value === undefined) {
            return other;
        }
        return this.value;
    };
    Optional.prototype.orElseGet = function (fn) {
        if (this.isEmpty()) {
            return fn();
        }
        return this.value;
    };
    Optional.prototype.orElseThrow = function (message) {
        if (this.isEmpty()) {
            throw message;
        }
        return this.value;
    };
    Optional.prototype.get = function () {
        if (this.value === null || this.value === undefined) {
            throw 'No Such Element';
        }
        return this.value;
    };
    Optional.empty = function () {
        return new Optional();
    };
    Optional.of = function (value) {
        var n = new Optional();
        n.value = value;
        return n;
    };
    Optional.ofNullable = function (value) {
        if (value === null || value === undefined) {
            return this.empty();
        }
        return this.of(value);
    };
    return Optional;
}());
module.exports = Optional;
