/**
 *
 * @param _reader
 */
export const readImage = (_reader): void => {

	console.log(_reader);

	/**
	 * レンダリングをリセットする
	 * @type {(() => void) | Event}
	 * @private
	 */
	const _resultDataUrl = _reader.result;

	/**
	 * 画像を描画するDOM
	 * @type {HTMLElement | null}
	 * @private
	 */
	const _img = document.getElementById('pic-upload__img');

	/**
	 *
	 * @type {Attr}
	 * @private
	 */
	const _src = document.createAttribute('src');

	_src.value = _resultDataUrl;
	_img.setAttributeNode(_src);
}
