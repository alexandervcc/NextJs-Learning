const doggos = require("./data.json");

export default function handler(req, res) {
    console.log("data: ",doggos)
  if (req.method === "GET") {
    res.status(200).json( doggos );
  }else{
    res.setHeader("Allow",["GET"])
    res.status(405).json({message:"Metodo no permitido"})
  }

}
