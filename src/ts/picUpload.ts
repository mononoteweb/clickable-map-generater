/**
 * ドラッグしたときの関数
 * @type {{handleDragOver}}
 */
const handleDragOver = require('handleDragOver');

/**
 * ドロップしたときの関数
 * @type {{handleDragDropFile}}
 */
const handleDragDropFile = require('handleDragDropFile');

/**
 *
 */
export function picUpLoad () {
	/**
	 * 画像をドロップするエリア
	 * @type {HTMLElement | null}
	 * @private
	 */
	const _dropZone = document.getElementById('pic-upload-area');

	_dropZone.addEventListener('dragover', handleDragOver, false);
	_dropZone.addEventListener('drop', handleDragDropFile, false);
}
