import Vue from "vue";

export const store = Vue.observable({
    currentRoster: []
});

export const mutations = {
    addToRoster(pokemon) {
        if (store.currentRoster.length < 6)
            store.currentRoster.push(pokemon);
    },
    removeFromRoster(pokemonName) {
        for (let i = 0; i < store.currentRoster.length; i++)
        {
            if (store.currentRoster[i].name === pokemonName)
            {
                store.currentRoster.splice(i, 1);
                break;
            }
        }
    }
};
