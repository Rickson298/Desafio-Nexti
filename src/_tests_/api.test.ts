import fetch from "cross-fetch";

let baseUrl = "https://desafioreact.s3.amazonaws.com/menu";

describe("Test Api", () => {
  it("Response menu", async () => {
    const response = await fetch(`${baseUrl}/menu.json`);
    expect(response.status).toEqual(200);
  });

  it("Response Itens", async () => {
    const response = await fetch(`${baseUrl}/itens.json`);
    expect(response.status).toEqual(200);
  });
});

export {};
