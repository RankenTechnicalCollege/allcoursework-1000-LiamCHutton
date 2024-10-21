var scores = [70, 20, 35, 15];

scores[3] = scores[0] + scores[2];

const html = `<p>${scores[3]}</p>`;
document.write(html);