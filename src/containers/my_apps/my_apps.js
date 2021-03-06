/**
 * Created by YasumasaTakemura on 2017/06/14.
 */
import React, {Component} from 'react';
import axios from 'axios'

import {ConsoleContainer, AppList, KPIs, Graph, QuitModal} from '../index';

export default class MyApps extends Component {
    constructor() {
        super();
        this.state = {
            quit: false,
            currency: 'usd',
                        consoleWidth: 350,
            apps: [
                {
                    app_id: 0,
                    price: [0, 5, 0, 0],
                    month: [0, 10, 10, 10, 10],
                    t_fee: [0, 5, 12, 2, 1],
                    fq: [0, 565, 1234, 243, 102],
                    currency: 'usd',
                }, {
                    app_id: 5,
                    price: [15, 0, 0, 0],
                    month: [5, 5, 5, 5, 5],
                    t_fee: [3, 5, 12, 2, 1],
                    fq: [303, 565, 1234, 243, 102],
                    currency: 'usd',
                }, {
                    app_id: 0,
                    price: [30, 0, 0, 0],
                    month: [7, 7, 7, 7, 7],
                    t_fee: [3, 5, 12, 2, 1],
                    fq: [303, 565, 1234, 243, 102],
                    currency: 'usd',
                }, {
                    app_id: 0,
                    price: [0, 5, 0, 0],
                    month: [0, 10, 10, 10, 10],
                    t_fee: [0, 5, 12, 2, 1],
                    fq: [0, 565, 1234, 243, 102],
                    currency: 'usd',

                }, {
                    app_id: 5,
                    price: [15, 0, 0, 0],
                    month: [5, 5, 5, 5, 5],
                    t_fee: [3, 5, 12, 2, 1],
                    fq: [303, 565, 1234, 243, 102],
                    currency: 'usd',
                }, {
                    app_id: 0,
                    price: [30, 0, 0, 0],
                    month: [7, 7, 7, 7, 7],
                    t_fee: [3, 5, 12, 2, 1],
                    fq: [303, 565, 1234, 243, 102],
                    currency: 'usd',
                },
            ]
        }
    }

    toggleQuitModal() {
        this.setState({quit: !this.state.quit})

    }

    render() {
        const {apps, quit,currency,consoleWidth} = this.state;
        const styles = {
            container: {
                width: '90%',
                margin: '0 auto'
            },

            kpiContainer:{
                backgroundColor:'red',
                position:'fixed',
                width:'100%',
                top:0,
            }
        };

        return <div style={{position:'relative'}}>
            <ConsoleContainer {...this.props} consoleWidth={consoleWidth}/>
            <KPIs apps={apps} currency={currency} styles={styles.kpiContainer}/>
            {/*<Graph apps={apps}/>*/}
            <div style={{marginTop:100}}/>
            <AppList apps={apps} toggleQuitModal={this.toggleQuitModal.bind(this)} styles={styles.container}/>

            <QuitModal show={quit} toggleQuitModal={this.toggleQuitModal.bind(this)}/>

        </div>
    }

}