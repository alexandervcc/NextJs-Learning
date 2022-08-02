const fs = require("fs/promises");
const path = require("path");

import Link from "next/link";
import { addAbortSignal } from "stream";

export default function Home({ data }) {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
      <ul>
        {data.map((element) => (
          <li key={element.id}>{element.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: {
      data: data.products,
    },
    revalidate: 10, //ammount of seconds for page recreation
    /*
    notFound: true, //true -> rendet 404 page
    redirect: {
      destination: "/no-data",
    }, //if fails to fetch data, to redirect
    */
  };
};

/*
 
consocdklskfe
jsdjdfhfuu
jcksdjnjkdnkcjsndddd
dklsdlkskdskdlsk    jksdnvjksdnv {}

dsjkvsndlkslk

igaskdsfvsldkvsdvsdvsfdvsdvsddsvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdhhhfhfhfgfgffhfhfjhfjfjhhdjdwoioowkdoecmaksckladncsldknvlksdjpowocaposcmascaslksvnsldknvlskdksdjvklsdjkvjsldkjlksjlkdjslkdjvlksndkvlnskdnlvksndlkvnslkdjlkjlkjlklksddddddddddddddddsd
\


*/
