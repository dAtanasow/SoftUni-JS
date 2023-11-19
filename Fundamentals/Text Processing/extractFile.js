// Write a function that receives a single string - the path to a file (the '\' character is escaped)
// Your task is to subtract the file name and its extension. (Beware of files like template.bak.pptx, as template.bak
// should be the file name, while pptx is the extension).

function extracts(str) {
  
    let file = str.split('\\').pop()
    let lastDot = file.lastIndexOf('.')
    let fileName= file.slice(0, lastDot)
    let extension = file.slice(lastDot + 1)
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

extracts('C:\\Internal\\training-internal\\Template.pptx')
extracts('C:\\Projects\\Data-Structures\\LinkedList.cs')