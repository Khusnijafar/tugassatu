let arrayObj = [
    {
        name: 'Khusni Jafar',
        bod: '28 Desember'
    },
    {
        name: 'Nidya Wati',
        bod: '28 Desember'
    }
];

// Show all item
let data = arrayObj.map(dataDiri => {
    return dataDiri;
})

// push item
arrayObj.push({name:'begini begitu', bod: '32 Desember'});

// // delete item
 delete arrayObj[0].name;

// // change value
Object.assign(arrayObj[1], {name: 'Tina Hidayatul', bod: '30 February'});

console.log(arrayObj[1].name);
console.log(data);
console.log(arrayObj);
console.log(arrayObj);




