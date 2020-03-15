<template>
    <div class="link-item">
        <a :href="link">
        <span class="link-image"><img :src="img"></span>
        <b><span class="link-name">{{name}}</span></b>
        </a>
    </div>
</template>

<script>
export default{
    props: {
        name: String,
        img: String,
        link: String
    }
}
</script>

<style lang="scss">
    .link-item{
        a{
            color: white;
            text-decoration: none;
        }
        color: white;
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 20px;
        padding: 10px;
        margin-bottom: 100px;
        width: 10rem;
        img{
            width: 10rem;
            image-rendering: pixelated;
        image-rendering: -moz-crisp-edges;
        image-rendering: crisp-edges;
        }
    }
</style>
