const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem
} = require('../controllers/itemController');

describe("CRUD Menu Items", () => {
  it("GET getItems should return status code 200", async () => {
    const result = await getItems();

    expect(result.statusCode).toBe(20)
    // const response = await request(app).get("/");
    // expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
    // expect(response.statusCode).toBe(200);
  });
});
