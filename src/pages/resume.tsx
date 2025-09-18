import { useState, useEffect } from 'react';

export function Resume() {
	return (
		<section className="resume">

            <div id="header">
                <h1 id="name">
                    <b>Luc de Wit</b> — Software Developer
                </h1>

                <div id="personal-info">
                    <span id="email">
                        luc.dewit@hotmail.nl
                    </span>-&nbsp;
                    <span id="phone">
                        0646898375
                    </span>-&nbsp;
                    <span id="location">
                        Den Bosch
                    </span>
                </div>
            </div>

			<p id="intro">
				I'm a passionate software developer with 15 years of hobby experience and almost 4 years of professional experience. I’m fascinated about computers and software. Due to my focus of learning I have spent countless hours trying to figure out how software technology works under the hood.
			</p>

            <br />

            <h2>Experience</h2>

            <div id="experience">
                <div className="dated-item">
                    <div id="header">
                        <span id="title">
                            X-Ingredient
                        </span>

                        <span id="date">
                            Oct 2024 - current 
                        </span>
                    </div>
                    <div id="text">
                        At X-Ingredient I worked as a full-stack webdeveloper on digital web-based Demo presentations, marketing websites, and more interactive types of websites, for International companies like Philips, Nokia, MARS and Juniper. Here I mainly used laravel, VueJS, and ReactJS. 
                    </div>
                </div>

                <div className="dated-item">
                    <div id="header">
                        <span id="title">
                            Quadira
                        </span>

                        <span id="date">
                            Feb 2022 - Jun 2024
                        </span>
                    </div>
                    <div id="text">
                        At Quadira I worked as a full-stack webdeveloper and business central AL developer. Working on multiple web-based portals, aswell as a Business Central connector for their main product: Advanced-Forms. Here I mainly used VueJS, ASP.NET and AL.
                    </div>
                </div>

                <div className="dated-item">
                    <div id="header">
                        <span id="title">
                            STA Software
                        </span>

                        <span id="date">
                            Feb 2021 - Feb 2022 
                        </span>
                    </div>
                    <div id="text">
                        At STA-Software I worked as a full-stack webdeveloper for their administration portal with the goal to digitalize the construction sector and get rid of unneeded paper administration. Here I mainly used VueJS and ASP.NET.
                    </div>
                </div>
            </div>

            <br />

            <div className="col-2">
                <div>
                    <h2>Education</h2>
                    <div className="dated-item">
                        <div id="header">
                            <span id="title">
                                MBO
                            </span>

                            <span id="date">
                                2019 - 2022
                            </span>
                        </div>
                        <div id="text">
                            Applicatie en media ontwikkeling at ROC Dde Leijgraaf
                        </div>
                    </div>

                    <div className="dated-item">
                        <div id="header">
                            <span id="title">
                                HAVO
                            </span>

                            <span id="date">
                                2014 - 2019
                            </span>
                        </div>
                        <div id="text">
                            Nature and Health at Zwijsen College
                        </div>
                    </div>

                    <br />
                    <h2>Personality</h2>
                    <div> 🧠 Passionate learner </div>
                    <div> 🤝 Pro-active teamplayer </div>
                    <div> 🥋 direct communicator </div>
                    <div> 🧩 Quality code-writer </div>

                    <br />
                    <h2>Languages</h2>
                    <div> 🇳🇱 Dutch - B2 </div>
                    <div> 🇬🇧 English - B2 </div>
                    <div> ❇️ Esperanto - A1 </div>
                    <div> 🇩🇪 German - A1 </div>

                    <br />
                </div>
                <div>
                    <h2>Awards</h2>
                    <div className="dated-item">
                        <div id="header">
                            <span id="title">
                                Skills BeNeLux 2023
                            </span>

                            <span id="date">
                                First place
                            </span>
                        </div>
                        <div id="text">
                            International software development competition in Belgium, together with France, Netherlands, and Luxembourg.
                        </div>
                    </div>

                    <div className="dated-item">
                        <div id="header">
                            <span id="title">
                                Skills The Finals 2022 
                            </span>

                            <span id="date">
                                First place
                            </span>
                        </div>
                        <div id="text">
                            Dutch national software development competition
                        </div>
                    </div>

                    <div className="dated-item">
                        <div id="header">
                            <span id="title">
                                Skills Masters 2022 Semifinals
                            </span>

                            <span id="date">
                                Passed to finals
                            </span>
                        </div>
                        <div id="text">
                            Pre-selection for national software development competition.
                        </div>
                    </div>

                    <div className="dated-item">
                        <div id="header">
                            <span id="title">
                                Hackathon masters 2019
                            </span>

                            <span id="date">
                                Audience prize
                            </span>
                        </div>
                        <div id="text">
                            4 person Hackathon group hackathon in 'S-Hertogenbosch on the topic of agriculture.
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
}
