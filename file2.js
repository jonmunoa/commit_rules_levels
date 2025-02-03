function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(getRandomInt(characters.length));
    }
    return result;
}

function createRandomArray(size, max) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(getRandomInt(max));
    }
    return arr;
}

function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function multiplyArray(arr) {
    return arr.reduce((a, b) => a * b, 1);
}

function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = arr.filter(x => x < pivot);
    let right = arr.filter(x => x > pivot);
    return [...quickSort(left), pivot, ...quickSort(right)];
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function generatePrimes(n) {
    let primes = [];
    let num = 2;
    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}

function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    const reversed = reverseString(str);
    return str === reversed;
}

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

function countConsonants(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (!vowels.includes(char) && /[a-zA-Z]/.test(char)) {
            count++;
        }
    }
    return count;
}

function toUpperCase(str) {
    return str.toUpperCase();
}

function toLowerCase(str) {
    return str.toLowerCase();
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function camelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        if (+match === 0) return '';
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}

function snakeCase(str) {
    return str.replace(/\W+/g, ' ')
        .split(/ |\B(?=[A-Z])/)
        .map(word => word.toLowerCase())
        .join('_');
}

function kebabCase(str) {
    return str.replace(/\W+/g, ' ')
        .split(/ |\B(?=[A-Z])/)
        .map(word => word.toLowerCase())
        .join('-');
}

function repeatString(str, num) {
    return str.repeat(num);
}

function truncateString(str, num) {
    if (str.length <= num) {
        return str;
    }
    return str.slice(0, num) + '...';
}

function padString(str, length, char = ' ') {
    if (str.length >= length) {
        return str;
    }
    const padLength = length - str.length;
    const padLeft = Math.floor(padLength / 2);
    const padRight = padLength - padLeft;
    return char.repeat(padLeft) + str + char.repeat(padRight);
}

function formatCurrency(amount) {
    return '$' + amount.toFixed(2);
}

function formatPercentage(amount) {
    return (amount * 100).toFixed(2) + '%';
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

function formatTime(date) {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return date.toLocaleTimeString(undefined, options);
}

function getDayOfWeek(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

function getMonthName(date) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[date.getMonth()];
}

function daysBetween(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((date1 - date2) / oneDay));
}

function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function subtractDays(date, days) {
    return addDays(date, -days);
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomBoolean() {
    return Math.random() >= 0.5;
}

function randomElement(arr) {
    return arr[getRandomInt(arr.length)];
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = getRandomInt(i + 1);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}

function getObjectKeys(obj) {
    return Object.keys(obj);
}

function getObjectValues(obj) {
    return Object.values(obj);
}

function getObjectEntries(obj) {
    return Object.entries(obj);
}

function hasKey(obj, key) {
    return obj.hasOwnProperty(key);
}

function hasValue(obj, value) {
    return Object.values(obj).includes(value);
}

function mapObject(obj, fn) {
    return Object.keys(obj).reduce((result, key) => {
        result[key] = fn(obj[key], key);
        return result;
    }, {});
}

function filterObject(obj, fn) {
    return Object.keys(obj).reduce((result, key) => {
        if (fn(obj[key], key)) {
            result[key] = obj[key];
        }
        return result;
    }, {});
}

function reduceObject(obj, fn, initialValue) {
    return Object.keys(obj).reduce((result, key) => {
        return fn(result, obj[key], key);
    }, initialValue);
}

function invertObject(obj) {
    return Object.keys(obj).reduce((result, key) => {
        result[obj[key]] = key;
        return result;
    }, {});
}

function pick(obj, keys) {
    return keys.reduce((result, key) => {
        if (obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
        return result;
    }, {});
}

function omit(obj, keys) {
    return Object.keys(obj).reduce((result, key) => {
        if (!keys.includes(key)) {
            result[key] = obj[key];
        }
        return result;
    }, {});
}

function debounce(fn, delay) {
    let timeoutID;
    return function (...args) {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => fn.apply(this, args), delay);
    };
}

function throttle(fn, limit) {
    let lastFunc;
    let lastRan;
    return function (...args) {
        if (!lastRan) {
            fn.apply(this, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if (Date.now() - lastRan >= limit) {
                    fn.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return function (...nextArgs) {
            return curried.apply(this, args.concat(nextArgs));
        };
    };
}

function compose(...fns) {
    return function (result) {
        return fns.reduceRight((acc, fn) => fn(acc), result);
    };
}

function pipe(...fns) {
    return function (result) {
        return fns.reduce((acc, fn) => fn(acc), result);
    };
}

function once(fn) {
    let called = false;
    let result;
    return function (...args) {
        if (!called) {
            result = fn.apply(this, args);
            called = true;
        }
        return result;
    };
}

function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    }, []);
}

function uniqueArray(arr) {
    return [...new Set(arr)];
}

function intersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

function difference(arr1, arr2) {
    return arr1.filter(value => !arr2.includes(value));
}

function union(arr1, arr2) {
    return uniqueArray([...arr1, ...arr2]);
}

function zip(arr1, arr2) {
    return arr1.map((value, index) => [value, arr2[index]]);
}

function unzip(arr) {
    return arr.reduce((acc, value) => {
        acc[0].push(value[0]);
        acc[1].push(value[1]);
        return acc;
    }, [[], []]);
}

function chunkArray(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

function range(start, end, step = 1) {
    let result = [];
    for (let i = start; i < end; i += step) {
        result.push(i);
    }
    return result;
}

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function mod(a, b) {
    return a % b;
}

function square(a) {
    return a * a;
}

function cube(a) {
    return a * a * a;
}

function sqrt(a) {
    return Math.sqrt(a);
}

function cbrt(a) {
    return Math.cbrt(a);
}

function pow(a, b) {
    return Math.pow(a, b);
}

function log(a) {
    return Math.log(a);
}

function log10(a) {
    return Math.log10(a);
}

function exp(a) {
    return Math.exp(a);
}

function sin(a) {
    return Math.sin(a);
}

function cos(a) {
    return Math.cos(a);
}

function tan(a) {
    return Math.tan(a);
}

function asin(a) {
    return Math.asin(a);
}

function acos(a) {
    return Math.acos(a);
}

function atan(a) {
    return Math.atan(a);
}

function sinh(a) {
    return Math.sinh(a);
}

function cosh(a) {
    return Math.cosh(a);
}

function tanh(a) {
    return Math.tanh(a);
}

function asinh(a) {
    return Math.asinh(a);
}

function acosh(a) {
    return Math.acosh(a);
}

function atanh(a) {
    return Math.atanh(a);
}

function degToRad(deg) {
    return deg * (Math.PI / 180);
}

function radToDeg(rad) {
    return rad * (180 / Math.PI);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function lerp(start, end, t) {
    return start + t * (end - start);
}

function mapRange(value, inMin, inMax, outMin, outMax) {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function normalize(value, min, max) {
    return (value - min) / (max - min);
}

function distance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function midpoint(x1, y1, x2, y2) {
    return [(x1 + x2) / 2, (y1 + y2) / 2];
}

function angleBetween(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1);
}

function randomPointInCircle(radius) {
    const angle = Math.random() * 2 * Math.PI;
    const r = radius * Math.sqrt(Math.random());
    return [r * Math.cos(angle), r * Math.sin(angle)];
}

function randomPointInRectangle(width, height) {
    return [Math.random() * width, Math.random() * height];
}

function randomPointInTriangle(x1, y1, x2, y2, x3, y3) {
    const r1 = Math.random();
    const r2 = Math.random();
    const sqrtR1 = Math.sqrt(r1);
    const x = (1 - sqrtR1) * x1 + (sqrtR1 * (1 - r2)) * x2 + (sqrtR1 * r2) * x3;
    const y = (1 - sqrtR1) * y1 + (sqrtR1 * (1 - r2)) * y2 + (sqrtR1 * r2) * y3;
    return [x, y];
}

function randomPointInPolygon(vertices) {
    const [x1, y1] = vertices[0];
    const [x2, y2] = vertices[1];
    const [x3, y3] = vertices[2];
    return randomPointInTriangle(x1, y1, x2, y2, x3, y3);
}