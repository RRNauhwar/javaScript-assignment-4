function count () {
    let count = 0;
    return function incre() {
        count ++;
        console.log(count)
    }
}
const clickCount = count()
clickCount()
clickCount()
clickCount()