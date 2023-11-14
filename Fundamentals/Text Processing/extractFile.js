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