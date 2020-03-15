<template>
    <main>
        <div class="introduction">
            <h1 class="name">Luc de Wit</h1>
            <h3 class="subname">programmer / web-dev</h3>
        </div>

        <div class="skewed"></div>

        <div class="about">
            <img id="luke-image" src="@/assets/lukes/luke1.png" v-if="random_pfp == 0"/>
            <img id="luke-image" src="@/assets/lukes/luke2.png" v-if="random_pfp == 1"/>
            <img id="luke-image" src="@/assets/lukes/luke3.png" v-if="random_pfp == 2"/>
            <img id="luke-image" src="@/assets/lukes/luke5.png" v-if="random_pfp == 3"/>
            <img id="luke-image" src="@/assets/lukes/luke6.png" v-if="random_pfp == 4"/>
            <img id="luke-image" src="@/assets/lukes/luke7.png" v-if="random_pfp == 5"/>
            <img id="luke-image" src="@/assets/lukes/luke8.png" v-if="random_pfp == 6"/>
            <img id="luke-image" src="@/assets/lukes/luke9.png" v-if="random_pfp == 7"/>
            
            <div id="about-text">
                Hi, My name is luc de Wit, and i am a first year
                software development student in the netherlands. im 18 years old and am also a speed cuber,     
                drummer, and often love playing games.
                <br/><br/>
                I like spending my time trying to understand concepts that are new to me, and trying to
                understand how to use tools/languages to create cool and interesting projects that i can share
                with the people from the internet!
            </div>
        </div>

        <hr />

        <div class="technologies">
            <h2>technologies I use</h2>
            <div class="tech-list">
                <!--
                    Python
                -->
                <div class="tech">
                    <img class="tech-logo" src="@/assets/tech-logos/vuejs.png">
                    <div class="tech-title">
                        Vuejs
                    </div>
                    <div class="tech-desc">
                        A webframe work, that i use to build
                        websites. i can dynamicly create and
                        hide elements. and use modular elements
                    </div>
                </div>

                <div class="tech">
                    <img class="tech-logo" src="@/assets/tech-logos/html5.png">
                    <div class="tech-title">
                        HTML 5
                    </div>
                    <div class="tech-desc">
                        A markup language that i can use to 
                        define the structure of a website.
                        create text, and images
                    </div>
                </div>

                <div class="tech">
                    <img class="tech-logo" src="@/assets/tech-logos/css3.png">
                    <div class="tech-title">
                        Css3
                    </div>
                    <div class="tech-desc">
                        A styling language so i can
                        make the website look more beatifull,
                        modern and alive
                    </div>
                </div>

                <div class="tech">
                    <img class="tech-logo" src="@/assets/tech-logos/js.png">
                    <div class="tech-title">
                        Javascript
                    </div>
                    <div class="tech-desc">
                        A programming language that
                        is build into every browser, i can
                        use to make the website more interactive.
                    </div>
                </div>

                <div class="tech">
                    <img class="tech-logo" src="@/assets/tech-logos/python.png">
                    <div class="tech-title">
                        Python
                    </div>
                    <div class="tech-desc">
                        Python is a high level programming language, it makes programming super
                        easy, and its a great tool to create quick sketches of programs, and try
                        out algorithms. however, its very slow. and not meant for huge projects 
                    </div>
                </div>

                <div class="tech">
                    <img class="tech-logo" src="@/assets/tech-logos/c.png">
                    <div class="tech-title">
                        C
                    </div>
                    <div class="tech-desc">
                        C is a low level programming
                        language, meaning its very fast.
                        but complicated and abstract. i use it
                        to make low level terminal tools
                    </div>
                </div>

                <div class="tech">
                    <img class="tech-logo" src="@/assets/tech-logos/cpp.png">
                    <div class="tech-title">
                        C++
                    </div>
                    <div class="tech-desc">
                        C++ is a programming language build
                        on top of the C language, it is slightly
                        higher and less abstract, but still very fast.
                        I use it to create fast desktop/terminal applications.
                    </div>
                </div>

                <div class="tech">
                    <img class="tech-logo" src="@/assets/tech-logos/lua.png">
                    <div class="tech-title">
                        Lua
                    </div>
                    <div class="tech-desc">
                        Lua is a programming language similair to Python
                        it is build on C and is very light weight, i use
                        it as a programming language to build windowed games
                        with a lua based game engine named Löve 2D
                    </div>
                </div>

                <div class="tech">
                    <img class="tech-logo" src="@/assets/tech-logos/git.png">
                    <div class="tech-title">
                        Git
                    </div>
                    <div class="tech-desc">
                        Git is a source control tool. i can use it to
                        store my code/files in a special folder named a
                        "repository", then i can do things like host it on github,
                        or revert back to older versions.
                    </div>
                </div>

                <div class="tech">
                    <img class="tech-logo" src="@/assets/tech-logos/gh.png">
                    <div class="tech-title">
                        Github
                    </div>
                    <div class="tech-desc">
                        Github is a online site where people can upload their git
                        repo's, and you can download other open source software, and
                        collaberate on other projects.
                    </div>
                </div>

                <div class="tech">
                    <img class="tech-logo" src="@/assets/tech-logos/vsc.png">
                    <div class="tech-title">
                        Vscode
                    </div>
                    <div class="tech-desc">
                        Visual studio code is a electron based code editor. it is highly 
                        custommizable and lightweight. it has alot of super handy features,
                        hence why its my favourite text editor
                    </div>
                </div>

                <div class="tech">
                    <img class="tech-logo" src="@/assets/tech-logos/cmd.png">
                    <div class="tech-title">
                        CMD
                    </div>
                    <div class="tech-desc">
                        CMD or command prompt, is the standard windows terminal, made by
                        microsoft, its super lightweight. and i use it to run my terminal
                        projects in, and host vuejs servers for my sites
                    </div>
                </div>
            </div>
        </div>
        
        
    </main>
</template>

<script>
export default {
    data(){
        return {
            numOfPfps: 8,
            random_pfp: null
        }
    },

    created(){
        let random = Math.floor(Math.random() * this.numOfPfps);
        this.random_pfp = random;
    },

    mounted(){
        //add event listener for the skewing effect
        document.addEventListener('scroll',()=>{
            let value = -10+window.scrollY/60;
            if (value < 0){
                document.getElementsByClassName("skewed")[0].style.transform = `skewY(${value}deg)`;
            }else{
                document.getElementsByClassName("skewed")[0].style.transform = "skewY(0deg)";
            }
        });
    }
}
</script>

<style lang="scss">
    $bg-main: #333;

    body{
        background-color: $bg-main;
        margin-bottom: 6rem;
    }

    .introduction{
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: linear-gradient(135deg, rgba(138,142,167,1) 1%, rgba(96,102,140,1) 43%, rgba(50,57,150,1) 79%, rgba(17,0,181,1) 100%);
        color: #fff;
        z-index: 0;
    }

    .name{
        text-transform: uppercase;
        letter-spacing: 0.1ch;
        font-size: 80px;
        margin-bottom: 10px;
        z-index: 1;
    }

    .skewed{
        position: absolute;
        bottom: -100%;
        left: 0;
        width: 100%;
        height: 100%;
        transform: skewY(-10deg);
        transform-origin: top left;
        background: $bg-main;
        z-index: 2;
    }

    .about{
        color: white;
        text-align: left;
        margin-top: 50px;
        margin-bottom: 50px;
        position: relative;
        font-size: 20px;
        padding: 0vw 5vw;
        z-index: 3;
        text-align: center;
    }

    #about-text{
        text-align: left;
        width: 50vw;
        margin-left: 20vw;
    }

    #luke-image{
        height: 60vh;
        width: 50vh;
        margin-right: 20px;
        margin-bottom: 20px;
        border-radius: 100%;
        box-shadow: 7px 7px #222;
        image-rendering: pixelated;
        image-rendering: -moz-crisp-edges;
        image-rendering: crisp-edges;
    }

    hr{
        position: relative;
        z-index: 3; 
    }

    .technologies{
        position: relative;
        z-index: 3;
        color: white;
        margin-top: 20px;

        h2{
            font-size: 50px;
        }
    }

    .tech-list{
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    }

    .tech{
        margin-top: 50px;
        padding: 2px;
        text-align: center;
        width: 300px;

        .tech-title{
            font-weight: bolder;
            font-size: 25px;
            padding-bottom: 5px;
        }

        .tech-logo{
            width: 100px
        }

        .tech-desc{
            text-align: left;
        }
    }

    @media only screen and (max-width: 600px){/*mobile mode*/
        .tech-list{
            justify-items: center;
        }
    }
</style>