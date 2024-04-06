// black pieces
function blackPawn(currentPosition) {
  return {
    currentPosition,
    img: "images/black/pawn.png",
    pieceName: "BLACK_PAWN",
  };
}
function blackRook(currentPosition) {
  return {
    currentPosition,
    img: "images/black/rook.png",
    pieceName: "BLACK_ROOK",
  };
}
function blackKnight(currentPosition) {
  return {
    currentPosition,
    img: "images/black/knight.png",
    pieceName: "BLACK_KNIGHT",
  };
}
function blackBishop(currentPosition) {
  return {
    currentPosition,
    img: "images/black/bishop.png",
    pieceName: "BLACK_BISHOP",
  };
}
function blackQueen(currentPosition) {
  return {
    currentPosition,
    img: "images/black/queen.png",
    pieceName: "BLACK_QUEEN",
  };
}
function blackKing(currentPosition) {
  return {
    currentPosition,
    img: "images/black/king.png",
    pieceName: "BLACK_KING",
  };
}

// white pieces
function whitePawn(currentPosition) {
  return {
    currentPosition,
    img: "images/white/pawn.png",
    pieceName: "WHITE_PAWN",
  };
}

function whiteRook(currentPosition) {
  return {
    currentPosition,
    img: "images/white/rook.png",
    pieceName: "WHITE_ROOK",
  };
}
function whiteKnight(currentPosition) {
  return {
    currentPosition,
    img: "images/white/knight.png",
    pieceName: "WHITE_KNIGHT",
  };
}
function whiteBishop(currentPosition) {
  return {
    currentPosition,
    img: "images/white/bishop.png",
    pieceName: "WHITE_BISHOP",
  };
}
function whiteQueen(currentPosition) {
  return {
    currentPosition,
    img: "images/white/queen.png",
    pieceName: "WHITE_QUEEN",
  };
}
function whiteKing(currentPosition) {
  return {
    currentPosition,
    img: "images/white/king.png",
    pieceName: "WHITE_KING",
  };
}
export {
  blackPawn,
  blackBishop,
  blackKing,
  blackKnight,
  blackQueen,
  blackRook,
  whitePawn,
  whiteBishop,
  whiteKing,
  whiteKnight,
  whiteQueen,
  whiteRook,
};
