import { describe, it } from "mocha";
import Optional from "../lib/optional";
import { expect } from "chai"

describe('test of constructors', () => {
  it('of constructs Optional with value', () => {
    const constructed = Optional.of('test');
    expect(constructed instanceof Optional).to.equal(true);
  });

  it('ofNullAble constructs Optional', () => {
    const constructed = Optional.ofNullable(null);
    expect(constructed instanceof Optional).to.equal(true);
  });

  it('empty constructs Optional without value', () => {
    const nullable = Optional.ofNullable(null);
    const empty = Optional.empty();
    expect(nullable).to.eql(empty);
  });
});

describe('test of emptyness', () => {
  it('Empty Optional returns false by isPressent method', () => {
    expect(Optional.ofNullable(null).isPresent()).to.equal(false);
    expect(Optional.empty().isPresent()).to.equal(false);
  });

  it('Empty Optional returns true by isEmpty method', () => {
    expect(Optional.ofNullable(null).isEmpty()).to.equal(true);
    expect(Optional.empty().isEmpty()).to.equal(true);
  });

  it('Optional with value returns true by isPressent method', () => {
    expect(Optional.of('test').isPresent()).to.equal(true);
  });

  it('Optional with value returns false by isEmpty method', () => {
    expect(Optional.of('test').isEmpty()).to.equal(false);
  });
});

describe('test of getting value', () => {
  it('get method returns value or throw error', () => {
    expect(Optional.of('test').get()).to.equal('test');
    expect(() => Optional.empty().get()).to.throw('No Such Element');
  });

  it('orElse method returns value', () => {
    expect(Optional.of('test').orElse('empty')).to.equal('test');
    expect(Optional.empty().orElse('empty')).to.equal('empty');
  });

  it('orElseThrow method returns value or throw error', () => {
    expect(Optional.of('test').orElseThrow('empty')).to.equal('test');
    expect(() => Optional.empty().orElseThrow('empty')).to.throw('empty');
  });

  it('orElseGet method returns value', () => {
    const fn = () => {
      return 'empty';
    }
    expect(Optional.of('test').orElseGet(fn)).to.equal('test');
    expect(Optional.empty<string>().orElseGet(fn)).to.equal('empty');
  });
});

describe('test of filter, map and ifPresent', () => {
  it('map : take element of object', () => {
    const rawObj = {name: 'test', date: '20200822'};
    expect(Optional.of(rawObj).map(o => o.name)).to.eql(Optional.of('test'));
  });

  it('filter : take even num', () => {
    expect(Optional.of(2).filter(n => n % 2 === 0)).to.eql(Optional.of(2));
    expect(Optional.of(1).filter(n => n % 2 === 0)).to.eql(Optional.empty<number>());
  });

  it('ifPresent: returns text', () => {
    expect(Optional.of('test').ifPresent(s => s)).to.equal('test');
    expect(Optional.empty().ifPresent(s => s)).to.equal(undefined);
  });
});