<template>
    <td>
        <div class="tile" :class="tileClasses">
            <piece
                v-if="tile.piece != null"
                :piece="tile.piece"
                :game="game"
            >
            </piece>
            <div
                class="available-move"
                v-if="tile.isAvailableMove"
                @click="makeMove"
            >
            </div>
        </div>
    </td>
</template>

<script>
    import Piece from './Piece.vue';

    export default {
        props: [
            'tile',
            'game'
        ],
        components: {
            piece: Piece,
        },
        computed: {
            tileClasses() {
                var classes = this.tile.terrain
                    + ' east-' + this.game.board.findTile(this.tile.x + 1, this.tile.y).terrain
                    + ' west-' + this.game.board.findTile(this.tile.x - 1, this.tile.y).terrain
                    + ' north-' + this.game.board.findTile(this.tile.x, this.tile.y - 1).terrain
                    + ' south-' + this.game.board.findTile(this.tile.x, this.tile.y + 1).terrain;

                if (this.tile.isAvailableMove) {
                    classes = classes + ' is-available-move';
                }

                return classes;
            }
        },
        methods: {
            makeMove() {
                events.$emit('tile.make-move', this.tile);       
            },
        },
    }
</script>