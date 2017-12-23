function render(template) {
    return new Function('data', `
        with (data) {
            return \`${template}\`;
        }
    `);
}

let html = render('<h1>Hello ${name} from ${place}</h1>')({ name: 'Oleg', place: 'CodeDojo' });

console.log(html);