<template>
    <div class="game-map row">
        <div class="col-xs-3">
            <div class="game-info-panel panel panel-default">
                <div class="panel-heading">
                    Game Info
                </div>
                <div class="panel-body">
                    X: {{ x }}, Y: {{ y }}
                </div>
            </div>
        </div>
        <div class="col-xs-6">
            <table>
                <row
                    v-for="(row, index) in game.board.rows"
                    :row="row"
                    :game="game"
                    :key="index"
                >
                </row>
            </table>
        </div>
        <div class="col-xs-3">
            <div class="game-info-panel panel panel-default">
                <div class="panel-heading">
                    Selected Piece
                </div>
                <div class="panel-body">
                    {{ selectedPiece.type }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Board from './../app/Board/Board.js';
    import Row from './Row.vue';

    export default {
        components: {
            row: Row
        },
        props: [
            'game'
        ],
        data() {
            return  {
                x: 0,
                y: 0,
                selectedPiece: {
                    type: null,
                },
                availableMoves: [],
            }
        },
        created() {
            var _this = this;

            events.$on('x.shift', function(newValue) {
                _this.x = _this.x + newValue;
            });
            events.$on('y.shift', function(newValue) {
                _this.y = _this.y + newValue;
            });
            events.$on('piece.selected', function (piece) {
                _this.selectedPiece = piece;
            });
        },
        watch: {
            x(newValue) {
                this.getBoardState();
            },
            y(newValue) {
                this.getBoardState();
            },
            tiles(newValue) {
                this.board = new Board(newValue);
            },
            availableMoves(newValue) {
                var _this = this;

                this.availableMoves.forEach(function (availableMove) {
                    _this.markTileAsAvailableMove(availableMove.x, availableMove.y);
                });
            },
        },
        methods: {
            makePiece(piece) {
                return new Piece(piece, this.game);
            }
        },
        computed: {
            board() {
                return this.game.board;
            }
        }
    }
</script>
