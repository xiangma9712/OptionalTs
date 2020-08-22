"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Optional = /** @class */ (function () {
    function Optional() {
    }
    Object.defineProperty(Optional.prototype, "hasValue", {
        get: function () {
            return (this.value === null || this.value === undefined) ? false : true;
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
        return fn(this.value);
    };
    Optional.prototype.filter = function (fn) {
        if (this.isEmpty()) {
            return Optional.empty();
        }
        if (fn(this.value)) {
            return this;
        }
        return new Optional();
    };
    Optional.prototype.flatMap = function (fn) {
        if (this.value === null || this.value === undefined) {
            return Optional.empty();
        }
        return fn(this.value);
    };
    Optional.prototype.map = function (fn) {
        if (this.isEmpty()) {
            return Optional.empty();
        }
        var maped = fn(this.value);
        return Optional.ofNullable(maped);
    };
    Optional.prototype.orElse = function (other) {
        if (this.value === null || this.value === undefined) {
            return other;
        }
        return this.value;
    };
    Optional.prototype.orElseGet = function (fn) {
        if (this.value === null || this.value === undefined) {
            return fn();
        }
        return this.value;
    };
    Optional.prototype.orElseThrow = function (message) {
        if (this.value === null || this.value === undefined) {
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
exports.default = Optional;
