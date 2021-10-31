import dependence from "./dependence.js";
import maFonctionTeste from "./fichier.js";

jest.mock("./dependence.js", () => {
  return jest.fn(() => {
    return 456;
  });
});

describe("maFonction", () => {
  it("should call dependence", async () => {
    const actual = maFonctionTeste();

    expect(dependence).toHaveBeenCalledTimes(1);
    expect(actual).toBe(456);
  });
});

//CONSOLE:
//  456
