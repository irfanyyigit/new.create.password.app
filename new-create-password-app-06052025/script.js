function generatePassword() {
    //karakter tanımlama işlemleri kontrol edildi
    const lenght = document.getElementById("lenght").value;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeLowerCase = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;
//gereklli olabilecek tum rakamlar ve semboller

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-_=+<>?/";

    let charPool = "";
    if (includeUppercase) charPool += uppercaseChars;
    if(includeLowerCase) charPool += lowercaseChars;
    if(includeNumbers) charPool += numberChars;
    if(includeSymbols) charPool += symbolChars;
//kontrol yapısı burada baslıyor
    let password = "";

    if(charPool.length === 0) {
        document.getElementById("passwordResult").innerText = "lütfen en az bir secenek secin";
        return;
    }


    for (let i=0;i < lenght; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }
    document.getElementById("passwordResult").innerText = password;
}