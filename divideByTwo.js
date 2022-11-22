function divideByTwo(dividend)
{
    if(typeof(dividend) !== "number")
    {
        throw(new TypeError("Not a number"));
    } else if (!Number.isInteger(dividend))
    {
        throw(new Error("Dividend not an integer"));
    }

    console.log("Dividing " + dividend + " by 2");
    return dividend / 2;
}

// export default dibideByTwo;
module.exports = divideByTwo;