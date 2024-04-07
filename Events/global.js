import { ROOT_DIV } from "../Helper/constants.js";
import { globalState } from "../index.js";
import { clearHighlight } from "../Render/main.js";
import { selfHighlight } from "../Render/main.js";
import { clearPreviousSelfHighlight } from "../Render/main.js";

// highlight or not
// let highlightState = false;

// current self-highlighted square state
let selfHighlightState = null;

function whitePawnClick({ piece }) {
  clearPreviousSelfHighlight(selfHighlightState);
  selfHighlight(piece);
  selfHighlightState = piece;
  // const flatArray = globalState.flat();
  const currentPos = piece.currentPosition;
  // on initial position
  if (piece.currentPosition[1] == "2") {
    const highlightSquareIds = [
      `${currentPos[0]}${Number(currentPos[1]) + 1}`,
      `${currentPos[0]}${Number(currentPos[1]) + 2}`,
    ];
    clearHighlight();
    highlightSquareIds.forEach((highlight) => {
      globalState.forEach((row) => {
        row.forEach((element) => {
          if (element.id == highlight) {
            element.highlight(true);
          }
        });
      });

      // if (highlightState) clearHighlight();
      // renderHighlight(highlight);
      // highlightState = true;

      // const el = flatArray.find((element) => element.id == highlight);
    });
  }
  // console.log(globalState);
}

function GlobalEvent() {
  ROOT_DIV.addEventListener("click", function (event) {
    if (event.target.localName === "img") {
      const clickId = event.target.parentNode.id;
      const flatArray = globalState.flat();
      const square = flatArray.find((el) => el.id == clickId);
      if (square.piece.pieceName == "WHITE_PAWN") {
        whitePawnClick(square);
      }
    }
  });
}

export { GlobalEvent };
