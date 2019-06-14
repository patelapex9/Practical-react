import React from "react";
import { Slider, InputNumber, Row, Col, Card, Button } from "antd";

var Finance = require('financejs');


class AppreciationCalculator extends React.Component {
    state = {
        inputValue: 5,
        profitAmount: 0, // get current amounts and initialise state on comp did mont
        salePricePSF: 0,
        MOIC: 0,
        IRR: 0
    };


    onChange = value => {
        this.setState({
            inputValue: value,
            profitAmount: value,
            salePricePSF: value,
            MOIC: value,
            IRR: value

        });
        console.log(value);
    };

    calculateIRR() {
        var finance = new Finance();
        // IRR(initial value, [cashflows])
        const value = finance.IRR(154734940, 9143065, 969164919, 1027314814, 1088953703, 263722850);
        this.setState({
            IRR: value
        })
        console.log(value);

    }

    capitalAppreciation () {
        var finance = new Finance();
        // compound interest(rate, compounding period, principal investment, periods)
        const value = finance.CI()
    };

    render() {
        const { inputValue } = this.state;
        return (
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={18} xxl={16}>
                    <Slider
                        min={5}
                        max={15}
                        onChange={this.onChange}
                        value={typeof inputValue === "number" ? inputValue : 5}
                    />
                </Col>
            </Row>
        );
    }
}

export default CapitalAppreciation;