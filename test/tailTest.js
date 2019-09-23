// TAIL...
const tail = require("../tail");

const assert = require("chai").assert;

describe("tail()", () => {
  it('should return ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const words1 = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words1), ["Lighthouse", "Labs"]);
  });

  it('should return ["Robert", "Gillies", "Stark"] for ["Jackson", "Robert", "Gillies", "Stark"]', () => {
    const words2 = ["Jackson", "Robert", "Gillies", "Stark"];
    assert.deepEqual(tail(words2), ["Robert", "Gillies", "Stark"]);
  });

  it('should return ["Leornard"] for ["Leornard"]', () => {
    const words3 = ["Leornard"];
    assert.deepEqual(tail(words3), ["Leornard"]);
  });
});