const player = document.getElementById('player');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const volumenSlider = document.getElementById('slider');
const loading = document.getElementById('loading');

playBtn.addEventListener('click', () => {
	player.play();
});

stopBtn.addEventListener('click', () => {
	player.pause();
});

volumenSlider.addEventListener('input', () => {
	player.volume = volumenSlider.value;
});

player.addEventListener('loadedmetadata', () => {
	loading.style.display = 'none';
});

player.addEventListener('error', () => {
	alert('Error al cargar el vídeo.');
});

function loadVideo(file) {
	if (!file.type.match('video/mp4')) {
		alert('El archivo no tiene formato MP4.');
		return;
	}
	const fileURL = URL.createObjectURL(file);
	player.src = fileURL;
	loading.style.display = 'block';

	player.addEventListener('canplaythrough', () => {
		loading.style.display = 'none';
		player.play();
	}, {once: true});
}