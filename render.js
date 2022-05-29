import yaml from 'js-yaml';
import fs from 'fs/promises';
import ssr from './src/server'
import { schedule } from './src/schedule/features/schedule/Actions/sampleSchedule'
import template from './src/template'
import createSVG from './puppeteer'
//import createSVG from './canvas'

async function createHtmlContent(inputFile) {
  const doc = inputFile ? yaml.load(await fs.readFile(inputFile)) : yaml.load(schedule);

  let initialState = {
    schedule: doc
  }

  const { preloadedState, content } = ssr(initialState)

  const js = await fs.readFile('assets/client.js')

  const htmlContent = template("Schedule", preloadedState, content, js)
  
  // Save html content for debugging
  await fs.writeFile("./output.html", htmlContent)

  return htmlContent
}


async function convertHtmlToSVG(htmlContent, outputFile) {
  createSVG(htmlContent, outputFile)
}

async function domToSVG(inputFile, outputFile) {
  const htmlContent = await createHtmlContent(inputFile)
  await convertHtmlToSVG(htmlContent, outputFile)
}

const args = process.argv.slice(2);
console.log('args: ', args);

domToSVG(args.length > 0 ? args[0] : null, args.length > 1 ? args[1] : "bxf.png")

