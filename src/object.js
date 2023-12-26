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

let newData;
let arr;
let arrOne = []

newData = data.map((vOne,i) => {
    vOne.seat.forEach((v,i) => {
    arr =Object.entries(v).filter((v) => v[1] > 0)
    })
    vOne.seat = (Object.fromEntries(arr));
    
    return vOne;
})

console.log(newData);