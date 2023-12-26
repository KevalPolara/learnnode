let data = [
    {
        name: 'ABC IT institute',
        seat: [
            {
                react: 15,
                node: 20,
                full_stack: 10,
                ui_ux: 0
            }
        ]
    },
    {
        name: 'XYZ IT institute',
        seat: [
            {
                react: 0,
                node: 70,
                full_stack: 0,
                ui_ux: 10
            }
        ]
    },
    {
        name: 'PQR IT institute',
        seat: [
            {
                react: 50,
                node: 30,
                full_stack: 0,
                ui_ux: 5
            }
        ]
    },
    {
        name: 'LNM IT institute',
        seat: [
            {
                react: 2,
                node: 0,
                full_stack: 30,
                ui_ux: 10
            }]
    },
    {
        name: 'QYP IT institute',
        seat: [
            {
                react: 0,
                node: 15,
                full_stack: 10,
                ui_ux: 0
            }
        ]
    },
]

let ansData;
let arr;

 ansData = data.map((v) => {
    v.seat.forEach((vone) => {
        arr = Object.entries(vone).filter((v) => v[1] > 0);
    })

    v.seat = Object.fromEntries(arr);
    return v;
})

console.log(ansData);


