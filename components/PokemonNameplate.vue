<template>
    <div class="row center-content" style="align-items: center">
        <div class="pokemon-nameplate row justify-content-between" v-on:click="addToTeam()">
            <div class="col" style="margin: auto">
                {{name}}
            </div>
            <div class="col mr-auto text-right">
                <img :src="image" />
            </div>
        </div>
        <nuxt-link :to="`/pokemon/${name}`">
            <div class="btn-primary text-center m-auto">
                Details
            </div>
        </nuxt-link>
    </div>
</template>

<script>
    import {mutations} from "../store";

    export default {
        name: "PokemonNameplate",

        methods: {
            addToTeam: function() {
                mutations.addToRoster({
                    name: this.name,
                    id: this.id,
                    url: this.url,
                    image: this.image
                });
            },
        },
        props: {
            name: {
                type: String,
                required: true
            },
            id: {
                type: Number,
                required: true
            },
            url: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            }
        },
    }
</script>

<style scoped>

</style>
