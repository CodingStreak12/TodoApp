function asyncWrapper(fn) {
  try {
    fn();
  } catch (err) {
    console.log(err);
  }
}
