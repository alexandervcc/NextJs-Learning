const doggos = require("./data.json");

export default function handler(req, res) {
  const doggo = doggos.filter((dog) => dog.enlaceUrl === req.query.enlaceUrl)[0];
 
  if (req.method === "GET") {
    res.status(200).json(doggo);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: "Metodo no permitido" });
  }
}
