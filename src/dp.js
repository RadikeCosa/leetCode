function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
const foo = (n) => {
  if (n <= 1) return;
  foo(n - 1);
};
