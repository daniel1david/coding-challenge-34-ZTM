//click function for each sec

const section = [".sec1", ".sec2", ".sec3", ".sec4", ".sec5", ".sec6", ".sec7", ".sec8", ".sec9", ".sec10"];
const layering = ["layer1", "layer2", "layer3", "layer4", "layer5", "layer6", "layer7", "layer8", "layer9", "layer10"];


for (item of section) {
	const layer = document.querySelector(item);
	layer.addEventListener('click', function() {
		layer.classList.toggle('flip')
		console.log(item);
	})
}