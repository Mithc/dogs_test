<template>
    <div class="header">
        <router-link to="/">main</router-link>
        <router-link to="/favorite">favourites</router-link>
        <router-link :to="breed">{{ breed }}</router-link>
    </div>
</template>

<script>
export default {
  name: 'Header',
  breed: 'allBreeds'
}
</script>

<style lang="scss" scoped>
    .header {
        height: 66px;
        width: 100%;
        background-color: #ff7e41;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

</style>
