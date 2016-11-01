function hello(compiler: string) {
     return `Hello from ${compiler}`;
}
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = hello(name);
}

showHello("greeting", "TypeScript");