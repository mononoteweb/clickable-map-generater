/**
 *
 * @param _reader
 * @param _printImgId
 * @param _printDataUrlId
 */
export function readImage(_reader) {

	/**
	 * レンダリングをリセットする
	 * @type {(() => void) | Event}
	 * @private
	 */
	const _resultDataUrl = _reader.reset;

	/**
	 * 画像を描画するDOM
	 * @type {HTMLElement | null}
	 * @private
	 */
	const _img = document.getElementById('pic-upload-img');

	/**
	 *
	 * @type {Attr}
	 * @private
	 */
	const _src = document.createAttribute('src');

	_src.value = _resultDataUrl;
	_img.setAttributeNode(_src);
}
