
function isPowerOfTwo(num) {
    // Check if n is greater than 0 and if it satisfies the condition (n & (n - 1)) === 0
    return num > 0 && (num & (num - 1)) === 0;
}

export default isPowerOfTwo;