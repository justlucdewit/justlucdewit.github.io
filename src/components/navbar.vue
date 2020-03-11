<template>
    <nav class="navbar">
        <ul class="navbar-nav">
            <li class="logo">
                <a href="#" class="nav-link">
                    <span class="link-text logo-text">Luc de Wit</span>
                    <img src="@/assets/navbaritems/arrow.png" class="nav-icon arrow">
                </a>
            </li>
            <li class="nav-item">
                <router-link to="/home" class="nav-link">
                    <img src="@/assets/navbaritems/home.png" class="nav-icon">
                    <span class="link-text">Home</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/projects" class="nav-link">
                    <img src="@/assets/navbaritems/projects.png" class="nav-icon">
                    <span class="link-text">Projects</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="./blog" class="nav-link">
                    <img src="@/assets/navbaritems/blog.png" class="nav-icon">
                    <span class="link-text">Blog</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="./links" class="nav-link">
                    <img src="@/assets/navbaritems/links.png" class="nav-icon">
                    <span class="link-text">Links</span>
                </router-link>
            </li>
            <li to="nav-item" style="margin-top: auto">
                <a href="#" class="nav-link">
                    <img src="@/assets/navbaritems/darkmode.png" class="nav-icon">
                    <span class="link-text">Darkmode</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
$text-primary: #b6b6b6;
$text-secondary: #ececec;
$bg-primary: #232323;
$bg-secondary: #202020;
$transition-delay: .5s;

.navbar{
    margin-left: 0;
    padding: 0;
    position: fixed;
    background-color: $bg-primary;
    transition: width $transition-delay ease;
    overflow: hidden;
    z-index: 4;
}

.navbar-nav{
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}

.nav-item{
    width: 100%;
}

.nav-link {
    display: flex;
    align-items: center;
    height: 5rem;
}

.nav-item a{
    text-decoration: none;
}

.link-text{
    color: #aaa;
    text-decoration: none !important;
    display: none;
    margin-left: 1rem;
    transition: color $transition-delay;
}

.nav-icon{
    display: block;
    margin: 0 1.5rem;
    filter: grayscale(100%) brightness(800%) opacity(.5);
    transition: $transition-delay;
}

.nav-link:hover{
    .link-text{
        color: blue;
    }
    background: $bg-secondary;
    .nav-icon{
        filter: grayscale(0%) brightness(100%) opacity(1);
    }

    .logo-text{
        color: #aaa;
    }

    .arrow{
        filter: grayscale(100%) brightness(400%) opacity(.5);
    }
}



.logo{
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
    color: $text-secondary;
    letter-spacing: 0.3ch;

    a{
        text-decoration: none;
    }

    a:hover{
        background: $bg-primary;
    }
}

.arrow{
    transform: rotate(0deg);
    transition: transform $transition-delay;
}

.navbar:hover .arrow{
    transform: rotate(-180deg);
}

@media only screen and (min-width: 600px){/*desktop mode*/
    .navbar{
        top: 0;
        width: 5rem;
        height: 100vh
    }

    .navbar:hover {
        width: 16rem;
    }

    .navbar:hover .link-text{
        display: block;
    }

    .nav-icon{
        width: 2rem;
        height: 2rem;
    }

    main{
        padding-left: 5rem;
    }
}

@media only screen and (max-width: 600px){/*mobile mode*/
    .navbar{
        bottom: 0;
        width: 100vw;
        height: 5rem
    }

    .logo{
        display: none;
    }

    .navbar-nav{
        flex-direction: row;
    }

    .nav-link{
        justify-content: center;
    }

    .nav-icon{
        width: 1.5rem;
        height: 1.5rem;
    }
}
</style>