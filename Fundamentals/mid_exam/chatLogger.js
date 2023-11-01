function chatlogger(arr) {
    let chat = []
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' ')
        let command = tokens[0]
        let message = tokens[1]
        let newMessage = tokens[2]
        if (command == 'Chat') {
            chat.push(message)
        } else if (command == 'Delete') {
            if (chat.includes(message)) {
                let idx = chat.indexOf(message)
                chat.splice(idx, 1)
            }

        } else if (command == "Edit") {
            if (chat.includes(message)) {
                let idx = chat.indexOf(message)
                chat.splice(idx, 1, newMessage)
            } else {
                continue;
            }
        } else if (command == 'Pin') {
            if (chat.includes(message)) {
                let idx = chat.indexOf(message)
                let pinMessage = chat.splice(idx, 1);
                chat.push(pinMessage)
            } else {
                continue;
            }
        } else if (command == 'Spam') {
            let spamMessage = tokens.slice(1)
            for (el of spamMessage) {
                chat.push(el)
            }
        } else if (command == 'end') {
            console.log(chat.join('\n'));
            break;
        }
    }
}

//chatlogger(["Chat Hello", "Chat darling", "Edit darling Darling", "Spam how are you", "Delete Darling", "end"])
//chatlogger(["Chat Hello", "Delete John", "Pin Hi", "end"]);
chatlogger(["Chat John", "Spam Let's go to the zoo", "Edit zoo cinema", "Chat tonight", "Pin John", "end"])