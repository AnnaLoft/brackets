module.exports = function check(str, bracketsConfig) {
    for (let strKey = str.length; strKey >= 0; strKey--) {
        for (let bracketsKey = 0; bracketsKey < bracketsConfig.length; bracketsKey++) {
            if (str[strKey] === bracketsConfig[bracketsKey][0]) {
                str = str.replace(bracketsConfig[bracketsKey].join(""), "");
            }
        }
    }

    return str === "";
}

// your solution