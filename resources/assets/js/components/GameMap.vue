<template>
    <div class="game-map">
        <table>
            <tr v-for="column in tiles">
                <td v-for="tile in column">
                    <div class="tile" :class="board.terrainClasses(tile)">
                        <piece
                            v-if="tile.piece != null"
                            :piece="tile.piece"
                        >
                        </piece>
                    </div>
                </td>
            </tr>
        </table>
        X: {{ x }}, Y: {{ y }}
    </div>
</template>

<style lang="scss">

</style>

<script>
    import Board from './../app/Board/Board.js';
    import Piece from './pieces/Piece.vue';

    export default {
        components: {
            piece: Piece,
        },
        props: [
            'game'
        ],
        data() {
            return  {
                tiles: [],
                x: 0,
                y: 0,
                board: null,
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
        },
        mounted() {
            this.getBoardState();
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
            }
        },
        methods: {
            getBoardState() {
                this.$http.get('/map', {
                    params: {
                        x: this.x,
                        y: this.y,
                        width: 15
                    }
                }).then(response => {
                    this.tiles = response.body.tiles;
                });
            },
            findTile(x, y) {
                var tile;

                this.tiles.forEach(function (row) {
                    row.forEach(function (rowTile) {
                        if (rowTile.x == x && rowTile.y == y) {
                            tile = rowTile;
                        }
                    });
                });

                return tile;
            },
            terrainClasses(tile) {
                return tile.terrain;
            },
        },
    }
</script>
