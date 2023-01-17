let counter = 0;
let intervalId;
const animateProgress = (i = 0) => {
  if (counter === 5) {
    clearTimeout(intervalId);
    return;
  }
  const animation = ['|', '/', '-', '\\', '|', '/', '-', '|'];
  process.stdout.write(`\r ${animation[i]}`);
  counter++;
  if (i === animation.length - 1) i = 0;
  else i++;
  intervalId = setTimeout(() => animateProgress(i), 200);
};
animateProgress();