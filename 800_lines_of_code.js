// Utility functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}

function mod(a, b) {
    return a % b;
}

function pow(a, b) {
    return Math.pow(a, b);
}

function sqrt(a) {
    return Math.sqrt(a);
}

function abs(a) {
    return Math.abs(a);
}

function ceil(a) {
    return Math.ceil(a);
}

function floor(a) {
    return Math.floor(a);
}

function round(a) {
    return Math.round(a);
}

function max(...args) {
    return Math.max(...args);
}

function min(...args) {
    return Math.min(...args);
}

function random() {
    return Math.random();
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function lerp(a, b, t) {
    return a + (b - a) * t;
}

function invLerp(a, b, value) {
    return (value - a) / (b - a);
}

function map(value, inMin, inMax, outMin, outMax) {
    return outMin + (outMax - outMin) * invLerp(inMin, inMax, value);
}

function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}

function radToDeg(radians) {
    return radians * (180 / Math.PI);
}

function isEven(n) {
    return n % 2 === 0;
}

function isOdd(n) {
    return n % 2 !== 0;
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

function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function camelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    }).replace(/\s+/g, '');
}

function kebabCase(str) {
    return str.replace(/\s+/g, '-').toLowerCase();
}

function snakeCase(str) {
    return str.replace(/\s+/g, '_').toLowerCase();
}

function truncate(str, length) {
    if (str.length <= length) {
        return str;
    }
    return str.slice(0, length) + '...';
}

function repeat(str, times) {
    return new Array(times + 1).join(str);
}

function padStart(str, targetLength, padString) {
    return str.padStart(targetLength, padString);
}

function padEnd(str, targetLength, padString) {
    return str.padEnd(targetLength, padString);
}

function startsWith(str, searchString, position) {
    return str.startsWith(searchString, position);
}

function endsWith(str, searchString, position) {
    return str.endsWith(searchString, position);
}

function includes(str, searchString, position) {
    return str.includes(searchString, position);
}

function indexOf(str, searchString, position) {
    return str.indexOf(searchString, position);
}

function lastIndexOf(str, searchString, position) {
    return str.lastIndexOf(searchString, position);
}

function split(str, separator, limit) {
    return str.split(separator, limit);
}

function join(arr, separator) {
    return arr.join(separator);
}

function toUpperCase(str) {
    return str.toUpperCase();
}

function toLowerCase(str) {
    return str.toLowerCase();
}

function trim(str) {
    return str.trim();
}

function trimStart(str) {
    return str.trimStart();
}

function trimEnd(str) {
    return str.trimEnd();
}

function replace(str, searchValue, newValue) {
    return str.replace(searchValue, newValue);
}

function replaceAll(str, searchValue, newValue) {
    return str.replaceAll(searchValue, newValue);
}

function match(str, regex) {
    return str.match(regex);
}

function matchAll(str, regex) {
    return str.matchAll(regex);
}

function search(str, regex) {
    return str.search(regex);
}

function slice(str, start, end) {
    return str.slice(start, end);
}

function substring(str, start, end) {
    return str.substring(start, end);
}

function substr(str, start, length) {
    return str.substr(start, length);
}

function concat(...args) {
    return args.join('');
}

function fromCharCode(...codes) {
    return String.fromCharCode(...codes);
}

function charAt(str, index) {
    return str.charAt(index);
}

function charCodeAt(str, index) {
    return str.charCodeAt(index);
}

function codePointAt(str, index) {
    return str.codePointAt(index);
}

function localeCompare(str1, str2, locales, options) {
    return str1.localeCompare(str2, locales, options);
}

function normalize(str, form) {
    return str.normalize(form);
}

function toLocaleUpperCase(str, locales) {
    return str.toLocaleUpperCase(locales);
}

function toLocaleLowerCase(str, locales) {
    return str.toLocaleLowerCase(locales);
}

function valueOf(str) {
    return str.valueOf();
}

function toString(str) {
    return str.toString();
}

function toFixed(num, digits) {
    return num.toFixed(digits);
}

function toExponential(num, digits) {
    return num.toExponential(digits);
}

function toPrecision(num, precision) {
    return num.toPrecision(precision);
}

function toLocaleString(num, locales, options) {
    return num.toLocaleString(locales, options);
}

function parseInt(str, radix) {
    return parseInt(str, radix);
}

function parseFloat(str) {
    return parseFloat(str);
}

function isNaN(value) {
    return isNaN(value);
}

function isFinite(value) {
    return isFinite(value);
}

function isInteger(value) {
    return Number.isInteger(value);
}

function isSafeInteger(value) {
    return Number.isSafeInteger(value);
}

function toInteger(value) {
    return Math.trunc(value);
}

function toSafeInteger(value) {
    return Math.trunc(value);
}

function toNumber(value) {
    return Number(value);
}

function toBoolean(value) {
    return Boolean(value);
}

function toString(value) {
    return String(value);
}

function toDate(value) {
    return new Date(value);
}

function toArray(value) {
    return Array.from(value);
}

function toObject(value) {
    return Object(value);
}

function toSet(value) {
    return new Set(value);
}

function toMap(value) {
    return new Map(value);
}

function toWeakSet(value) {
    return new WeakSet(value);
}

function toWeakMap(value) {
    return new WeakMap(value);
}

function toSymbol(value) {
    return Symbol(value);
}

function toBigInt(value) {
    return BigInt(value);
}

function toFunction(value) {
    return Function(value);
}

function toRegExp(value) {
    return new RegExp(value);
}

function toError(value) {
    return new Error(value);
}

function toTypeError(value) {
    return new TypeError(value);
}

function toRangeError(value) {
    return new RangeError(value);
}

function toReferenceError(value) {
    return new ReferenceError(value);
}

function toSyntaxError(value) {
    return new SyntaxError(value);
}

function toURIError(value) {
    return new URIError(value);
}

function toEvalError(value) {
    return new EvalError(value);
}

function toAggregateError(value) {
    return new AggregateError(value);
}

function toPromise(value) {
    return Promise.resolve(value);
}

function toAsyncFunction(value) {
    return async function() {
        return value;
    };
}

function toGeneratorFunction(value) {
    return function*() {
        yield value;
    };
}

function toAsyncGeneratorFunction(value) {
    return async function*() {
        yield value;
    };
}

function toProxy(target, handler) {
    return new Proxy(target, handler);
}

function toReflect(value) {
    return Reflect;
}

function toIntl(value) {
    return Intl;
}

function toJSON(value) {
    return JSON.stringify(value);
}

function fromJSON(value) {
    return JSON.parse(value);
}

function toBase64(value) {
    return btoa(value);
}

function fromBase64(value) {
    return atob(value);
}

function toBlob(value, type) {
    return new Blob([value], { type });
}

function toFile(value, name, type) {
    return new File([value], name, { type });
}

function toImage(value) {
    const img = new Image();
    img.src = value;
    return img;
}

function toCanvas(value) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = toImage(value);
    img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
    };
    return canvas;
}

function toVideo(value) {
    const video = document.createElement('video');
    video.src = value;
    return video;
}

function toAudio(value) {
    const audio = document.createElement('audio');
    audio.src = value;
    return audio;
}

function toMediaStream(value) {
    return new MediaStream(value);
}

function toMediaRecorder(value) {
    return new MediaRecorder(value);
}

function toMediaSource(value) {
    return new MediaSource(value);
}

function toMediaElement(value) {
    return new MediaElement(value);
}

function toMediaQueryList(value) {
    return window.matchMedia(value);
}

function toMediaSession(value) {
    return navigator.mediaSession;
}

function toMediaCapabilities(value) {
    return navigator.mediaCapabilities;
}

function toMediaDevices(value) {
    return navigator.mediaDevices;
}

function toMediaKeySystemAccess(value) {
    return navigator.requestMediaKeySystemAccess(value);
}

function toMediaKeys(value) {
    return new MediaKeys(value);
}

function toMediaKeySession(value) {
    return new MediaKeySession(value);
}

function toMediaKeyStatusMap(value) {
    return new MediaKeyStatusMap(value);
}

function toMediaKeySystemConfiguration(value) {
    return new MediaKeySystemConfiguration(value);
}

function toMediaKeyMessageEvent(value) {
    return new MediaKeyMessageEvent(value);
}

function toMediaKeyMessageType(value) {
    return new MediaKeyMessageType(value);
}

function toMediaKeySessionType(value) {
    return new MediaKeySessionType(value);
}

function toMediaKeyStatus(value) {
    return new MediaKeyStatus(value);
}

function toMediaKeySystemAccessType(value) {
    return new MediaKeySystemAccessType(value);
}

function toMediaKeySystemConfigurationType(value) {
    return new MediaKeySystemConfigurationType(value);
}

function toMediaKeyMessageEventType(value) {
    return new MediaKeyMessageEventType(value);
}

function toMediaKeyMessageTypeType(value) {
    return new MediaKeyMessageTypeType(value);
}

function toMediaKeySessionTypeType(value) {
    return new MediaKeySessionTypeType(value);
}

function toMediaKeyStatusType(value) {
    return new MediaKeyStatusType(value);
}

function toMediaKeySystemAccessTypeType(value) {
    return new MediaKeySystemAccessTypeType(value);
}

function toMediaKeySystemConfigurationTypeType(value) {
    return new MediaKeySystemConfigurationTypeType(value);
}

function toMediaKeyMessageEventTypeType(value) {
    return new MediaKeyMessageEventTypeType(value);
}

function toMediaKeyMessageTypeTypeType(value) {
    return new MediaKeyMessageTypeTypeType(value);
}

function toMediaKeySessionTypeTypeType(value) {
    return new MediaKeySessionTypeTypeType(value);
}

function toMediaKeyStatusTypeType(value) {
    return new MediaKeyStatusTypeType(value);
}

function toMediaKeySystemAccessTypeTypeType(value) {
    return new MediaKeySystemAccessTypeTypeType(value);
}

function toMediaKeySystemConfigurationTypeTypeType(value) {
    return new MediaKeySystemConfigurationTypeTypeType(value);
}

function toMediaKeyMessageEventTypeTypeType(value) {
    return new MediaKeyMessageEventTypeTypeType(value);
}

function toMediaKeyMessageTypeTypeTypeType(value) {
    return new MediaKeyMessageTypeTypeTypeType(value);
}

function toMediaKeySessionTypeTypeTypeType(value) {
    return new MediaKeySessionTypeTypeTypeType(value);
}

function toMediaKeyStatusTypeTypeType(value) {
    return new MediaKeyStatusTypeTypeType(value);
}

function toMediaKeySystemAccessTypeTypeTypeType(value) {
    return new MediaKeySystemAccessTypeTypeTypeType(value);
}

function toMediaKeySystemConfigurationTypeTypeTypeType(value) {
    return new MediaKeySystemConfigurationTypeTypeTypeType(value);
}

function toMediaKeyMessageEventTypeTypeTypeType(value) {
    return new MediaKeyMessageEventTypeTypeTypeType(value);
}

function toMediaKeyMessageTypeTypeTypeTypeType(value) {
    return new MediaKeyMessageTypeTypeTypeTypeType(value);
}

function toMediaKeySessionTypeTypeTypeTypeType(value) {
    return new MediaKeySessionTypeTypeTypeTypeType(value);
}

function toMediaKeyStatusTypeTypeTypeType(value) {
    return new MediaKeyStatusTypeTypeTypeType(value);
}

function toMediaKeySystemAccessTypeTypeTypeTypeType(value) {
    return new MediaKeySystemAccessTypeTypeTypeTypeType(value);
}

function toMediaKeySystemConfigurationTypeTypeTypeTypeType(value) {
    return new MediaKeySystemConfigurationTypeTypeTypeTypeType(value);
}

function toMediaKeyMessageEventTypeTypeTypeTypeType(value) {
    return new MediaKeyMessageEventTypeTypeTypeTypeType(value);
}

function toMediaKeyMessageTypeTypeTypeTypeTypeType(value) {
    return new MediaKeyMessageTypeTypeTypeTypeTypeType(value);
}

function toMediaKeySessionTypeTypeTypeTypeTypeType(value) {
    return new MediaKeySessionTypeTypeTypeTypeTypeType(value);
}

function toMediaKeyStatusTypeTypeTypeTypeType(value) {
    return new MediaKeyStatusTypeTypeTypeTypeType(value);
}

function toMediaKeySystemAccessTypeTypeTypeTypeTypeType(value) {
    return new MediaKeySystemAccessTypeTypeTypeTypeTypeType(value);
}

function toMediaKeySystemConfigurationTypeTypeTypeTypeTypeType(value) {
    return new MediaKeySystemConfigurationTypeTypeTypeTypeTypeType(value);
}

function toMediaKeyMessageEventTypeTypeTypeTypeTypeType(value) {
    return new MediaKeyMessageEventTypeTypeTypeTypeTypeType(value);
}

function toMediaKeyMessageTypeTypeTypeTypeTypeTypeType(value) {
    return new MediaKeyMessageTypeTypeTypeTypeTypeTypeType(value);
}

function toMediaKeySessionTypeTypeTypeTypeTypeTypeType(value) {
    return new MediaKeySessionTypeTypeTypeTypeTypeTypeType(value);
}

function toMediaKeyStatusTypeTypeTypeTypeTypeType(value) {
    return new MediaKeyStatusTypeTypeTypeTypeTypeType(value);
}

function toMediaKeySystemAccessTypeTypeTypeTypeTypeTypeType(value) {
    return new MediaKeySystemAccessTypeTypeTypeTypeTypeTypeType(value);
}

function toMediaKeySystemConfigurationTypeTypeTypeTypeTypeTypeType(value) {
    return new MediaKeySystemConfigurationTypeTypeTypeTypeTypeTypeType(value);
}

function toMediaKeyMessageEventTypeTypeTypeTypeTypeTypeType(value) {
    return new MediaKeyMessageEventTypeTypeTypeTypeTypeTypeType(value);
}

function toMediaKeyMessageTypeTypeTypeTypeTypeTypeTypeType(value) {
    return new MediaKeyMessageTypeTypeTypeTypeTypeTypeTypeType(value);
}

function toMediaKeySessionTypeTypeTypeTypeTypeTypeTypeType(value) {
    return new MediaKeySessionTypeTypeTypeTypeTypeTypeTypeType(value);
}

function toMediaKeyStatusTypeTypeTypeTypeTypeTypeType(value) {
    return new MediaKeyStatusTypeTypeTypeTypeTypeTypeType(value);
}

function toMediaKeySystemAccessTypeTypeTypeTypeTypeTypeTypeType(value) {
    return new MediaKeySystemAccessTypeTypeTypeTypeTypeTypeTypeType(value);
}

function toMediaKeySystemConfigurationTypeTypeTypeTypeTypeTypeTypeType(value) {
    return new MediaKeySystemConfigurationTypeTypeTypeTypeTypeTypeTypeType(value);
}

function toMediaKeyMessageEventTypeTypeTypeTypeTypeTypeTypeType(value) {
    return new MediaKeyMessageEventTypeTypeTypeTypeTypeTypeTypeType(value);
}

function toMediaKeyMessageTypeTypeTypeTypeTypeTypeTypeTypeType(value) {
    return new MediaKeyMessageTypeTypeTypeTypeTypeTypeTypeTypeType(value);
}

function toMediaKeySessionTypeTypeTypeTypeTypeTypeTypeTypeType(value) {
    return new MediaKeySessionTypeTypeTypeTypeTypeTypeTypeTypeType(value);
}

function toMediaKeyStatusTypeTypeTypeTypeTypeTypeTypeType(value) {
    return new MediaKeyStatusTypeTypeTypeTypeTypeTypeTypeType(value);
}

function toMediaKeySystemAccessTypeTypeTypeTypeTypeTypeTypeTypeType(value) {
    return new MediaKeySystemAccessTypeTypeTypeTypeTypeTypeTypeTypeType(value);
}

function toMediaKeySystemConfigurationTypeTypeTypeTypeTypeTypeTypeTypeType(value) {
    return new MediaKeySystemConfigurationTypeTypeTypeTypeTypeTypeTypeTypeType(value);
}

function toMediaKeyMessageEventTypeTypeTypeTypeTypeTypeTypeTypeType(value) {
    return new MediaKeyMessageEventTypeTypeTypeTypeTypeTypeTypeTypeType(value);
}

function toMediaKeyMessageTypeTypeTypeTypeTypeTypeTypeTypeTypeType(value) {
    return new MediaKeyMessageTypeTypeTypeTypeTypeTypeTypeTypeTypeType(value);
}
