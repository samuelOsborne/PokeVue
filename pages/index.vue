<template>
    <div>
        <div class="container app-font-family">
            <h1 class="page-section text-center">
                Pokemon Pro Team Builder
            </h1>
            <h3>
                Current roster
            </h3>
            <PokemonRoster ref="pokemon-roster">
            </PokemonRoster>
            <div class="page-section">
                <div class="row center-items">
                    <div class="col search-bar text-center">
                        search
                    </div>
                </div>
                <p v-if="$fetchState.pending">Fetching pokemon...</p>
                <p v-else-if="$fetchState.error">Error while fetching pokemon: {{ $fetchState.error.message }}</p>
                <div ref="container" class="center-items">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PokemonNameplate from '../components/PokemonNameplate'
    import PokemonRoster from "../components/PokemonRoster";
    import Vue from 'vue'

    export default {
        components: {
            PokemonNameplate,
            PokemonRoster
        },

        data() {
            return {
                pokemon: {

                },
                pokemonList: [
                    {
                        name: '',
                        id: '',
                        image: ''
                    }
                ]
            }
        },
        async fetch () {
            this.pokemon = await this.$http.$get('https://pokeapi.co/api/v2/pokemon?limit=175');

            for (let i = 0; i < this.pokemon.results.length; i++)
            {
                console.log(this.pokemon.results[i].name);
                console.log(this.pokemon.results[i].url);
                let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`;

                var pokemonInstance = Vue.extend(PokemonNameplate);
                var instance = new pokemonInstance();
                instance.name = this.pokemon.results[i].name;
                instance.url = this.pokemon.results[i].url;
                instance.image = imgUrl;
                instance.$mount();
                this.$refs.container.appendChild(instance.$el);

            }

            // this.pokemon.results.map((data, index) => ({
            //     name: data.name,
            //     id: index + 1,
            //     image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
            //     1}.png`,
            // }));
        },
        scripts: {
            getTotalPokemon() {

            },

        }
    }
</script>

<style>
    .title {
        font-family:
            'Quicksand',
            'Source Sans Pro',
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            'Helvetica Neue',
            Arial,
            sans-serif;
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }
</style>
