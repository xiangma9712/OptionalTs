import { describe, it } from "mocha";
import Optional from "../lib/optional";
import { expect } from "chai"

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
});