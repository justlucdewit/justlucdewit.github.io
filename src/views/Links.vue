<template>
    <main>
        <div class="links-tekst">
            If you want to contact me,<br>
            you can try messaging me on the following platforms:
        </div>

        <div class="links-list">
            <LinkItem :img="require('@/assets/icons/mail.png')" name="E-mail" link="mailto:luc.dewit@hotmail.nl"/>
            <LinkItem :img="require('@/assets/icons/discord.png')" name="discord" link="https://discordapp.com/users/332071218066751490"/>
            <LinkItem :img="require('@/assets/icons/github.png')" name="github" link="https://github.com/justlucdewit"/>
            <LinkItem :img="require('@/assets/icons/twitter.png')" name="twitter" link="https://twitter.com/lucdewit8"/>
            <LinkItem :img="require('@/assets/icons/facebook.png')" name="facebook" link="https://www.facebook.com/luc.dewit.98"/>
        </div>
    </main>
</template>

<script>
import LinkItem from '@/components/LinkItem.vue'

export default {
    components: {LinkItem}
}
</script>

<style lang="scss">
    .links-tekst{
        color: white;
        font-size: 20px;
        padding: 20px 0px;
        padding-bottom: 50px;
    }

    .links-list{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
        justify-items: center;

        :hover{
            background-color: #3f4449;
        }
    }

    @media only screen and (max-width: 600px){/*mobile mode*/
        .links-list{
            justify-items: center;
        }
    }
</style>