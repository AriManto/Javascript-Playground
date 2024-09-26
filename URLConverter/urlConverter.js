let input = document.querySelector("input");
let output = document.querySelector(".output");
let boton = document.querySelector("button");

//Tabla resumida de ASCII encoding
let asciiEncodingTable = [
  { code: "%3C", value: "<" },
  { code: "%3E", value: ">" },
  { code: "%23", value: "#" },
  { code: "%25", value: "%" },
  { code: "%7B", value: "{" },
  { code: "%7D", value: "}" },
  { code: "%7C", value: "|" },
  { code: "%5C", value: "\\" },
  { code: "%5E", value: "^" },
  { code: "%7E", value: "~" },
  { code: "%5B", value: "[" },
  { code: "%5D", value: "]" },
  { code: "%60", value: "`" },
  { code: "%3B", value: ";" },
  { code: "%2F", value: "/" },
  { code: "%3F", value: "?" },
  { code: "%3A", value: ":" },
  { code: "%40", value: "@" },
  { code: "%3D", value: "=" },
  { code: "%26", value: "&" },
  { code: "%24", value: "$" },
  { code: "%2B", value: "+" },
  { code: "%22", value: '"' },
  { code: "%20", value: " " },
];

//Loads full list of ASCII encoding
let xhr = new XMLHttpRequest();
xhr.open("GET", "URLEncode.json");
xhr.onload = function () {
  if (xhr.status == 200) {
    asciiEncodingTable = JSON.parse(xhr.response);
  }
};
xhr.send();

boton.addEventListener("click", (e) => {
  e.preventDefault();
  output.value = convertURL(input);
  console.log("Input: " + input.value + "\nOutput: " + output.value);
});

function convertURL(input) {
  let convertedInput = input.value;

  for (let i = 0; i < asciiEncodingTable.length; i++) {
    if (convertedInput.indexOf(asciiEncodingTable[i].code != -1))
      do {
        convertedInput = convertedInput.replace(
          asciiEncodingTable[i].code,
          asciiEncodingTable[i].value
        );
      } while (convertedInput.indexOf(asciiEncodingTable[i].code) != -1); //Repeat until no more ocurrences
  }
  return convertedInput;
}

const copyButton = document.querySelector("#botonCopiar");
copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(output.value);
});
