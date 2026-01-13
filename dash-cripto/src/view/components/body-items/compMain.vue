<script setup lang="ts">
import { useCoinStore } from '@/vm/stores/pinia';
import { stringToLocaleUpperCase, stringToCapitalize, formatPrice } from '@/vm/utils/format_data';
import Charts from '@/view/charts/Charts.vue';
import { computed } from 'vue';
import type { Coin } from '@/model/types/tipos';

const store = useCoinStore();

const formatPropData = (object: Coin): [number, number, number] => {
    let arrayData: [number, number, number] = [object.high_24h, object.low_24h, object.current_price]
    return arrayData
}

const formatPropLabels = (): string[] => {
    return ['Maior_24h', 'Menor_24h', 'Preço_atual']
}

</script>

<template>
    <main>
        <section id="mainCoins" class="container-fluid row box-id">
            <div class="col" v-for="coin in store.mainCoins">
                <h2>
                    <img v-if="coin.image" :src="coin.image" alt="imagem moeda" width="35px">
                    {{ stringToCapitalize(coin.name) }} ({{ stringToLocaleUpperCase(coin.symbol) }})
                </h2>
                <div class="container">
                    <div class="d-flex justify-content-between gradient">
                        <span>
                            {{ formatPrice(coin.current_price) }}
                        </span>
                        <span>
                            Preço atual
                        </span>
                    </div>
                </div>
            </div>
        </section>
        <section id="graphCoins" class="box-id" style="display: flex; flex-direction: column; gap: 5px;">
            <div v-for="coin in store.anotherCoins" :key="coin.id" class="for-coin">
                <div>
                    <img v-if="coin.image" :src="coin.image" width="50px">
                    <span>{{ coin.name }}</span>
                    <span>({{ stringToLocaleUpperCase(coin.symbol) }})</span>
                </div>
                <div class="graph">
                    <Charts :prop_data="formatPropData(coin)" :prop_labels="formatPropLabels()" :prop_data-label="'Histórico de Preço da moeda '+coin.name"/>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
@media screen and (max-width: 700px) {
    #mainCoins {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    .gradient {
        width: auto;
        font-size: small;
        margin: auto;
        margin-top: 30px;
    }

    .for-coin {
        flex-direction: column;
    }

    .graph {
        margin: auto;
        max-width: 80vw;
        height: 250px;
    }
}

.graph {
    width: 400px;
    height: 200px;
}

.for-coin {
    border: 1px solid rgba(0, 0, 0, 0.39);
    padding: 15px;
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
    }
}

#graphCoins {
    padding: 30px;
}

#mainCoins {

    h2 {
        text-align: center;
    }
}

.box-id {
    box-shadow: var(--box-shadow);
    padding: 40px 20px;
    margin: 0;
}

.gradient {
    background: #FFF;
    border: 1px solid black;
    padding: 20px 10px;
    border-radius: 5px;
    box-shadow: var(--box-shadow);
}

</style>