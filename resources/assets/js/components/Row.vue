<template>
    <tr>
        <tile
            v-for="(tile, index) in row.tiles"
            :key="index"
            :tile="tile"
            :game="game"
        >
        </tile>
    </tr>
</template>

<script>

import Tile from './Tile.vue';

export default {
    props: [
        'row',
        'game'
    ],
    components: {
        tile: Tile,
    }
}

</script>