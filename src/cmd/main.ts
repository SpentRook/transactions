import app from "./api/app";

const PORT = process.env.PORT ?? 8081;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
