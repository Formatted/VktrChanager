var elements = document.getElementsByTagName('*');
var replaceW = 'Nyomi'

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Orbán Viktor/gi, replaceW)
                .replace(/Orban Viktor/gi, replaceW)
                .replace(/Viktor Mihály Orbán/gi, replaceW)
                .replace(/Viktor Mihaly Orban/gi, replaceW)
                .replace(/Mr.Orbán/gi, replaceW)
                .replace(/Viktor Orbán/gi, replaceW)
                .replace(/Viktor Orban/gi, replaceW)
                .replace(/Orban/gi, replaceW)
                .replace(/Orbán/gi, replaceW)
                .replace(/Fidesz/gi, 'Majmok');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}