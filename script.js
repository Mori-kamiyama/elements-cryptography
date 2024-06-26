function encryClick() {
    const text = document.getElementById("encryptionInput").value;
    var caesarCipher = parseInt(document.getElementById("numberIn").value, 10);
    if (isNaN(caesarCipher)) {
        caesarCipher = 0;
    }

    let returnText = [];

    for (let i = 0; i < text.length; i++) {
        let hiragana = generateHiraganaArray();
        let elements = generateElementsArray();

        var index = hiragana.indexOf(text[i]);

        index = (index + caesarCipher) % 118;

        returnText.push(elements[index]);
    }
    if (document.getElementById('checkbox').checked) {
        document.getElementById("encryptionResult").innerText = "暗号化された文章: " + returnText;
    }else{
        document.getElementById("encryptionResult").innerText = "暗号化された文章: " + returnText.join(' ');
    }
}

function decryClick(){
    var input = document.getElementById("decryptionInput").value;
    const text = input.split(/[\s,]+/);
    var caesarCipher = parseInt(document.getElementById("numberOut").value, 10);
    if (isNaN(caesarCipher)) {
        caesarCipher = 0;
    }
    
    let returnText = [];

    for (let i = 0; i < text.length; i++) {
        let hiragana = generateHiraganaArray();
        let elements = generateElementsArray();

        var index = elements.indexOf(text[i]);

        index = (index - caesarCipher) % 118;

        returnText.push(hiragana[index]);
    }

    document.getElementById("decryptionResult").innerText = "復号化された文章: " + returnText.join('');
}



// Unicodeの範囲で「あ」から「ん」までの文字を生成し、「が」行、「ざ」行、「だ」行、「ば」行、「ぱ」行も含める関数
function generateHiraganaArray() {
    const hiraganaArray = [
        "あ","い","う","え","お","か","き","く","け","こ","さ","し",
        "す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね",
        "の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や",
        "ゆ","よ","ら","り","る","れ","ろ","わ","を","ん","が","ぎ",
        "ぐ","げ","ご","ざ","じ","ず","ぜ","ぞ","だ","ぢ","づ","で",
        "ど","ば","び","ぶ","べ","ぼ","ぱ","ぴ","ぷ","ぺ","ぽ","ゃ",
        "ゅ","ょ","っ","a","b","c","d","e","f","g","h","i","j",
        "k","l","m","n","o","p","q","r","s","t","u","v","w",
        "x","y","z","0","1","2","3","4","5","6","7","8","9",
    ];
    

    return hiraganaArray;
}

function generateElementsArray(){
    const elementSymbols = [
        "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne",
        "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca",
        "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn",
        "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr",
        "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn",
        "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd",
        "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb",
        "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg",
        "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th",
        "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm",
        "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds",
        "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"
    ];

    return elementSymbols;
}
