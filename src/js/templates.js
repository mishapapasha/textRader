templates.home = function() {
    var content = `
    <h2>הגעתם לקורא הטקסט שלי</h2>
    `;
    return content;
}

templates.settings = function() {
    var content = `
    <h2>הגדרות</h2>
    `;
    return content;
}

templates.textArea = function() {
    var content = `
    <h2>שים את הטקסט שלך כאן</h2>
    <textarea id="textToSpeach" autofocus placeholder="place your text here."></textarea>
    <button class="button" onclick="readText()"><span>קרא טקסט</span></button>
    `;
    return content;
}