// This is a sample JavaScript file with 1000 lines of code

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}

// Function to calculate the factorial of a number
function factorial(n) {
    if (n < 0) {
        throw new Error("Negative numbers are not allowed");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Function to check if a number is prime
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

// Function to find the greatest common divisor of two numbers
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

// Function to find the least common multiple of two numbers
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// Function to calculate the power of a number
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}

// Function to calculate the square root of a number
function sqrt(n) {
    if (n < 0) {
        throw new Error("Negative numbers are not allowed");
    }
    return Math.sqrt(n);
}

// Function to calculate the absolute value of a number
function abs(n) {
    return Math.abs(n);
}

// Function to calculate the sine of an angle in radians
function sin(angle) {
    return Math.sin(angle);
}

// Function to calculate the cosine of an angle in radians
function cos(angle) {
    return Math.cos(angle);
}

// Function to calculate the tangent of an angle in radians
function tan(angle) {
    return Math.tan(angle);
}

// Function to calculate the logarithm of a number
function log(n) {
    if (n <= 0) {
        throw new Error("Logarithm of non-positive numbers is not allowed");
    }
    return Math.log(n);
}

// Function to calculate the exponential of a number
function exp(n) {
    return Math.exp(n);
}

// Function to generate a random number between min and max
function random(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to round a number to the nearest integer
function round(n) {
    return Math.round(n);
}

// Function to floor a number
function floor(n) {
    return Math.floor(n);
}

// Function to ceil a number
function ceil(n) {
    return Math.ceil(n);
}

// Function to calculate the hypotenuse of a right triangle
function hypotenuse(a, b) {
    return Math.sqrt(a * a + b * b);
}

// Function to convert degrees to radians
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Function to convert radians to degrees
function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}

// Function to calculate the area of a circle
function circleArea(radius) {
    if (radius < 0) {
        throw new Error("Negative radius is not allowed");
    }
    return Math.PI * radius * radius;
}

// Function to calculate the circumference of a circle
function circleCircumference(radius) {
    if (radius < 0) {
        throw new Error("Negative radius is not allowed");
    }
    return 2 * Math.PI * radius;
}

// Function to calculate the area of a rectangle
function rectangleArea(length, width) {
    if (length < 0 || width < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return length * width;
}

// Function to calculate the perimeter of a rectangle
function rectanglePerimeter(length, width) {
    if (length < 0 || width < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return 2 * (length + width);
}

// Function to calculate the area of a triangle
function triangleArea(base, height) {
    if (base < 0 || height < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return 0.5 * base * height;
}

// Function to calculate the perimeter of a triangle
function trianglePerimeter(a, b, c) {
    if (a < 0 || b < 0 || c < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return a + b + c;
}

// Function to calculate the volume of a sphere
function sphereVolume(radius) {
    if (radius < 0) {
        throw new Error("Negative radius is not allowed");
    }
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

// Function to calculate the surface area of a sphere
function sphereSurfaceArea(radius) {
    if (radius < 0) {
        throw new Error("Negative radius is not allowed");
    }
    return 4 * Math.PI * Math.pow(radius, 2);
}

// Function to calculate the volume of a cylinder
function cylinderVolume(radius, height) {
    if (radius < 0 || height < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return Math.PI * Math.pow(radius, 2) * height;
}

// Function to calculate the surface area of a cylinder
function cylinderSurfaceArea(radius, height) {
    if (radius < 0 || height < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return 2 * Math.PI * radius * (radius + height);
}

// Function to calculate the volume of a cone
function coneVolume(radius, height) {
    if (radius < 0 || height < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
}

// Function to calculate the surface area of a cone
function coneSurfaceArea(radius, slantHeight) {
    if (radius < 0 || slantHeight < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return Math.PI * radius * (radius + slantHeight);
}

// Function to calculate the volume of a rectangular prism
function rectangularPrismVolume(length, width, height) {
    if (length < 0 || width < 0 || height < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return length * width * height;
}

// Function to calculate the surface area of a rectangular prism
function rectangularPrismSurfaceArea(length, width, height) {
    if (length < 0 || width < 0 || height < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return 2 * (length * width + width * height + height * length);
}

// Function to calculate the volume of a pyramid
function pyramidVolume(baseLength, baseWidth, height) {
    if (baseLength < 0 || baseWidth < 0 || height < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return (1 / 3) * baseLength * baseWidth * height;
}

// Function to calculate the surface area of a pyramid
function pyramidSurfaceArea(baseLength, baseWidth, slantHeight) {
    if (baseLength < 0 || baseWidth < 0 || slantHeight < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return baseLength * baseWidth + baseLength * slantHeight + baseWidth * slantHeight;
}

// Function to calculate the volume of a torus
function torusVolume(majorRadius, minorRadius) {
    if (majorRadius < 0 || minorRadius < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return (Math.PI * Math.pow(minorRadius, 2)) * (2 * Math.PI * majorRadius);
}

// Function to calculate the surface area of a torus
function torusSurfaceArea(majorRadius, minorRadius) {
    if (majorRadius < 0 || minorRadius < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return 4 * Math.PI * Math.PI * majorRadius * minorRadius;
}

// Function to calculate the volume of an ellipsoid
function ellipsoidVolume(a, b, c) {
    if (a < 0 || b < 0 || c < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return (4 / 3) * Math.PI * a * b * c;
}

// Function to calculate the surface area of an ellipsoid
function ellipsoidSurfaceArea(a, b, c) {
    if (a < 0 || b < 0 || c < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return 4 * Math.PI * Math.pow((Math.pow(a * b, 1.6) + Math.pow(a * c, 1.6) + Math.pow(b * c, 1.6)) / 3, 1 / 1.6);
}

// Function to calculate the volume of a parallelepiped
function parallelepipedVolume(a, b, c, alpha, beta, gamma) {
    if (a < 0 || b < 0 || c < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return a * b * c * Math.sqrt(1 + 2 * Math.cos(alpha) * Math.cos(beta) * Math.cos(gamma) - Math.pow(Math.cos(alpha), 2) - Math.pow(Math.cos(beta), 2) - Math.pow(Math.cos(gamma), 2));
}

// Function to calculate the surface area of a parallelepiped
function parallelepipedSurfaceArea(a, b, c, alpha, beta, gamma) {
    if (a < 0 || b < 0 || c < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return 2 * (a * b * Math.sin(gamma) + b * c * Math.sin(alpha) + c * a * Math.sin(beta));
}

// Function to calculate the volume of a tetrahedron
function tetrahedronVolume(a, b, c, d, e, f) {
    if (a < 0 || b < 0 || c < 0 || d < 0 || e < 0 || f < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return (1 / 6) * Math.sqrt(4 * Math.pow(a, 2) * Math.pow(b, 2) * Math.pow(c, 2) - Math.pow(a, 2) * Math.pow((Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(d, 2)), 2) - Math.pow(b, 2) * Math.pow((Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(e, 2)), 2) - Math.pow(c, 2) * Math.pow((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(f, 2)), 2) + (Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(d, 2)) * (Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(e, 2)) * (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(f, 2)));
}

// Function to calculate the surface area of a tetrahedron
function tetrahedronSurfaceArea(a, b, c, d, e, f) {
    if (a < 0 || b < 0 || c < 0 || d < 0 || e < 0 || f < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return Math.sqrt(3) * (a * b + b * c + c * a);
}

// Function to calculate the volume of a frustum
function frustumVolume(r1, r2, h) {
    if (r1 < 0 || r2 < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return (1 / 3) * Math.PI * h * (Math.pow(r1, 2) + Math.pow(r2, 2) + r1 * r2);
}

// Function to calculate the surface area of a frustum
function frustumSurfaceArea(r1, r2, h) {
    if (r1 < 0 || r2 < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return Math.PI * (Math.pow(r1, 2) + Math.pow(r2, 2) + (r1 + r2) * Math.sqrt(Math.pow((r1 - r2), 2) + Math.pow(h, 2)));
}

// Function to calculate the volume of a truncated pyramid
function truncatedPyramidVolume(a1, b1, a2, b2, h) {
    if (a1 < 0 || b1 < 0 || a2 < 0 || b2 < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return (1 / 3) * h * (a1 * b1 + a2 * b2 + Math.sqrt(a1 * b1 * a2 * b2));
}

// Function to calculate the surface area of a truncated pyramid
function truncatedPyramidSurfaceArea(a1, b1, a2, b2, h) {
    if (a1 < 0 || b1 < 0 || a2 < 0 || b2 < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return a1 * b1 + a2 * b2 + (a1 + a2) * Math.sqrt(Math.pow((b1 - b2), 2) + Math.pow(h, 2)) + (b1 + b2) * Math.sqrt(Math.pow((a1 - a2), 2) + Math.pow(h, 2));
}

// Function to calculate the volume of a truncated cone
function truncatedConeVolume(r1, r2, h) {
    if (r1 < 0 || r2 < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return (1 / 3) * Math.PI * h * (Math.pow(r1, 2) + Math.pow(r2, 2) + r1 * r2);
}

// Function to calculate the surface area of a truncated cone
function truncatedConeSurfaceArea(r1, r2, h) {
    if (r1 < 0 || r2 < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return Math.PI * (Math.pow(r1, 2) + Math.pow(r2, 2) + (r1 + r2) * Math.sqrt(Math.pow((r1 - r2), 2) + Math.pow(h, 2)));
}

// Function to calculate the volume of a truncated sphere
function truncatedSphereVolume(r, h) {
    if (r < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return (1 / 3) * Math.PI * h * (3 * Math.pow(r, 2) - Math.pow(h, 2));
}

// Function to calculate the surface area of a truncated sphere
function truncatedSphereSurfaceArea(r, h) {
    if (r < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return 2 * Math.PI * r * h;
}

// Function to calculate the volume of a truncated ellipsoid
function truncatedEllipsoidVolume(a, b, c, h) {
    if (a < 0 || b < 0 || c < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return (1 / 3) * Math.PI * h * (3 * a * b * c - Math.pow(h, 2));
}

// Function to calculate the surface area of a truncated ellipsoid
function truncatedEllipsoidSurfaceArea(a, b, c, h) {
    if (a < 0 || b < 0 || c < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return 2 * Math.PI * a * b * h;
}

// Function to calculate the volume of a truncated parallelepiped
function truncatedParallelepipedVolume(a, b, c, alpha, beta, gamma, h) {
    if (a < 0 || b < 0 || c < 0 || alpha < 0 || beta < 0 || gamma < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return a * b * c * Math.sqrt(1 + 2 * Math.cos(alpha) * Math.cos(beta) * Math.cos(gamma) - Math.pow(Math.cos(alpha), 2) - Math.pow(Math.cos(beta), 2) - Math.pow(Math.cos(gamma), 2)) * h;
}

// Function to calculate the volume of a truncated tetrahedron
// Function to calculate the volume of a truncated pyramid
function truncatedPyramidVolume(a1, b1, a2, b2, h) {
    if (a1 < 0 || b1 < 0 || a2 < 0 || b2 < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return (1 / 3) * h * (a1 * b1 + a2 * b2 + Math.sqrt(a1 * b1 * a2 * b2));
}

// Function to calculate the surface area of a truncated pyramid
function truncatedPyramidSurfaceArea(a1, b1, a2, b2, h) {
    if (a1 < 0 || b1 < 0 || a2 < 0 || b2 < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return a1 * b1 + a2 * b2 + (a1 + a2) * Math.sqrt(Math.pow((b1 - b2), 2) + Math.pow(h, 2)) + (b1 + b2) * Math.sqrt(Math.pow((a1 - a2), 2) + Math.pow(h, 2));
}

// Function to calculate the volume of a truncated cone
function truncatedConeVolume(r1, r2, h) {
    if (r1 < 0 || r2 < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return (1 / 3) * Math.PI * h * (Math.pow(r1, 2) + Math.pow(r2, 2) + r1 * r2);
}

// Function to calculate the surface area of a truncated cone
function truncatedConeSurfaceArea(r1, r2, h) {
    if (r1 < 0 || r2 < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return Math.PI * (Math.pow(r1, 2) + Math.pow(r2, 2) + (r1 + r2) * Math.sqrt(Math.pow((r1 - r2), 2) + Math.pow(h, 2)));
}

// Function to calculate the volume of a truncated sphere
function truncatedSphereVolume(r, h) {
    if (r < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return (1 / 3) * Math.PI * h * (3 * Math.pow(r, 2) - Math.pow(h, 2));
}

// Function to calculate the surface area of a truncated sphere
function truncatedSphereSurfaceArea(r, h) {
    if (r < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return 2 * Math.PI * r * h;
}

// Function to calculate the volume of a truncated ellipsoid
function truncatedEllipsoidVolume(a, b, c, h) {
    if (a < 0 || b < 0 || c < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return (1 / 3) * Math.PI * h * (3 * a * b * c - Math.pow(h, 2));
}

// Function to calculate the surface area of a truncated ellipsoid
function truncatedEllipsoidSurfaceArea(a, b, c, h) {
    if (a < 0 || b < 0 || c < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return 2 * Math.PI * a * b * h;
}

// Function to calculate the volume of a truncated parallelepiped
function truncatedParallelepipedVolume(a, b, c, alpha, beta, gamma, h) {
    if (a < 0 || b < 0 || c < 0 || alpha < 0 || beta < 0 || gamma < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return a * b * c * Math.sqrt(1 + 2 * Math.cos(alpha) * Math.cos(beta) * Math.cos(gamma) - Math.pow(Math.cos(alpha), 2) - Math.pow(Math.cos(beta), 2) - Math.pow(Math.cos(gamma), 2)) * h;
}

// Function to calculate the volume of a truncated tetrahedron
function truncatedTetrahedronVolume(a, b, c, d, e, f, h) {
    if (a < 0 || b < 0 || c < 0 || d < 0 || e < 0 || f < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return (1 / 6) * Math.sqrt(4 * Math.pow(a, 2) * Math.pow(b, 2) * Math.pow(c, 2) - Math.pow(a, 2) * Math.pow((Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(d, 2)), 2) - Math.pow(b, 2) * Math.pow((Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(e, 2)), 2) - Math.pow(c, 2) * Math.pow((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(f, 2)), 2) + (Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(d, 2)) * (Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(e, 2)) * (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(f, 2))) * h;
}

// Function to calculate the surface area of a truncated tetrahedron
function truncatedTetrahedronSurfaceArea(a, b, c, d, e, f, h) {
    if (a < 0 || b < 0 || c < 0 || d < 0 || e < 0 || f < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return Math.sqrt(3) * (a * b + b * c + c * a) * h;
}

// Function to calculate the volume of a truncated pyramid
function truncatedPyramidVolume(a1, b1, a2, b2, h) {
    if (a1 < 0 || b1 < 0 || a2 < 0 || b2 < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return (1 / 3) * h * (a1 * b1 + a2 * b2 + Math.sqrt(a1 * b1 * a2 * b2));
}

// Function to calculate the surface area of a truncated pyramid
function truncatedPyramidSurfaceArea(a1, b1, a2, b2, h) {
    if (a1 < 0 || b1 < 0 || a2 < 0 || b2 < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return a1 * b1 + a2 * b2 + (a1 + a2) * Math.sqrt(Math.pow((b1 - b2), 2) + Math.pow(h, 2)) + (b1 + b2) * Math.sqrt(Math.pow((a1 - a2), 2) + Math.pow(h, 2));
}

// Function to calculate the volume of a truncated cone
function truncatedConeVolume(r1, r2, h) {
    if (r1 < 0 || r2 < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return (1 / 3) * Math.PI * h * (Math.pow(r1, 2) + Math.pow(r2, 2) + r1 * r2);
}

// Function to calculate the surface area of a truncated cone
function truncatedConeSurfaceArea(r1, r2, h) {
    if (r1 < 0 || r2 < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return Math.PI * (Math.pow(r1, 2) + Math.pow(r2, 2) + (r1 + r2) * Math.sqrt(Math.pow((r1 - r2), 2) + Math.pow(h, 2)));
}

// Function to calculate the volume of a truncated sphere
function truncatedSphereVolume(r, h) {
    if (r < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return (1 / 3) * Math.PI * h * (3 * Math.pow(r, 2) - Math.pow(h, 2));
}

// Function to calculate the surface area of a truncated sphere
function truncatedSphereSurfaceArea(r, h) {
    if (r < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return 2 * Math.PI * r * h;
}

// Function to calculate the volume of a truncated ellipsoid
function truncatedEllipsoidVolume(a, b, c, h) {
    if (a < 0 || b < 0 || c < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return (1 / 3) * Math.PI * h * (3 * a * b * c - Math.pow(h, 2));
}

// Function to calculate the surface area of a truncated ellipsoid
function truncatedEllipsoidSurfaceArea(a, b, c, h) {
    if (a < 0 || b < 0 || c < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return 2 * Math.PI * a * b * h;
}

// Function to calculate the volume of a truncated parallelepiped
function truncatedParallelepipedVolume(a, b, c, alpha, beta, gamma, h) {
    if (a < 0 || b < 0 || c < 0 || alpha < 0 || beta < 0 || gamma < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return a * b * c * Math.sqrt(1 + 2 * Math.cos(alpha) * Math.cos(beta) * Math.cos(gamma) - Math.pow(Math.cos(alpha), 2) - Math.pow(Math.cos(beta), 2) - Math.pow(Math.cos(gamma), 2)) * h;
}

// Function to calculate the volume of a truncated tetrahedron
function truncatedTetrahedronVolume(a, b, c, d, e, f, h) {
    if (a < 0 || b < 0 || c < 0 || d < 0 || e < 0 || f < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return (1 / 6) * Math.sqrt(4 * Math.pow(a, 2) * Math.pow(b, 2) * Math.pow(c, 2) - Math.pow(a, 2) * Math.pow((Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(d, 2)), 2) - Math.pow(b, 2) * Math.pow((Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(e, 2)), 2) - Math.pow(c, 2) * Math.pow((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(f, 2)), 2) + (Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(d, 2)) * (Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(e, 2)) * (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(f, 2))) * h;
}

// Function to calculate the surface area of a truncated tetrahedron
function truncatedTetrahedronSurfaceArea(a, b, c, d, e, f, h) {
    if (a < 0 || b < 0 || c < 0 || d < 0 || e < 0 || f < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return Math.sqrt(3) * (a * b + b * c + c * a) * h;
}

// Function to calculate the surface area of a truncated tetrahedron
function truncatedTetrahedronSurfaceArea(a, b, c, d, e, f, h) {
    if (a < 0 || b < 0 || c < 0 || d < 0 || e < 0 || f < 0 || h < 0) {
        throw new Error("Negative dimensions are not allowed");
    }
    return Math.sqrt(3) * (a * b + b * c + c * a) * h;
}