class Rectange {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    const area = this.width * this.height;
    return area;
  }

  paint() {
    console.log(`The rectangle is painted ${this.color}`);
  }
}

const rect = new Rectange(5, 10);
const area = rect.area();
console.log(`The area of the rectangle is ${area}`);




// String is also a class in JavaScript, and we can create string objects using the String constructor.
const str1 = new String("Hello, World!");
console.log(str1.toLowerCase()); // Output: "hello, world!"

// We can also create string literals, which are more commonly used.
const str2 = "Hello, World!";
console.log(str2.toUpperCase()); // Output: "HELLO, WORLD!"
