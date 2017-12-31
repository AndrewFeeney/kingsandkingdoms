<template>
    <div class="game-map">
        <table>
            <tr v-for="column in tiles">
                <td v-for="tile in column">
                    <div class="tile" :class="tile.terrain">
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
        background-position: right 40px;
    }
    &.forest {
        background-image: url('/images/forest.png');
    }
    &.lake {
        background-image: url('/images/water.png');
        background-position: right -800px top;
    }
}

</style>

<script>
    import eventsBus from './../app/Events/EventsBus.js';

    window.events = new Vue();

    export default {
        data() {
            return  {
                tiles: [],
                x: 0,
                y: 0,
                eventsBus: eventsBus,
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
                console.log(newValue);
                this.getBoardState();
            },
            y(newValue) {
                this.getBoardState();
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
            }
        }
    }
</script>
