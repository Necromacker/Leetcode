/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  x = init;
  function increment() {
    init++;

    return init;
  }
  function decrement() {
    init--;

    return init;
  }
  function reset() {
    return (init = x);
  }
  return { increment, decrement, reset };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
