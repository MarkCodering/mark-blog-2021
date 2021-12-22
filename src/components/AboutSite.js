import React from 'react'
import './About.css'

const SiteIntro = [{
	  title: 'About this site',
	  text: 'This site was designed by a engineer for engineer and tech lover to improve the engineering productivity'
}];

export default function AboutSite()
{
	return (<div className='Layout'>
		<img src='./Mark Chen Logo.png' alt='logo' className='logo'/>
			{SiteIntro.map((props, idx) => (
				<div key={idx}>
					<h3>{props.title}</h3>
					<p>{props.text}</p>
					</div>
				))}
		</div>
		);
}
