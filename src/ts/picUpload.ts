/**
 * ドラッグしたときの関数
 * @type {{handleDragOver}}
 */
import { handleDragOver } from './handleDragOver';

/**
 * ドロップしたときの関数
 * @type {{handleDragDropFile}}
 */
import { handleDragDropFile } from './handleDragDropFile';

/**
 *
 */
export const picUpLoad = (): void => {
	/**
	 * 画像をドロップするエリア
	 * @type {HTMLElement | null}
	 * @private
	 */
	const _dropZone = document.getElementById('pic-upload-area');

	_dropZone.addEventListener('dragover', handleDragOver, false);
	_dropZone.addEventListener('drop', handleDragDropFile, false);
}
