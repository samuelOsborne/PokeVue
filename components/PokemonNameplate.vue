<template>
    <div class="row center-content">
        <div class="pokemon-nameplate row justify-content-between">
            <div class="col" style="margin: auto">
                {{name}}
            </div>
            <!--            {{url}}-->
            <div class="col mr-auto text-right">
                <img :src="image" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PokemonNameplate",

        scripts: {
            addToTeam: {

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
