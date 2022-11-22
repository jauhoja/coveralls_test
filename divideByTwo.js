function divideByTwo(dividend)
{
    if(typeof(dividend) !== "number")
    {
        throw(new TypeError("Not a number"));
    }
    console.log("Dividing " + dividend + " by 2");
    return dividend / 2;
}

// export default dibideByTwo;
module.exports = divideByTwo;