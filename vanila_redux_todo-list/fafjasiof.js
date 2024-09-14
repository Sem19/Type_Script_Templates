const check = (mounth) => {
  switch (mounth) {
    case "december": {
      return console.log("now is winter");
    }

    case "june": {
      return console.log("now is summer");
    }

    default: {
      return console.log("this is not a mounth");
    }
  }
};

console.log(check("decefasfmber"));
