<template>
    <div class="row center-content" v-on:click="addToTeam()">
        <div class="pokemon-nameplate row justify-content-between">
            <div class="col" style="margin: auto">
                {{name}}
            </div>
            <div class="col mr-auto text-right">
                <img :src="image" />
            </div>
            <div class="btn-primary">
                Details
            </div>
        </div>
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
                    url: this.url,
                    image: this.image
                });
            }
        },
        props: {
            name: String,
            url: String,
            image: Image
        },
    }
</script>

<style scoped>

</style>
