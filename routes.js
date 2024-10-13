const fs = require("fs");

const route = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    let readMessage = undefined;
    if (fs.existsSync("message.txt")) {
      readMessage = fs.readFileSync("message.txt", "utf-8");
    }
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write(
      `<body><p>${readMessage}</p><form action ="/message" method="post"><input type="text" name="message"><button type="submit">Send</button></form></body>`
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    console.log("in post");
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
};

module.exports = route;
