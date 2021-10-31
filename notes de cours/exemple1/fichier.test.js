import maFonctionTeste from "./fichier.js";

const uneAutreFonctionMock = jest.fn();

describe("maFonction", () => {
  it("should call uneAutreFonction", () => {
    maFonctionTeste(uneAutreFonctionMock);
    expect(uneAutreFonctionMock).toHaveBeenCalled();
  });
});
