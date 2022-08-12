//is JavaScript File check
function isJavaScriptFile(file) {
    if (typeof (file) === 'string') {
        const ext = file.substring(file.lastIndexOf('.'));
        if (ext === '.js') {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return "Please Enter a Valid File Name";
    }
}

const fileName = 'app.js';
const fileNameCheck = isJavaScriptFile(fileName);
console.log(fileNameCheck);