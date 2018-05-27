/**
 * ドラッグしてきたときのエフェクト指定
 * @param e
 */
export const handleDragOver = (e): void => {
	e.stopPropagation();
	e.preventDefault();
	e.dataTransfer.dropEffect = 'copy';
};
