/**
 * 画像読み込みの関数
 * @type {{readImage}}
 */
import { readImage } from './readImage';

/**
 * 画像をドロップしたときの挙動
 * @param e
 */
export const handleDragDropFile = (e): void => {
	e.stopPropagation();
	e.preventDefault();

	/**
	 * ドロップされた画像リストを格納
	 * @type {FileList}
	 * @private
	 */
	const _files = e.dataTransfer.files;

	/**
	 * ドロップされた画像の最初の画像を取得
	 * @type {File}
	 * @private
	 */
	const _file = _files[0];

	/**
	 * 画像を読み込む
	 * @type {FileReader}
	 * @private
	 */
	const _reader = new FileReader();

	_reader.readAsDataURL(_file);

	_reader.onload = () => {
		readImage(_reader);
	}
}
