const getFeatureColor = (prop) => {
    switch (prop) {
        case "LOW":
            return "#008000"
        case "MID":
            return "#FFFF00"
        case "HIGH": 
            return "#FF0000"
        default:
            return "#FFFFFF"
    }
}

export {getFeatureColor}