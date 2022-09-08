import React from "react";

import planet from "../../../public/planet.jpg";
import rocket from "../../../public/rocket.svg";
import './style.css';

const Content = () => {
	return (
		<div className="content">
			<div className="content-information">
				<span className="content-information__title">
					ПУТЕШЕСТВИЕ
				</span>
				<span className="content-information__text">
					на красную планету
				</span>
				<div >
					<a className="content-information__button">Начать путешествие</a>
				</div>
			</div>
			<div className="content-planet">
				<img src={planet} alt="planet" />
				<div className="content-rocket">
					<img src={rocket} alt="rocket" />
				</div>
			</div>

			<div className="content-statistic">
				<div className="content-statistic__place">
					<span className="content-statistic__text">мы</span>
					<span className="content-statistic__value">1</span>
					<span className="content-statistic__text">на рынке</span>
				</div>
				<div className="content-statistic__safety">
					<span className="content-statistic__text">гарангтируем</span>
					<span className="content-statistic__value">50%</span>
					<span className="content-statistic__text">безопасность</span>
				</div>
				<div className="content-statistic__gift">
					<span className="content-statistic__text">календарик за</span>
					<span className="content-statistic__value">2001</span>
					<span className="content-statistic__text">в подарок</span>
				</div>
				<div className="content-statistic__journey">
					<span className="content-statistic__text">путешествие</span>
					<span className="content-statistic__value">597</span>
					<span className="content-statistic__text">дней</span>
				</div>
			</div>
		</div>
	);
}

export default Content;