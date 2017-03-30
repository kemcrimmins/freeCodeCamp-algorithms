/*jshint esversion: 6 */

  // I'm a steamroller, baby
  const steamrollArray = arr => arr.reduce(
  (acc, val) => acc.concat(
    Array.isArray(val) ? steamrollArray(val) : val
  ),
  []
);