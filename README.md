# BXF Renderer

An application to render BXF schedule using **React** and create a PNG image using *puppeteer*.

## Development

- Clone the repo:

```bash
$ git clone https://github.com/vinod-amagi/bxf_renderer.git
```

- Go to the project directory and install dependencies:

```bash
$ cd bxf_renderer && yarn install
```

## Create

Render and create image:

```bash
$ yarn build && node index.js <input bxf file (YAML)> <output file (PNG)>
```

The output is generated as "<output file (PNG)>", if provided, or "output.png" in the 'bxf_renderer' folder.

