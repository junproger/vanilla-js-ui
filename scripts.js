'use strict';

const alldownloads = [];

const download = document.querySelector('.block2-image1');
const simbol1 = document.querySelector('.block2-simbol1');
const simbol2 = document.querySelector('.block2-simbol2');
const upload1 = document.querySelector('#input1');
const upload2 = document.querySelector('#input2');
const label1 = document.querySelector('.block2-simbol3');
const label2 = document.querySelector('.block2-simbol4');
const hidden1 = document.querySelectorAll('.hidden1');
const hidden2 = document.querySelectorAll('.hidden2');

download.addEventListener('click', downDone);
upload1.addEventListener('change', uploDone);
upload2.addEventListener('change', uploDone);

function hasAllDownloads() {
	if (alldownloads[0] === 11 && alldownloads[1] === 22) {
		download.removeEventListener('click', downDone);
	} else if (alldownloads[0] === 22 && alldownloads[1] === 11) {
		download.removeEventListener('click', downDone);
	} else {
		return;
	};
};

function uploDone(event) {
	if (event.type === 'change' && event.target.id === 'input1') {
		label1.classList.add('hidden');
		hidden1[0].classList.remove('hidden1');
		hidden1[1].classList.remove('hidden1');
		upload1.removeEventListener('change', uploDone);
	} else if (event.type === 'change' && event.target.id === 'input2') {
		label2.classList.add('hidden');
		hidden2[0].classList.remove('hidden2');
		hidden2[1].classList.remove('hidden2');
		upload2.removeEventListener('change', uploDone);
	} else {
		return;
	};
};

function downDone(event) {
	if(event.target.classList.contains('block2-blank1') || 
		event.target.classList.contains('block2-txt1')) {
		simbol1.classList.add('block2-done1');
		alldownloads.push(11);
		hasAllDownloads(alldownloads);
	} else if (event.target.classList.contains('block2-blank2') || 
		event.target.classList.contains('block2-txt2')) {
		simbol2.classList.add('block2-done2');
		alldownloads.push(22);
		hasAllDownloads(alldownloads);
	} else {
		return;
	};
};
