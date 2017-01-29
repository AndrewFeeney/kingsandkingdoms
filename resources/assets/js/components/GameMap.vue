<template>
    <table>
        <tr v-for="column in tiles">
            <td v-for="tile in column">
                <div class="tile" :class="tile.terrain">
                </div>
            </td>
        </tr>
    </div>
</template>

<style lang="scss">

$grassland: #005C09;
$grassland: #005C09;

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
    export default {
        data() {
            return  {
                tiles: []
            }
        },
        mounted() {
            this.$http.get('/map', {
                params: {
                    x: 0,
                    y: 0,
                    width: 15
                }
            }).then(response => {
                this.tiles = response.body.tiles;
            });
        }
    }
</script>
