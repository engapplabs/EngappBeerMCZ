describe("Routes Books", () => {

    const Book = app.datasource.models.Book;

    const defaultBook = {
        id: 1,
        name: "Default Book"
    };

    beforeEach(done => {
        Book.destroy({where : {}})
            .then(() => Book.create(defaultBook))
            .then(() => {
                done();
            });
    });

    describe("Route GET /books", () => {
        it("should return a list of books", done => {
            request.get("/books").end((error, response) => {
                expect(response.body[0].name).to.be.eql(defaultBook.name);
                expect(response.body[0].id).to.be.eql(defaultBook.id);
                done(error);
            });
        })
    });
});
