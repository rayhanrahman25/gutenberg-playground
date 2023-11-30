/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, PanelRow, ColorPalette } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes: {content, textColor, backgroundColor}, setAttributes}) {
	function editContentHandler(newVal){
		setAttributes({content: newVal});
	}

	return (
		<>

		<InspectorControls>
			<PanelBody title="Color Settings">
					<p>Text Color</p>
					<ColorPalette
						colors={[
							{name: 'red', color: '#f00'},
							{name: 'white', color: '#fff'},
							{name: 'blue', color: '#00f'}
						]}
						value={ textColor }
						onChange={val => setAttributes({textColor: val})}
					>
					</ColorPalette>
					<p>Background Color</p>
					<ColorPalette
						colors={[
							{name: 'red', color: '#f00'},
							{name: 'white', color: '#fff'},
							{name: 'blue', color: '#00f'}
						]}
						value={ backgroundColor }
						onChange={val => setAttributes({backgroundColor: val})}
					>
					</ColorPalette>
			</PanelBody>
		</InspectorControls>

		<RichText { ...useBlockProps({ style: { color:textColor, backgroundColor: backgroundColor } }) } 
		value={content}
		tagName='p'
		placeholder='Enter your text.'
		onChange={editContentHandler}/>

		</>
	);
}
