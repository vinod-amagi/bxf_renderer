import yaml from 'js-yaml';
import fs from 'fs/promises';
import ssr from './src/server'
import data from './assets/data.json'
import { schedule } from './src/schedule/features/schedule/Actions/sampleSchedule'
import template from './src/template'
import createSVG from './puppeteer'
//import createSVG from './canvas'

async function createHtmlContent() {
  const doc = yaml.load(schedule);

  let initialState = {
    app: {
      isFetching: false,
      apps: data
    },
    schedule: doc
  }

  const { preloadedState, content } = ssr(initialState)

  const js = await fs.readFile('assets/client.js')

  const htmlContent = template("Schedule", preloadedState, content, js)
  await fs.writeFile("./out.html", htmlContent)
}


async function convertHtmlToSVG() {
  const filename = "./out.html"
  const data = await fs.readFile(filename)
  createSVG(data.toString())
}

async function domToSVG() {
  await createHtmlContent()
  await convertHtmlToSVG()
}

domToSVG()

