
const sentence = "hello there from lighthouse labs";

/** Implement fix for the final line by adding a return '\n'  */
const typewriter = (sentence) => {
  for (let i = 0; i < sentence.length; i += 1) {
    let timeout2 = i * 50;
    setTimeout(() => {
      process.stdout.write(sentence[i]);  
    if (i === sentence.length - 1 ) {
      process.stdout.write('\n');
    }
    }, timeout2);
  }
};

typewriter(sentence);
