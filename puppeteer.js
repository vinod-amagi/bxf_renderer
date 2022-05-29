import puppeteer from "puppeteer";
import 'regenerator-runtime/runtime'
import fs from "fs"

 async function createSVG (html = "", outputFile) {
  const browser = await  puppeteer.launch();
  const page =  await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080,
  });

  await page.setContent(html, {
		waitUntil: 'domcontentloaded'
	});

  const content = await page.$("body");
  const box = await content.boundingBox();
  console.log("Bounding Box " + box.height, box.width)
  const vp = await page.viewport();
  console.log("View Port " + vp.height, vp.width)

  const imageBuffer = await content.screenshot({ 
    omitBackground: false,
    clip: {
      x: box.x,
      y: box.y,
      width: box.width,
      height: box.height,
    }
  });

  await page.close();
  await browser.close();

  fs.writeFile(outputFile, imageBuffer, () => {
      
  })

  return imageBuffer;
};

export default createSVG;