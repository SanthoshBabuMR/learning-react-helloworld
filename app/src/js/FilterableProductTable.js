import React from 'react';

class ProductCategoryRow extends React.Component {
  render () {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render () {
    const outOfStock = { color: 'red' };
    const product = this.props.product;
    return (
      <tr>
        <td className={!product.stocked ? outOfStock : ''}>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render () {
    let rows = [];
    let lastCategory = null;
    const filterText = this.props.filterText;
    this.props.products.forEach(product => {
      if (!product.name.includes(filterText) ||
          (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
  }

  handleFilterTextInputChange (e) {
    this.props.onFilterTextInput(e.target.value);
  }

  handleInStockInputChange (e) {
    this.props.onInStockInput(e.target.checked);
  }

  render () {
    return (
      <form>
        <input type="text"
               placeholder="Search ..."
               value={this.props.filterText}
               onChange={this.handleFilterTextInputChange} />
        <p>
          <input type="checkbox"
                 checked={this.props.inStockOnly}
                 onChange={this.handleInStockInputChange} /> Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    }
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleInStockInput = this.handleInStockInput.bind(this);
  }

  handleFilterTextInput (filterText) {
    this.setState({filterText});
  }

  handleInStockInput (inStockOnly) {
    this.setState({inStockOnly});
  }

  render () {
    return (
      <div>
        <SearchBar filterText={this.state.filterText}
                   inStockOnly={this.state.inStockOnly}
                   onFilterTextInput={this.handleFilterTextInput}
                   onInStockInput={this.handleInStockInput} />
        <ProductTable products={this.props.products}
                      filterText={this.state.filterText}
                      inStockOnly={this.state.inStockOnly} />
      </div>
    );
  }
}

export default FilterableProductTable;
