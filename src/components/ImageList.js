import React from 'react';
import shortid from 'shortid';

import './ImageList.css';

const ImageList = ( props ) => {
	const image_list = props.images.map(img => {
		let backgroundStyle = {
			background: `url(${img.urls.regular})`
		};

		let user_name = img.user.first_name + ' ' + img.user.last_name;

        return (
        	<div className="column is-6-tablet is-one-third-widescreen is-one-quarter-fullhd" id={'image-' + shortid.generate()} key={shortid.generate()}>
       			<a className="image-effect" href={ img.urls.full } target="_blank" rel="noopener noreferrer">
       				<div className="image-wrapper">
	       				<div className="image" style={ backgroundStyle } />
	       			</div>

	       			<div class="image-info">
	   					<img src={ img.user.profile_image.medium } alt={ user_name }  />
	   					<h4>{user_name }</h4>
					</div>
       			</a>

	        </div>
        )
    });

    return (
        <>
        	{image_list}
        </>
    )
}

export default ImageList;