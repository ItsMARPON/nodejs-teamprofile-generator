
// A function to write HTML file




// create HTML
fs.writeFile(
  "./dist/index.html",
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="../assets/css/style.css" />
      <title>Nodejs Team Profile Generator</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossorigin="anonymous"
      />
    </head>

    <body>
      <main>
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Employee Name${data.name}</h5>
            <p class="card-text">
              Some quick example text
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Emp ID:${data.id}</li>
            <li class="list-group-item">Email:${data.email}<a href="mailto:${data.email}></a></li>
            <li class="list-group-item">Role:${data.role}</li>
          </ul>
        </div>
      </main>

      <footer></footer>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
        integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>`,
  (err) => (err ? console.log(err) : console.log("Success!"))
);


  // A function to append to HTML file
  inquirer.prompt(engineerQuestion).then((data) => {
    fs.appendFile(
      "./dist/index.html",
      `     <main>
            <div class="card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">Employee Name${data.name}</h5>
                <p class="card-text">
                  Some quick example text 
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Emp ID:${data.id}</li>
                <li a href="#" class="list-group-item">Email:${data.email}</a></li>
                <li class="list-group-item">Role:${data.role}</li>
                <li class="list-group-item">GitHub:${data.github}</li>
              </ul>
            </div>
          </main>`,
      (err) => (err ? console.log(err) : console.log("Success!"))
    );
  });




  // A function to append to HTML file
  inquirer.prompt(internQuestion).then((data) => {
    fs.appendFile(
      "./dist/index.html",
      `      <main>
            <div class="card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">Employee Name${data.name}</h5>
                <p class="card-text">
                  Some quick example text 
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Emp ID:${data.id}</li>
                <li a href="#" class="list-group-item">Email:${data.email}</a></li>
                <li class="list-group-item">Role:${data.role}</li>
                <li class="list-group-item">School:${data.school}</li>
              </ul>
            </div>
          </main>`,
      (err) => (err ? console.log(err) : console.log("Success!"))
    );
  });


  

  // A function to append to HTML file
  inquirer.prompt(managerQuestion).then((data) => {
    fs.appendFile(
      "./dist/index.html",
      `     <main>
            <div class="card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">Employee Name${data.name}</h5>
                <p class="card-text">
                  Some quick example text 
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Emp ID:${data.id}</li>
                <li a href="#" class="list-group-item">Email:${data.email}</a></li>
                <li class="list-group-item">Role:${data.role}</li>
                <li class="list-group-item">Office No:${data.office}</li>
              </ul>
            </div>
          </main>`,
      (err) => (err ? console.log(err) : console.log("Success!"))
    );
  });


