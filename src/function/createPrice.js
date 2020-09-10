export default function createPrice (index) {
    var c = "";
    while (index > 999) {


        var b = index % 1000;

        //   b.toString();
        if (b === 0) b = "000";
        else if (b < 100) b = "0" + b;
        else if (b < 10) b = "00" + b;
        c = "." + b + c;
        index /= 1000;
        index = index >> 0;
    }
    return index + c;
}