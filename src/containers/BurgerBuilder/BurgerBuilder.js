import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    lettuce: 0.5,
    cheese: 0.75,
    meat: 2,
    bacon: 1
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            lettuce: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(ingredientKey => {
                return ingredients[ingredientKey] 
            })
            .reduce((sum, element) => {
                return sum + element;
            }, 0)
        this.setState({ purchaseable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
        const updatedIngredientCount = oldIngredientCount + 1;
        // state should be updated in an immutable way so we're creating
        // a new object with the spread operator to distribute all the 
        // properties in the old ingredients state into this new object
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] = updatedIngredientCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
        // to prevent an error if remove button is clicked before
        // that ingredient is even added, we're going to just return
        // in that scenario
        if (oldIngredientCount <= 0) {
            return;
        }
        const updatedIngredientCount = oldIngredientCount - 1;
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] = updatedIngredientCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        })
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    }

    purchaseContinueHandler = () => {
        alert('Oh yea baby you\'re ordering this biiii');
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        // eslint-disable-next-line
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        };

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        purchaseCanceled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        price={this.state.totalPrice} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;
