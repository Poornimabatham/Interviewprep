const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');

    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male" />');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female" /><br>');

    res.write('<input type="number" name="first" placeholder="Enter first number"><br>');
    res.write('<input type="number" name="second" placeholder="Enter second number"><br>');

    res.write('<label for="operation">Choose Operation:</label>');
    res.write('<select name="operation">');
    res.write('<option value="add">Addition</option>');
    res.write('<option value="subtract">Subtraction</option>');
    res.write('<option value="multiply">Multiplication</option>');
    res.write('<option value="divide">Division</option>');
    res.write('</select><br>');

    res.write('<br><input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();

  } else if (req.url.toLowerCase() === "/submit-details" && req.method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const bodyStr = Buffer.concat(body).toString();
      const params = new URLSearchParams(bodyStr);
      const bodyObj = Object.fromEntries(params);

      const username = bodyObj.username || "Unknown";
      const gender = bodyObj.gender || "Not Specified";
      const num1 = Number(bodyObj.first);
      const num2 = Number(bodyObj.second);
      const operation = bodyObj.operation;

      let result;

      switch (operation) {
        case "add":
          result = num1 + num2;
          break;
        case "subtract":
          result = num1 - num2;
          break;
        case "multiply":
          result = num1 * num2;
          break;
        case "divide":
          result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
          break;
        default:
          result = "Invalid operation";
      }

      // Format data to write into file
      const userData = `User: ${username}, Gender: ${gender}, Operation: ${operation}, First Number: ${num1}, Second Number: ${num2}, Result: ${result}\n`;

      // Write data to a file (append to keep history)
      fs.appendFileSync("user.txt", userData);

      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });

  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Like / Share / Subscribe</h1></body>');
    res.write('</html>');
    res.end();
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
