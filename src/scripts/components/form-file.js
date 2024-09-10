let fields = document.querySelectorAll('.form__file-input');
Array.prototype.forEach.call(fields, function (input) {
	let label = input.nextElementSibling,
	labelVal = label.querySelector('.form__file-text').innerText;
	
	input.addEventListener('change', function (e) {
		let countFiles = '';
		if (this.files && this.files.length >= 1)
			countFiles = this.files.length;
		
		if (countFiles)
			label.querySelector('.form__file-text').innerText = 'Выбрано файлов: ' + countFiles;
		else
		label.querySelector('.form__file-text').innerText = labelVal;
	});
});