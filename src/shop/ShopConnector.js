import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadData } from '../data/ActionCreators';
import { DataTypes } from '../data/Types';
import { Shop } from './Shop';

const mapStateToProps = dataStore => ({
  ...dataStore,
});

const mapDispatchToProps = {
  loadData,
};

const filterProducts = (products = [], category) =>
  !category || category === 'All'
    ? products
    : products.filter(p => p.category.toLowerCase() === category.toLowerCase());

class ShopConnector extends Component {
  componentDidMount() {
    this.props.loadData(DataTypes.CATEGORIES);
    this.props.loadData(DataTypes.PRODUCTS);
  }

  render() {
    const { products } = this.props;
    return (
      <Switch>
        <Route
          path="/shop/products/:category?"
          render={routeProps => (
            <Shop
              {...this.props}
              {...routeProps}
              products={filterProducts(products, routeProps.match.params.category)}
            />
          )}
        />
        <Redirect to="/shop/products" />
      </Switch>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShopConnector);
