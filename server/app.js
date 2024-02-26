const express = require("express");
const app = express();
const port = 8080;

// app.get("/users/roma", (req, res) => {
//   res.json({ name: "Roma", secondName: "Alekseev", age: 20 });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/navigation", (req, res) => {
  res.json([
    { title: "Главная", href: "/home" },
    { title: "Технология", href: "/hosdfgdfgme" },
    { title: "График полетов", href: "/sdfgdf" },
    { title: "Гарантии", href: "/asdas" },
    { title: "О компании", href: "/info" },
  ]);
});

app.get("/advantage", (req, res) => {
  res.json({
    statisticInfo: "1",
    safetyInfo: "50%",
    yearInfo: "2001",
    daysInfo: "597",
  });
});
