/**
 * ドラッグしてきたときのエフェクト指定
 * @param e
 */
export function handleDragOver (e) {
	e.stopPropagation();
	e.preventDefault();
	e.dataTransfer.dropEffect = 'copy';
}
