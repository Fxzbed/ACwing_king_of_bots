<template>
    <div class = "playground"></div>
        <GameMap/>
</template>

<script>
import GameMap from './GameMap.vue'

export default {
    components: {
        GameMap
    }
}
</script>

<style scoped>
div.playground {
    width: 60vw;
    height: 70vh;
    /* background: white;s */
    margin: 40px auto;
}
</style>