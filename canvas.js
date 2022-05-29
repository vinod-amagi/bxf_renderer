import puppeteer from "puppeteer";
import 'regenerator-runtime/runtime'
import fs from "fs"
import html2canvas from "html2canvas"

 async function createSVG (html = "") {
  const browser = await  puppeteer.launch();
  const page =  await browser.newPage();

  await page.setContent(html, {
		waitUntil: 'domcontentloaded'
	});

  console.log("Set Content")

  const content = await page.$("body");

    const canvasElement = await html2canvas($("#app"), {
        // useCORS: true,
    });
    console.log("canvasElement")

    let image = Canvas2Image.convertToImage(
        canvasElement,
        $(canvasElement).width(),
        $(canvasElement).height(),
        "png"
    );
    console.log(image.src)
    return image.src;

  console.log("Saving")

  var data = screenshot.replace(/^data:image\/\w+;base64,/, "");
    var buf = new Buffer(data, 'base64');
    fs.writeFile(`./output_canvas.png`, buf);

  await page.close();
  await browser.close();
};

export default createSVG;