// Liste 5 objetos nativos
Object
String
Array
Function
Element
Number
Math

// Liste 5 objetos do browser
NodeList
HTMLCollection
Element
Window
Document

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox


if (typeof HTMLCollection !== "undefined") {
  console.log("Existe")
} else {
  console.log("Nao")
}