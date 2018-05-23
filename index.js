import app from "./app";

//const PORT = process.env.port || 8080;

app.listen(app.get("port"), () => {
    console.log(`Listening at port ${app.get("port")}`);
});
