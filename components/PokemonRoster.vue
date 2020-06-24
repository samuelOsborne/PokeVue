<template>
    <div>
        <h3>
            Current roster
        </h3>
        <div class="row pokemon-roster">
            <div v-for="item in this.pokemon" class="col-sm roster-item text-center" v-on:click="removeFromRoster(item.name)">
                <div class="roster-image">
                    <img :src=item.image />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mutations, store } from "../store";

    export default {
        name: "PokemonRoster",

        data() {
            return {
                pokemon: store.currentRoster,
            }
        },

        computed: {
            getPokemonRoster() {
                return store.currentRoster;
            }
        },

        methods: {
            removeFromRoster: function(pokemonName) {
                mutations.removeFromRoster(pokemonName);
            }
        }
    }
</script>

<style scoped>

</style>
