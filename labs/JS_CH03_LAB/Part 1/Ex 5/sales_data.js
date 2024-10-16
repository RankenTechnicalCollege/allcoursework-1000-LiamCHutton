const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

const q1 = parseFloat(region1[0] + region2[0] + region3[0] + region4[0] + region5[0])
const q2 = parseFloat(region1[1] + region2[1] + region3[1] + region4[1] + region5[1])
const q3 = parseFloat(region1[2] + region2[2] + region3[2] + region4[2] + region5[2])
const q4 = parseFloat(region1[3] + region2[3] + region3[3] + region4[3] + region5[3])

const r1 = parseFloat(region1[0] + region1[1] + region1[2] + region1[3])
const r2 = parseFloat(region2[0] + region2[1] + region2[2] + region2[3])
const r3 = parseFloat(region3[0] + region3[1] + region3[2] + region3[3])
const r4 = parseFloat(region4[0] + region4[1] + region4[2] + region4[3])
const r5 = parseFloat(region5[0] + region5[1] + region5[2] + region5[3])

const total = r1 + r2 + r3 + r4;

document.write(`<h2>Sales by Quarter</h2>`)
document.write(`<div>Q1: $${q1}</div>`)
document.write(`<div>Q2: $${q2}</div>`)
document.write(`<div>Q3: $${q3}</div>`)
document.write(`<div>Q4: $${q4}</div>`)

document.write(`<h2>Sales by Region</h2>`)
document.write(`<div>Region 1: $${r1}</div>`)
document.write(`<div>Region 2: $${r2}</div>`)
document.write(`<div>Region 3: $${r3}</div>`)
document.write(`<div>Region 4: $${r4}</div>`)
document.write(`<div>Region 5: $${r5}</div>`)

document.write(`<h2>Total Sales</h2>`)
document.write(`$${total}`)