 /**
 * @jest-environment jsdom
 */

const { game, newGame } = require("../game");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMove key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contain correct IDs", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        game.currentGame = ["button1", "button2"];
        game.playerMoves = ["button3", "button2"];
        newGame();
    });
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("should clear currentGame array", () => {
        expect(game.currentGame.length).toBe(0);
    });
    test("should clear playerMoves array", () => {
        expect(game.playerMoves.length).toBe(0);
    });
});
