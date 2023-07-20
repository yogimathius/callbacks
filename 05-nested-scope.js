// GLOBAL SCOPE
const answerToTheUniverse = 42;

const first = () => {
  // LOCAL SCOPE

  console.log("first");

  const second = () => {
    console.log("second");

    const third = () => {
      const beer = "corona";
      console.log("third");

      const fourth = () => {
        console.log("fourth ", answerToTheUniverse, beer);
        // second();
      };
      fourth();
      // second();
    };
    third();
    // second();
  };
  second();
};

first();
// second();

console.log(answerToTheUniverse);
