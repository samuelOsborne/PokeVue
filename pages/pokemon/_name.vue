<template>
  <div>
      <div class="container">
          <nuxt-link to='/' class="back-btn">
              Return to homepage
          </nuxt-link>
          <div class="page-section">
              <PokemonRoster></PokemonRoster>
              <div class="page-section">
                      <h1 class="text-center">{{this.pokemonName}}</h1>
                  <p v-if="$fetchState.pending">Fetching pokemon...</p>
                  <p v-else-if="$fetchState.error">Error while fetching pokemon: {{ $fetchState.error.message }}</p>
                  <div class="page-section">
                      <div class="row p-5">
                          <div class="col-md text-center">
                              <img :src=this.pokemonSpriteUrl />
                          </div>
                      </div>
                      <div class="row p-2 text-center">
                          <div v-for="item in this.pokemonSprites" class="col-md text-center">
                              <img :src=item />
                          </div>
                      </div>
                      <div class="row m-5">
                          <div class="col">
                              <h4> Abilities: </h4>
                              <div v-for="item in this.pokemonAbilities">
                                  <div>
                                      {{item}}
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="row m-5">
                          <div class="col">
                              <h4> Type: </h4>
                              <div v-for="item in this.pokemonTypes">
                                  <div>
                                      {{item}}
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="row m-5">
                          <div class="col">
                              <h4> Weight: </h4>
                              {{this.pokemonWeight}}
                          </div>
                      </div>
                      <div class="row m-5">
                          <div class="col">
                              <h4> Height: </h4>
                              {{this.pokemonHeight}}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  import PokemonRoster from "../../components/PokemonRoster";
  export default {
    name: "index",
      components: {PokemonRoster},

      data() {
        return {
            id: this.$route.query.name,
            pokemonAbilities: [],
            pokemonName: String,
            pokemonHeight: "",
            pokemonWeight: "",
            pokemonTypes: [],
            pokemonId: "",
            pokemonSpriteUrl: "",
            pokemonSprites: []
        }
      },
      created() {
        this.pokemonName = this.$route.params.name;
      },
      async fetch () {
          this.pokemonData = await this.$http.$get('https://pokeapi.co/api/v2/pokemon/' + this.pokemonName);

          for (let i = 0; i < this.pokemonData.abilities.length; i++) {
              this.pokemonAbilities.push(this.pokemonData.abilities[i].ability.name);
          }
          for (let i = 0; i < this.pokemonData.types.length; i++) {
              this.pokemonTypes.push(this.pokemonData.types[i].type.name);
          }

          if (this.pokemonData.sprites.back_default)
              this.pokemonSprites.push(this.pokemonData.sprites.back_default);
          if (this.pokemonData.sprites.back_female)
              this.pokemonSprites.push(this.pokemonData.sprites.back_female);
          if (this.pokemonData.sprites.back_shiny)
              this.pokemonSprites.push(this.pokemonData.sprites.back_shiny);
          if (this.pokemonData.sprites.back_shiny_female)
              this.pokemonSprites.push(this.pokemonData.sprites.back_shiny_female);
          if (this.pokemonData.sprites.front_default)
              this.pokemonSprites.push(this.pokemonData.sprites.front_default);
          if (this.pokemonData.sprites.front_female)
              this.pokemonSprites.push(this.pokemonData.sprites.front_female);
          if (this.pokemonData.sprites.front_shiny)
              this.pokemonSprites.push(this.pokemonData.sprites.front_shiny);
          if (this.pokemonData.sprites.front_shiny_female)
              this.pokemonSprites.push(this.pokemonData.sprites.front_shiny_female);


          this.pokemonHeight = this.pokemonData.height;
          this.pokemonWeight = this.pokemonData.weight;
          this.pokemonId = this.pokemonData.id;
          this.pokemonSpriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonId}.png`
      }
  }
</script>

<style scoped>

</style>
