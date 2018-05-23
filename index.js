import app from "./app";

const PORT = process.env.port || 8080;

app.listen(PORT, () => {
    console.log("Listening at " + PORT);
});
