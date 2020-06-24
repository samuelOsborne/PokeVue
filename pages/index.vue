<template>
    <div>
        <div class="container app-font-family">
            <h1 class="page-section text-center">
                Pokemon Pro Team Builder
            </h1>
            <PokemonRoster>
            </PokemonRoster>
            <div class="page-section">
                <div class="row center-items">
                    <div class="col search-bar text-center">
                        <input type="text" v-model="searchQuery" placeholder="Search" />
                    </div>
                </div>
                <p v-if="$fetchState.pending">Fetching pokemon...</p>
                <p v-else-if="$fetchState.error">Error while fetching pokemon: {{ $fetchState.error.message }}</p>
                <div>
                    <div v-for="pokemon in filteredList">
                        <PokemonNameplate :name=pokemon.name :url=pokemon.url :image=pokemon.image :id=pokemon.id />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PokemonNameplate from '../components/PokemonNameplate'
    import PokemonRoster from "../components/PokemonRoster";

    export default {
        components: {
            PokemonNameplate,
            PokemonRoster
        },

        data() {
            return {
                searchQuery: null,
                pokemonList: []
            }
        },
        async fetch () {
            this.pokemon = await this.$http.$get('https://pokeapi.co/api/v2/pokemon?limit=175');

            for (let i = 0; i < this.pokemon.results.length; i++) {
                this.pokemonList.push({
                    name: this.pokemon.results[i].name,
                    url: this.pokemon.results[i].url,
                    id: i + 1,
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`,
                })
            }
        },
        computed: {
            filteredList() {
                if (this.searchQuery) {
                    return this.pokemonList.filter(((item) => {
                        return this.searchQuery.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
                    }))
                }
                else
                    return this.pokemonList;
            }
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
