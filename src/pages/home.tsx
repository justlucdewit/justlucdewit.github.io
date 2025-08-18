import { useState, useEffect } from 'react';

export function Home() {
    const calculateCurrentAge = (birthDateString: string) => {
        const birthDate = new Date(birthDateString);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const age = calculateCurrentAge("2001-07-30");

	return (
		<section>
            <h1>Welcome to my personal website</h1>

			<p>
				I am Luke_, i am a software developer located in the Netherlands and my main focus in the field of
				software development is <mark>Learning new things</mark>, <mark>Simplicity</mark>, and
				<mark> Elegancy</mark>. On this site you can view information about my projects, my resume, and other
				interesting things.
			</p>

			<br /><br />

			<h1>
				Fun facts about me
			</h1>

			<ul>
				<li>How old am I: {age} years</li>
				<li>Professional experience: {age - 20} years</li>
				<li>Hobby experience: {age - 12} years</li>
				<li>Hobbies: speedcubing, movie watching, biking, drumming</li>
			</ul>

			<br /><br />

			<h1>
				Current focus project
			</h1>

			<p>
				Currently I am working on this website itself, I want a simplistic personal website written in a framework
				that is new for me (preact) on which i can post blog articles, my resume, and my projects.
			</p>
        </section>
	);
}
