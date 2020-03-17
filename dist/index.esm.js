var duningtest;

(function (duningtest) {
  function dn1(msg) {
    console.log(msg);
  }

  duningtest.dn1 = dn1;

  function dn2(msg) {
    console.log(msg);
  }

  duningtest.dn2 = dn2;
})(duningtest || (duningtest = {}));

export { duningtest };
