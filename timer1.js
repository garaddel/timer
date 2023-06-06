let timer = process.argv.slice(2);


for (let time of timer) {
  if(time < 0 || isNaN(time)){
    continue;
  }
  time = time * 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time);

}