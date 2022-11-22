function divideByTwo(dividend)
{
    if(typeof(dividend) !== "number")
    {
        throw(new TypeError("Not a number"));
    }
    return dividend / 2;
}

// export default dibideByTwo;
module.exports = divideByTwo;