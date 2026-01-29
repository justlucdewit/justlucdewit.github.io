<template>
    <header>
        <h1 class="no-top-margin">
            Lukedev
        </h1>

        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/blog">Blog</router-link>
        </nav>
    </header>
</template>

<style scoped lang="scss">
header {
    border-bottom: 1px solid white;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        a {
            margin-left: 20px;
            text-decoration: none;
            color: white;
            font-weight: 100;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>