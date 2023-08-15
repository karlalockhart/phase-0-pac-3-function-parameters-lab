/*function introduction(name) {
    console.log(`Hi, ${name}!`);
    return "Hi, my name is ${name}.";
}


function introduction(name) {
    if (name === Aki) {
      return "Hi, my name is ${name}.";
  }
}
*/

/*
function introduction(name) {
    console.log('Hi, my name is Aki.');
}

introduction("Aki");
*/

function introduction(name) {
    if (name === "Aki") {
      return "Hi, my name is Aki.";
  }
  else if (name === "Samip") {
      return "Hi, my name is Samip.";
  }
}

function introductionWithLanguage(name, language) {
    if (name === "Aki", language === "Ember.js") {
      return "Hi, my name is Aki and I am learning to program in Ember.js.";
  }
  else if (name === "Samip", language === "React") {
      return "Hi, my name is Samip and I am learning to program in React.";
  }
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    if (name === "Gracie", language === "JavaScript") {
      return "Hi, my name is Gracie and I am learning to program in JavaScript.";
  }
  else if (name === "Gracie", language === "Python") {
      return "Hi, my name is Gracie and I am learning to program in Python.";
  }
}