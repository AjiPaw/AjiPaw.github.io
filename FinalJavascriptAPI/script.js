const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '37873a6648msh030f7d25196c093p139c3fjsn9b306efb84a2',
		'X-RapidAPI-Host': 'free-epic-games.p.rapidapi.com'
	}
};

const loot_btn = document.getElementById('loot_btn');

loot_btn.addEventListener('click', getLoot);

const current_result = document.getElementById('current_result');
const upcoming_result = document.getElementById('upcoming_result');

function getLoot() {
	fetch('https://free-epic-games.p.rapidapi.com/free', options)
		.then(res => res.json())
		.then(data => {
			let currentResultInnerHTML = ''

			data.freeGames.current.forEach((currentgame, index) => {
				const keyImages = currentgame.keyImages

				const thumbnailImage = keyImages.filter(keyImage => keyImage.type === "Thumbnail")[0]

				currentResultInnerHTML += `
				<div id="upcoming_result${index + 1}">
					<div>${currentgame.title}</div>
					<img
						  src="${thumbnailImage.url}"
						  width="75" height="100" />
				  </div>
			`
			})

			current_result.innerHTML = currentResultInnerHTML

			let upcomingResultInnerHTML = ''

			data.freeGames.upcoming.forEach((upcominggame, index) => {
				const keyImages = upcominggame.keyImages

				const thumbnailImage = keyImages.filter(keyImage => keyImage.type === "Thumbnail")[0]

				upcomingResultInnerHTML += `
				<div id="upcoming_result${index + 1}">
					<div>${upcominggame.title}</div>
					<img
						  src="${thumbnailImage.url}"
						  width="75" height="100" />
				  </div>
			`
			})

			upcoming_result.innerHTML = upcomingResultInnerHTML
		})};
