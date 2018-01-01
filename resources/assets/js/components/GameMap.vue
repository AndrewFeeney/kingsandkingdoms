<template>
    <div class="game-map">
        <table>
            <tr v-for="column in tiles">
                <td v-for="tile in column">
                    <div class="tile" :class="board.terrainClasses(tile)">
                    </div>
                </td>
            </tr>
        </table>
        X: {{ x }}, Y: {{ y }}
    </div>
</template>

<style lang="scss">

$grassland: #005C09;
$grassland: #005C09;

.game-map table {
    margin-left: auto;
    margin-right: auto;
}

.tile {
    width: 40px;
    height: 40px;
    /** border: 1px solid #DDD; **/
    &.grassland {
        background-image: url('/images/grass.png');
    }
    &.hills {
        background-image: url('/images/mountains.png');
    }
    &.mountain {
        background-image: url('/images/mountains.png');
        background-position: right 20px;
    }
    &.forest {
        background-image: url('/images/forest.png');
    }
    &.lake {
        background-image: url('/images/water.png');
        background-position: right -700px top;
    }
}

</style>

<script>
    import EventsBus from './../app/Events/EventsBus.js';
    import Board from './../app/Board/Board.js';

    window.events = new Vue();

    export default {
        data() {
            return  {
                tiles: [],
                x: 0,
                y: 0,
                eventsBus: EventsBus,
                board: null,
            }
        },
        created() {
            this.eventsBus.registerAll();

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
                        width: 25
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
            }
        },
    }
</script>
