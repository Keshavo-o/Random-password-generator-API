function generatePassword()
{
let password = "";//15 = 3 alphabets-U + 3 alphabets-L + 4 numeric + 5 special characters
//in javascript for converting 
//STRING TO ASCII CODE:char.charCodeAt(0) → String → ASCII Code
//ASCII CODE TO STRING: String.fromCharCode(code) → ASCII Code → String

for(let i = 0;i<3;i++)
{
    password = password + String.fromCharCode(Math.floor(Math.random() * 26) + 65); // A-Z
}
for(let i = 0;i<3;i++)
{
    password = password + String.fromCharCode(98 + i);
}
for(let i = 0;i<4;i++)
{
    password = password + Math.floor(Math.random() * 10);
}
for(let i = 0;i<5;i++)
{
    password = password + String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

return password;
}
module.exports = generatePassword;