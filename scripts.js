// function check(number) {
//   return number > 0 && number % 1 == 0;
// }

// var input = prompt("nhap vao 1 so");
// input = parseFloat(input);

// var res = check(input);

// if (isNaN(input)) {
//   alert("khong phai so");
// } else {
//   if (res === true) {
//     alert("yes");
//   } else {
//     alert("no");
//   }
// }

// function laSoNguyenDuong(value) {
//     return value > 0 && value % 1 == 0;
//   };

//   var input = prompt("Nhập một số bất kỳ", "");

//   if (isNaN(input)) {
//     alert("Vui lòng nhập một số!");
//   } else {
//     var result = laSoNguyenDuong(input);
//     if (result == true) {
//       alert("YES");
//     } else {
//       alert("NO");
//     }
//   }

// const sum = (array) => {
//   const total = array.reduce((total, number) => total + number, 0);
//   return total;
// };

// const isShapePossible = (n, angles) => {
//   if (n < 3) return false;

//   if (angles.some((angle) => angle <= 0 || angle >= 180)) return false;

//   return sum(angles) === (n - 2) * 180;
// };

// const test1 = isShapePossible(4, [90, 90, 90, 90]);
// console.log(test1); // true

// const test2 = isShapePossible(3, [20, 20, 140]);
// console.log(test2); // true

// const test3 = isShapePossible(1, [21]);
// console.log(test3); // false

// const test4 = isShapePossible(5, [500, 0, 20, 10, 10]);
// console.log(test4); // false

//ham tra ve tong 3 goc cua tam giac
// const sum = (gocs) => {
//   const res = gocs.reduce((tong, goc)=>tong + goc, 0);
//   return res;
// }

// const isShapePossible = (n, gocs) => {
//   if(n<3) {
//     return false;
//   }

//   if(gocs.some(goc => goc < 0 || goc > 180)){
//     return false;
//   }
//   return sum(gocs) === (n-2) *180;
// }

// const test1 = isShapePossible(4, [90, 90, 90, 90]);
// console.log(test1); // true

// const test2 = isShapePossible(3, [20, 20, 140]);
// console.log(test2); // true

// const test3 = isShapePossible(1, [21]);
// console.log(test3); // false

// const test4 = isShapePossible(5, [500, 0, 20, 10, 10]);
// console.log(test4); // false

//c1
// const abbreviate = (string, n=0) => {
//   let array = string.split(" "); //chuyen chuoi thanh array
//   let arrayFilter = array.filter((item) => item.length >= n);
//   let arrayMap = arrayFilter.map((item)=> {
//     return item[0]}
//   );

//   let result = arrayMap.join("");
//   return result.toUpperCase();
// }

// const test1 = abbreviate("Xin chào! Tôi tên là Nam.");
// console.log(test1); // XCTTLN

// const test2 = abbreviate("Xin chào! Tôi tên là Nam.", 3);
// console.log(test2); // XCTTN --> Chữ "là" bị bỏ qua, vì có 2 ký tự, nhỏ hơn n = 3

// const test3 = abbreviate("Xin chào! Tôi tên là Nam.", 4);
// console.log(test3); // CN --> Các chữ có 3 ký tự trở xuống bị bỏ, vì n = 4

//c2
// const abbreviate = (string, n = 0) => {
//   const res = string
//     .split(" ")
//     .filter((item) => item.length >= n)
//     .map((item) => {
//       return item[0];
//     })
//     .join("")
//     .toUpperCase();
//   return res;
// };
// const test1 = abbreviate("Xin chào! Tôi tên là Nam.");
// console.log(test1); // XCTTLN

// const test2 = abbreviate("Xin chào! Tôi tên là Nam.", 3);
// console.log(test2); // XCTTN --> Chữ "là" bị bỏ qua, vì có 2 ký tự, nhỏ hơn n = 3

// const test3 = abbreviate("Xin chào! Tôi tên là Nam.", 4);

//tach cac chu-index chan: hoa, index le: thuong - join thanh chuoi

// const res = (string) => {
//   return string
//     .trim()
//     .split("")
//     .map((item, index) => {
//       if (index % 2 == 0) {
//         return item.toUpperCase();
//       } else {
//         return item.toLowerCase();
//       }
//     })
//     .join("");
// };
// console.log(res("Kha Banh"));

// const median = (array) => {
//   let leng = array.length;
//   if(leng % 2 !== 0){
//     return array[Math.floor(leng / 2)];
//   }
//   return ((array[leng / 2] + array[leng /2 -1]) / 2).toFixed(1);
// }

// const test1 = median([1, 2, 4, 5, 6, 8, 8, 8, 10]);
// console.log( typeof test1); // 6

// const test2 = median([2, 2, 6, 8, 8, 10, 10]);
// console.log(typeof test2); // 8

// const test3 = median([1, 2, 2, 4, 7, 8, 9, 10]);
// console.log(typeof test3); // 5.5

// const sum = (arr) => {
//   return arr.reduce((total, num) => total + num, 0);
// };

// const mean = (arr) => {
//   return sum(arr) / arr.length;
// };

// const median = (arr) => {
//   const numberBefore = arr[Math.floor((arr.length - 1) / 2)];
//   const numberAfter = arr[Math.ceil((arr.length - 1) / 2)];

//   return mean([numberBefore, numberAfter]);
// };

// const test1 = median([1, 2, 4, 5, 6, 8, 8, 8, 10]);
// console.log(test1); // 6

// const test2 = median([2, 2, 6, 8, 8, 10, 10]);
// console.log(test2); // 8

// const test3 = median([1, 2, 2, 4, 7, 8, 9, 10]);
// console.log(test3); // 5.5

// const sum = (array) => {
//   return array.reduce((total, number) => total + number, 0);
// };

// const mean = (array) => {
//   return sum(array) / array.length;
// };

// const median = (arr) => {
//   const beforee = arr[Math.floor((arr.length - 1) / 2)];
//   const afterr = arr[Math.ceil((arr.length - 1) / 2)];
//   return mean([beforee, afterr]);
// };
// const test1 = median([1, 2, 4, 5, 6, 8, 8, 8, 10]);
// console.log(test1); // 6

// const test2 = median([2, 2, 6, 8, 8, 10, 10]);
// console.log(test2); // 8

// const test3 = median([1, 2, 2, 4, 7, 8, 9, 10]);
// console.log(test3); // 5.5

// const getBirthdayCake = (name, age) => {
//   const char = age % 2 === 0 ? '#' : '*';

//   const middle = `${char} ${age} Chúc mừng sinh nhật ${name}! ${age} ${char}`;

//   const edge = char.repeat(middle.length); // repeat(n) để lặp lại n lần

//   return `
//     ${edge}
//     ${middle}
//     ${edge}
//   `;
// };

// const test1 = getBirthdayCake("Nam", 18);
// console.log(test1);
// /*
//   ##################################
//   # 18 Chúc mừng sinh nhật Nam! 18 #
//   ##################################
// */

// const test2 = getBirthdayCake("Long", 17);
// console.log(test2);
/*
 ***********************************
 * 17 Chúc mừng sinh nhật Long! 17 *
 ***********************************
 */

// const getBirthdayCake = (name, age) => {
//   const char = age % 2 == 0 ? "#" : "*";
//   const mid = `${char} ${age} chuc mung sinh nhat ${name} ! ${age}`;
//   const edge = char.repeat(mid.length);
//   return  `
//   ${edge}
//   ${mid}
//   ${edge}`;
// }

// const test2 = getBirthdayCake("Long", 17);
// console.log(test2);

/**
 *
 */

// const blah = (string, number) => {
//   string = string.split(" ");
//   let newArray = string.map((item, index, array) => {
//     return number > array.length - index -1 ? "blah" : item;
//   });

//   let res = newArray.join(" ");
//   return res;
// };

// console.log(blah("Anh học CNTT hả, cài win dùm em nhé!", 3));

// const sum = (array) => {
//   return array.reduce((total, number) => total + number, 0);

// }

// const getTotalPrice = (array) => {
//   const totalprice = array.map((item) => item.quantity * item.price);
//   return sum(totalprice);
// }

// const test1 = getTotalPrice([
// 	{ product: "Sữa", quantity: 1, price: 7000 }
// ]);
// console.log(test1); // 7000

// const test2 = getTotalPrice([
//   { product: "Sữa", quantity: 1, price: 7000 },
//   { product: "Ngũ cốc", quantity: 1, price: 50000 },
// ]);
// console.log(test2); // 57000

// const test3 = getTotalPrice([
// 	{ product: "Sữa", quantity: 3, price: 7000 }
// ]);
// console.log(test3); // 21000

// const test4 = getTotalPrice([
//   { product: "Sữa", quantity: 1, price: 7000 },
//   { product: "Trứng", quantity: 12, price: 3000 },
//   { product: "Bánh mỳ", quantity: 2, price: 15000 },
//   { product: "Phô mai", quantity: 1, price: 5000 },
// ]);
// console.log(test4); // 78000

// const test5 = getTotalPrice([
//   { product: "Sô cô la", quantity: 1, price: 12000 },
//   { product: "Kẹo", quantity: 1, price: 2000 },
// ]);
// console.log(test5); // 14000

// const capitial = (string) => {
//   return array.slice(0, 1).toUpperCase() + array.slice(1);
// }

// const makeTitle = (string) => {
//   return string.split(" ").map(capitial).join(" ");
// }

// const capitalize = (string) => {
//   return string.slice(0, 1).toUpperCase() + string.slice(1);
// };

// const makeTitle = (string) => {
//   return string.split(" ").map(capitalize).join(" ");
// };

// const test1 = makeTitle("Fix bug là chuyện dễ. Tìm đoạn code gây ra bug để fix mới là chuyện khó.");
// console.log(test1);

// const test2 = makeTitle("Khi tui biên dịch và code chạy suôn sẻ trong lần đầu. Tui tự hỏi đã làm sai chỗ nào.");
// console.log(test2);

// const chooseFuse = (array, current) => {
//   const num = parseFloat(current);
//   const result = array.map(parseFloat).filter((item) => item >=num);
//   return Math.min(...result)+"v";
// }

// const chooseFuse = (fuses, current) => {
//   const num = parseFloat(current);
//   const possibleFuses = fuses.map(parseFloat).filter((fuse) => fuse >= num);

//   return `${Math.min(...possibleFuses)}V`;
// };

// const test1 = chooseFuse(["3V", "5V", "12V"], "4.5V");
// console.log(test1); // 5V

// const test2 = chooseFuse(["5V", "14V", "2V"], "5.5V");
// console.log(test2); // 14V

// const test3 = chooseFuse(["17V", "15V", "12V"], "9V");
// console.log(test3); // 12V

// const countOnes = (array) =>{
//   const res = array.reduce((total, row) => total + row.filter((item) => item == 1).length, 0);
//   return res;
// }

// const test1 = countOnes([
//   [1, 0],
//   [0, 0],
// ]);
// console.log(test1); // 1

// const test2 = countOnes([
//   [1, 1, 1],
//   [0, 0, 1],
//   [1, 1, 1],
// ]);
// console.log(test2); // 7

// const test3 = countOnes([
//   [1, 2, 3],
//   [0, 2, 1],
//   [5, 7, 33],
// ]);
// console.log(test3); // 2

// const swappingCases = (string) => {
//   let newString = string.split("");
//   const res = newString.map((item) => {
//     if(item === item.toUpperCase()){
//      return  item.toLowerCase();
//     }else{
//       return item.toUpperCase();
//     }
//   })
//   return res.join("");
// }

// console.log(swappingCases("Le VAn HunG"));

// const invertedNumbers = (array) => {
//   const res  = array.map((item) => {
//     return item < 0 ? Math.abs(item) : item * (-1);
//   })

//   return res;
// }

// console.log(invertedNumbers([1, -10, -20, 15, 100, -30]));

// const ignoreNumber = (string) => {
//   const res = string.split("").map((item) => {
//     return isNaN(parseInt(item)) ? item : "";
//   }).join("");
//   return res;
// }

// console.log(ignoreNumber("Test4Ag54SF"));

// const smallWords = (string, number) => {
//   const newString = string.split(" ").map((item) => {
//     if(item.length <= number){
//       return item;
//     }
//   }).join(" ");
//   return newString;
// }

// const smallWords = (string, number) => {
//   const newString = string
//     .split(" ")
//     .filter((item) => item.length <= number)
//     .join(" ");
//   return newString;
// };

// const test1 = "I Love Foood Code Too Playing Much";
// console.log(smallWords(test1, 4));
// // Trả về: I Love Code Too Much

// const test2 = "I Love Foood Code Too Playing Much";
// console.log(smallWords(test2, 3));
// Trả về: I Too

// const multiplyNumberInString = (string) => {
//   const newString = string.split("");
//   const aray = newString.filter((item) => !isNaN(parseInt(item))).map((item) => item * item).join("");
//   return aray.length > 0 ? aray : "0";
// }

// const test1 = "JG23BGH5BA";
// console.log(multiplyNumberInString(test1)); // "4925"

// const test2 = "VD23GS8S6AH";
// console.log(multiplyNumberInString(test2)); // "496436"

// const test3 = "AGD353GDSK8";
// console.log(multiplyNumberInString(test3)); // "925964"

// const test4 = "JBKJJKLDJ";
// console.log(multiplyNumberInString(test4)); // "0"

// const res = (array) => {
//   const result = array.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
//   return result;
// };

// const cart = [
//   {
//     name: "iphone",
//     price: 1000,
//     quantity: 5,
//   },
//   { name: "ipad", price: 500, quantity: 2 },
//   { name: "macbook", price: 2000, quantity: 1 },
// ];

// console.log(res(cart));


// const students = [
//   { hoTen: "Le Van A", gioiTinh: "Nam" },
//   { hoTen: "Do Van B", gioiTinh: "Nam" },
//   { hoTen: "Nguyen Thi C", gioiTinh: "Nu" },
//   { hoTen: "Dao Van D", gioiTinh: "Nam" },
//   { hoTen: "Hoang Thi E", gioiTinh: "Nu" },
//   { hoTen: "Vu Van F", gioiTinh: "Nam" },
// ];


// const res = (array) => {
//   const result = array.reduce((group, item) =>{
//     if(group[item.gioiTinh]){
//       group[item.gioiTinh].push(item.hoTen);
//     }else{
//       group[item.gioiTinh] = [item.hoTen];
//     }
//     return group;
//   }, {});
//   return result;
// }

// console.log(res(students));

// const res = (array) => {
//   const result = array.reduce((group, item) => {
//     const result2 = item.reduce((total, number) => total + number, 0);
//     group.push(result2);
//     return group;
//   }, []);
//   return result;
// }

// const numbers = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// console.log(res(numbers));


// const students = [
//   { hoTen: "Le Van A", lop: "A", diem: 7.5 },
//   { hoTen: "Do Van B", lop: "B", diem: 6.8 },
//   { hoTen: "Nguyen Thi C", lop: "A", diem: 8 },
//   { hoTen: "Dao Van D", lop: "C", diem: 9 },
//   { hoTen: "Hoang Thi E", lop: "B", diem: 8.5 },
//   { hoTen: "Vu Van F", lop: "B", diem: 7.2 },
// ];


// const sumByClass = students.reduce((totalByClass, item) => {
//   const lop = item.lop;
//   // console.log(lop);
//   if (!totalByClass[lop]) {
//     totalByClass[lop] = 0;
//     // console.log(totalByClass[lop]);
//   }
//   totalByClass[lop] += item.diem;
//   return totalByClass;
// }, {});

// console.log(sumByClass);
