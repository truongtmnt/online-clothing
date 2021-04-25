import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "./../../components/with-spinner/with-spinner.component";

import { Route } from "react-router-dom";

import React, { Component } from "react";
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
	state = {
		loading: true,
	};

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection("collections");
		this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
			async (snapshot) => {
				//collectionsMap = Shop data
				const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
				updateCollections(collectionsMap);
				this.setState({ loading: false });
			}
		);
	}

	render() {
		const { loading } = this.state;
		const { match } = this.props;
		return (
			<div className='shop-page'>
				<Route
					exact
					path={match.path}
					render={(props) => (
						<CollectionOverviewWithSpinner isLoading={loading} {...props} />
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner isLoading={loading} {...props} />
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionsMap) =>
		dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
