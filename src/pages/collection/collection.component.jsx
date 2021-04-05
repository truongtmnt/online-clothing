import React from "react";
import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollections } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";

const CollectionPage = ({ match, collections }) => {
	const { title, items } = collections;
	return (
		<div className='collection-page'>
			<h2 className='title'>{title}</h2>
			<div className='items'>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

const mapStateToProp = (state, ownProp) => ({
	collections: selectCollections(ownProp.match.params.collectionId)(state),
});

export default connect(mapStateToProp)(CollectionPage);
