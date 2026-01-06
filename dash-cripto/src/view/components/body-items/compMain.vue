<script setup lang="ts">
import { useCoinStore } from '@/vm/stores/pinia';
import { stringToLocaleUpperCase, stringToCapitalize } from '@/vm/utils/format_data';

const store = useCoinStore();
</script>

<template>
    <main>
        <section id="mainCoins" class="container-fluid row">
            <div class="col" v-for="coin in store.mainCoins">
                <h2>{{ stringToCapitalize(coin.id) }} ({{ stringToLocaleUpperCase(coin.symbol) }})</h2>
                <div class="container">
                    <div class="d-flex justify-content-between gradient">
                        <span>
                            {{ coin.current_price }}
                        </span>
                        <span>
                            Preço atual
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
@media screen and (max-width: 600px) {
    #mainCoins  {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    .gradient {

    }
}

#mainCoins {
    box-shadow: var(--box-shadow);
    padding: 20px;
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