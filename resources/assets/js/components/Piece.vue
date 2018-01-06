<template>
    <div class="piece" @click="selectPiece()" :class="classes">
        <img :src="imageUri">
    </div>
</template>

<script>
    export default {
        props: [
            'piece',
            'game'
        ],
        data() {
            return  {
                isSelected: false,
            };
        },
        created() {
        },
        computed: {
            imageUri() {
                if (this.piece.type == 'king') {
                    return '/images/hero.png';
                }
            },
            classes() {
                var classes = [];

                classes.push(this.piece.type);
                
                if (this.isSelected) {
                    classes.push('is-selected');
                }
                
                return classes.join(' ');
            }
        },
        methods: {
            selectPiece() {
                events.$emit('piece.select', this.piece);
                this.isSelected = true;
            },
            availableMoves() {
                return this.gamePiece.availableMoves();
            }
        }
    }

</script>