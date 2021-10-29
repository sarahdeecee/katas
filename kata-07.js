const checkAir = function (samples, threshold) {
  let totalSamples = samples.length;
  let totalClean = 0;
  let totalDirty = 0;

  for (let sample of samples) {
    if (sample === 'dirty') {
      totalDirty++;
    } else {
      totalClean++;
    }
  }

  if (totalDirty / totalSamples >= threshold) {
    return "Polluted";
  } else {
    return "Clean";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));