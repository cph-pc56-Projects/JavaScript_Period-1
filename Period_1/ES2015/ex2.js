const evens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16];

odds = evens.filter((v) => {
    if (v % 2)
        return v;

});
pairs = evens.map((v) => {
    let p = {};    
    let a = (v % 2 == 0) ? p.even = v : p.odd = v;
    return p;
});
nums = evens.map((v, i) => v + i);
console.log(nums);

