const pick = (object, keys) => {
    console.log(keys);

    return keys.reduce((obj,key) =>{
        if(object && object.hasOwnProperty(key)){
            obj[key] = object[key]
            // console.log(obj[key]);
        }

        return obj;
    },{})

}

module.exports = pick;