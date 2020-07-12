import { Article } from "./interface";
import express from "express";
import dotenv from 'dotenv'

const app: express.Express = express();

dotenv.config()

const axios = require("axios");



const URL: string =
  `http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`;

const fetchMan = async (url: string) => {
  try {
    const response = await axios.get(url);
    const getData = response.data.articles;
    var comment: string = "";
    getData.forEach(function (article: Article): void {
      comment += `<a href="${article.url}" target="_blank"><h4>${article.title}</h4><small>${article.content}</small></a>`;
    });
    return comment;
  } catch (error) {
    console.error(error);
  }
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router: express.Router = express.Router();

fetchMan(URL).then((comments) => {
  router.get("/", (req: express.Request, res: express.Response) => {
    return res.status(200).send(
      `<div>
        <ul>${comments}</ul>
      </div>`
    );
  });
});

app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
