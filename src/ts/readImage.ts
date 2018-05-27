/**
 *
 * @param _reader
 */
export const readImage = (_reader): void => {

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
	 * _imgに描画する
	 * @type {Attr}
	 * @private
	 */
	const _src = document.createAttribute('src');

	_src.value = _resultDataUrl;
	_img.setAttributeNode(_src);

	/**
	 * 画像をアップロードする場所を示すテキスト
	 * @type {HTMLElement | null}
	 * @private
	 */
	const _label = document.getElementById('pic-upload__txt');
	_label.style.display = 'none';

	const _header = document.getElementById('site-header');
	_header.classList.add('this-active');
};
