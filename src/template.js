// html skeleton provider
export default function template(title, initialState = {}, content = "", js = "") {
  let scripts = ''; // Dynamically ship scripts based on render type
  if (content) {
    scripts = js ? 
              ` <script>
                  window.__STATE__ = ${JSON.stringify(initialState)}
              </script>
              <script>${js}</script>
              `
              :
              ` <script>
                   window.__STATE__ = ${JSON.stringify(initialState)}
                </script>
                <script src="assets/client.js"></script>
                `
  } else {
    scripts = ` <script src="assets/bundle.js"> </script> `
  }
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      ${content}
                   </div>
                </div>

                  ${scripts}
              </body>
              `;

  return page;
}
