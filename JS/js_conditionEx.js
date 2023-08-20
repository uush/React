let age = 45;
let charge = 0;

if (age >= 70) {
  charge = 0;
} else if (age >= 20) {
  charge = 1200;
} else if (19 >= age && age >= 14) {
  charge = 720;
} else if (13 >= age && age >= 8) {
  charge = 450;
} else {
  charge = 0;
}
