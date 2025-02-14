/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import { input } from '@inquirer/prompts';
import qr from 'qr-image';
import fs from 'fs';


const answer = await input({ message: 'Enter your website: ' });

var qr_png = qr.image(answer);
qr_png.pipe(fs.createWriteStream('qr_img1.png'));

fs.writeFile("url.txt", answer, (err) => {
    if (err) console.log(err);
    else {
        console.log("File written successfully\n");
        console.log(fs.readFileSync("url.txt", "utf8"));
    }
});
