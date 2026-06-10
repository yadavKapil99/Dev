const data = {
  users: [
    {
      id: 1,
      name: "",
      role: "Captain America",
      skills: ["", "React", "Captain America"],
      projects: [
        {
          title: "",
          owner: "Captain America",
        },
      ],
    },
  ],
  teams: [
    {
      name: "",
      members: [
        {
          role: "Captain America",
        },
      ],
      heroes: [
        "Steve Rogers",
        "Black Widow",
        "Hawkeye",
        "Captain America",
        "Chris Evans",
      ],
    },
  ],
};

const value = structuredClone(data);

let count = 0;

//  This gonna mutate the original object value
function replaceWithMutation(obj) {
  if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      if (item === "") {
        obj[index] = null;
        count++;
      } else {
        replaceWithMutation(item);
      }
    });
  } else if (obj && typeof obj === "object") {
    Object.keys(obj).forEach((key) => {
      if (obj[key] === "") {
        obj[key] = null;
        count++;
      } else {
        replaceWithMutation(obj[key]);
      }
    });
  }
}

replaceWithMutation(value);

function replaceWithoutMutation(obj) {
  if (Array.isArray(obj)) {
    return obj.map(replaceWithoutMutation);
  }

  if (obj && typeof obj === "object") {
    const result = {};

    for (const key in obj) {
      result[key] = replaceWithoutMutation(obj[key]);
    }

    return result;
  }

  if (obj === "") return null;
  if (obj === "Captain America") return "Iron Man";

  return obj;
}
