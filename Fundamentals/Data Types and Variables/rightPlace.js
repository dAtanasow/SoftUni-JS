function rightPlace(string, char, match) {
    let res = string.replace('_', char);
    console.log(res == match ? 'Matched' : 'Not Matched');
}
rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')