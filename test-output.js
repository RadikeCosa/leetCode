const {
  removeElement,
} = require("./dist/top-interview/remove-element/remove-element.js");

const nums1 = [3, 2, 2, 3];
const k1 = removeElement(nums1, 3);
console.log("Ejemplo 1:");
console.log("k =", k1);
console.log("nums =", nums1);
console.log("Primeros k elementos:", nums1.slice(0, k1));
console.log("Elementos después de k:", nums1.slice(k1));
console.log();

const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
const k2 = removeElement(nums2, 2);
console.log("Ejemplo 2:");
console.log("k =", k2);
console.log("nums =", nums2);
console.log("Primeros k elementos:", nums2.slice(0, k2));
console.log("Elementos después de k:", nums2.slice(k2));
