import * as wasm from "baseemogi";

// wasm.greet();

console.log("demo")

console.log(wasm.encode("Base Emoji"))

const add_fun = document.getElementById('add_fun')
const remove_fun = document.getElementById('remove_fun')

const boringtext = document.getElementById('boringtext')
const funtext = document.getElementById('funtext')

const copy_button = document.getElementById('copy-button')

const boringtext_handler = function(e) {
    console.log("add_fun")
    funtext.value = wasm.encode(boringtext.value)
}

const funtext_handler = function(e) {
    console.log("remove_fun")
    boringtext.value = wasm.decode(funtext.value)
}

const copy_handler = function(e) {
    let text = funtext.value
    navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
}

add_fun.addEventListener('click', boringtext_handler)
remove_fun.addEventListener('click', funtext_handler)
copy_button.addEventListener('click', copy_handler)
