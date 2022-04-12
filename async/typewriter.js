const sentence = "cat in the hat";
let delay = 0;
for (let i = 0; i < sentence.length; i++) {
   
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, delay += 100);
  
}
setTimeout(() => {
  console.log("");
}, delay);






