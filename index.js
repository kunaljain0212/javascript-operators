// Nullish Coalescing Operator (??)

//null or undefined
const a = null ?? "default string";
console.log("a ", a);

const b = 0 ?? 42;
//false
console.log("b ", b);

const c = false ?? true;
console.log("c ", c);

const d = "" ?? "default string";
console.log("d ", d);

const e = NaN ?? "default string";
console.log("e ", e);

const f = undefined ?? "default string";
console.log("f ", f);

// if the value on the left hand side is null or undefined, then the value on the right hand side is returned

// Optional Chaining Operator (?.)
const obj = {
  a: {
    b: 42,
  },
};

const ans = obj.a.b.c?.toString();
console.log("ans ", ans);

const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

const dogName = adventurer.dog?.name ?? "default";
console.log(dogName);

//The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.
