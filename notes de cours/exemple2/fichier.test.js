import dependence from "./dependence.js";
import maFonctionTeste from "./fichier.js";

jest.mock("./dependence.js");

beforeEach(() => {
  dependence.mockClear();
});

describe("maFonction", () => {
  it("should call dependence only once", async () => {
    maFonctionTeste();
    expect(dependence).toHaveBeenCalledTimes(1);
  });
  it("should call dependence only once still", async () => {
    maFonctionTeste();
    expect(dependence).toHaveBeenCalledTimes(1);
  });
});
